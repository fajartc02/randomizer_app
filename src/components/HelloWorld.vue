<template>
  <div>
    <button type="button" style="margin: 10px" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Register Employee</button>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Register Employee</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Noreg</label>
                <input type="text" class="form-control" placeholder="Noreg" v-model="noreg">
              </div>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Fullname</label>
                <input type="text" class="form-control" placeholder="Fullname" v-model="fullname">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="registerEmployee" data-dismiss="modal">Submit</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <div class="mainContainer">
      <div class="inputContainer">
        <div class="card" style="width: 100%;">
          <div class="card-header">
            How many you want to generate?
          </div>
          <form>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Total Generate</label>
               <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="your input number" min="1" v-model="generate">
            </div>
          </form>
          <div class="container">
            <button type="button" class="btn btn-success" style="width: 40%; margin: 10px" @click="startRandom">Start</button>
            <button type="button" class="btn btn-danger" style="width: 40%" @click="stopRandom">Stop</button>
          </div>
        </div>
      </div>
      <div class="resultContainer">
        <div class="jumbotron jumbotron-fluid" style="background-image: url('https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');">
          <div class="container" v-if="!randomCond">
            <h1 class="display-4" style="color: white">Please start to generate</h1>
          </div>
          <!-- condition generate -->
          <div class="container" style="color: white">
            <h1 class="display-4" v-if="!stopCond">{{randomName.fullname}}</h1>
            <h1 class="display-4" v-if="stopCond">Congratulations !</h1>
            <table class="table table-sm table-dark" v-if="stopCond">
              <thead>
                <tr>
                  <th scope="col">Noreg</th>
                  <th scope="col">Name</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="data in winnerEmployee" v-bind:key="data.id">
                  <td>{{data.noreg}}</td>
                  <td>{{data.fullname}}</td>
                </tr>
              </tbody>
            </table>
            <button v-if="stopCond" type="button" class="btn btn-danger" style="width: 40%" @click="reGenerate">Re-Generate</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../firebase'
import Swal from 'sweetalert2'

export default {
  name: 'HelloWorld',
  data() {
    return {
      noreg: '',
      fullname: '',
      employees: '',
      generate: '',
      winnerEmployee: [],
      randomName: '',
      randomCond: false,
      start: '',
      stopCond: false,
      auth: 'qcc1'
    }
  },
  methods: {
    async registerEmployee() {
      let newData = {
        noreg: this.noreg,
        fullname: this.fullname
      }
      if(this.noreg !== '' && this.fullname !== '') {
        Swal.fire(
          'Good job!',
          'your data has been submited',
          'success'
        )
        await db.ref('/generateRandom').push({
          noreg: this.noreg,
          fullname: this.fullname
        })
        await db.ref('/absence').push({
          noreg: this.noreg,
          fullname: this.fullname
        })
        this.noreg = ''
        this.fullname = ''
      } else {
        Swal.fire(
          'Please input your data',
          '',
          'error'
        )
      }
    },
    loadData() {
      db.ref('/generateRandom').on('value', snapshoot => {
      let containerData = []
      this.employees = []
        if(snapshoot.val()) {
          Object.values(snapshoot.val()).forEach((employee, i) => {
            // console.log(employee);
            employee.id = Object.keys(snapshoot.val())[i]
            containerData.push(employee)
          })
          this.employees = containerData
        }
      })
    },
    async startRandom() { 	
      const { value: password } = await Swal.fire({
        title: 'Enter your password',
        input: 'password',
        inputPlaceholder: 'Enter your password',
        inputAttributes: {
          maxlength: 10,
          autocapitalize: 'off',
          autocorrect: 'off'
        }
      })
      if (password === this.auth) {
        Swal.fire(
          'Ready To Randomizer',
          '',
          'success'
        )
        this.stopCond = false
        if(this.generate !== '' && +this.generate <= this.employees.length) {
          this.randomCond = true
          this.start = setInterval(() => {
            let randomIndex = Math.floor(Math.random() * this.employees.length) + 1
            // console.log(this.employees[Math.floor(Math.random() * this.employees.length) + 1]);
            if(this.employees.length !== 0) {
              // console.log(randomIndex);
              this.randomName = this.employees[randomIndex-1]
              if(this.winnerEmployee.length < Number(this.generate)) {
                // console.log(this.employees[randomIndex-1]);
                
                // console.log(this.winnerEmployee.indexOf(this.employees[randomIndex-1]));
                
                if(this.winnerEmployee.indexOf(this.randomName) !== -1) {
                  // nothing
                } else {
                  this.winnerEmployee.push(this.randomName)
                  console.log(this.employees[randomIndex-1].id);
                  
                  let userRef = db.ref('/generateRandom/' + this.employees[randomIndex-1].id);
                  userRef.remove()
                }
              }
              console.log(this.employees[randomIndex-1]);
            }
            
          }, 100)
        } else {
          if(this.generate !== '') {
            Swal.fire(
              'Your generate number is not enough',
              `Belum ada yang hadir / karyawan yang belum dapet hanya ${this.employees.length} orang`,
              'error'
            )
          } else {
            Swal.fire(
              'Please input generate number',
              '',
              'error'
            )
          }
        }
      } else {
        Swal.fire(
          'Sorry Only admin can start randomizer',
          '',
          'error'
        )
      }
    },
    stopRandom() {
      clearInterval(this.start)
      this.stopCond = true
    },
    reGenerate() {
      this.stopCond = false
      this.winnerEmployee  = []
      this.randomName = ''
      this.randomCond = ''
      this.generate = ''
    }
  },
  mounted() {
    this.loadData()
    this.$nextTick(() => {
      // console.log(this.data);
    })
  },
  created() {
    this.loadData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainContainer {
  /* border-style: solid; */
  border-color: red;
  height: 400px;
  width: '100%';
  border-width: 1px;
  display:flex;
}
.inputContainer {
  margin: 5px;
  /* border-style: solid; */
  border-color:black;
  height: '100%';
  width: 500px;
  border-width: 1px;
  /* display: inline-flex; */
}
.resultContainer {
  margin: 5px;
  /* border-style: solid; */
  border-color:black;
  height: '100%';
  width: 1000px;
  border-width: 1px;
  /* display: inline-flex; */
}
</style>
