<template>
  <div class="container">
    <download-excel
        class   = "btn btn-default"
        :data   = "json_data"
        :fields = "json_fields"
        worksheet = "My Worksheet"
        name    = "data_employees_QCC.xls">
      <button type="button" class="btn btn-primary">Excel Download</button>
    </download-excel>
    <!-- <RandomChart :totalKehadiran="propsTotalKehadiran"/> -->
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Noreg</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody v-if="!noData">
        <tr v-for="(data, i) in employees" v-bind:key="data.id">
          <th scope="row">{{i+1}}</th>
          <td>{{data.noreg}}</td>
          <td>{{data.fullname}}</td>
        </tr>
      </tbody>
      <tbody v-if="noData">
        <tr>
          <th scope="row" colspan="3">No Data Entry</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import db from '../firebase'
  import JsonExcel from 'vue-json-excel'
  // import RandomChart from '../components/RandomChart'
  export default {
    data() {
      return {
        employees: '',
        count: 0,
        json_fields: {
          'Name': 'fullname',
          'Noreg': 'noreg'
        },
        json_data: [],
        noData: true,
        totalKehadiran: 0
      }
    },
    components: {
      'download-excel': JsonExcel,
      // RandomChart
    },
    methods: {
      loadData() {
        this.noData = false
        db.ref('/absence').on('value', snapshoot => {
        let containerData = []
        this.containerEmployees = []
          if(snapshoot.val()) {
            Object.values(snapshoot.val()).forEach((employee, i) => {
              console.log(employee);
              containerData.push(employee)
            })
            this.json_data = containerData
            this.employees = containerData
            this.totalKehadiran = this.employees.length
          } else {

          }
        })
      }
    },
    mounted() {
      this.loadData()
      if(this.employees.length === 0) {
        this.noData = true
      } else {
        this.noData = false
      }
    }
  }
</script>
