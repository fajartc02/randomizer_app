<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
  import LineChart from './LineChart.js'

  export default {
    components: {
      LineChart
    },
    data () {
      return {
        datacollection: null
      }
    },
    mounted () {
      this.fillData()
    },
    props: {
      propsTotalKehadiran: Number
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: ['Kehadiran'],
          datasets: [
            {
              label: 'Employees',
              backgroundColor: '#f87979',
              data: [this.propsTotalKehadiran]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  0px auto;
  }
</style>