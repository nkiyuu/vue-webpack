<template>
  <div class="weather">
    <h1>test weather api</h1>
    <div> {{ results }} </div>
    <input type="button" v-on:click="getWeather()">
    </div>
</template>

<script>
  import axios from 'axios'
  import config from '../config'
  const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast'

  export default {
    name: 'weather',
    data () {
      return {
        results: []
      }
    },
    methods: {
      getWeather: function () {
        axios.get(BASE_URL + '?q=' + 'Tokyo' + ',jp&APPID=' + config.WEATHER_API).then((res) => {
          this.results = res.data
        })
      }
    }
  }
</script>

<style></style>
