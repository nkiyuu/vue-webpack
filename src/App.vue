<template>
  <div id="app">
    <h2>Links</h2>
      <router-link to="/test">test</router-link></li>
      <router-link to="/todo">todo</router-link>
      <router-link to="/map">map</router-link>
      <router-link to="/weather">weather</router-link>

    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
}

</style>
