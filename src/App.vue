<template>
  <head>
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
    <link href="https://unpkg.com/vuetify/dist/vuetify.min.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
  </head>
  <body>
  <b-navbar toggleable fixed="md" type="dark" variant="info">
    <b-nav-toggle target="hd-navbar-content"></b-nav-toggle>

    <b-collapse is-nav id="hd-navbar-content">
      <b-nav is-nav-bar>
        <b-nav-item to="/">TestFrontPage</b-nav-item>
        <!-- These links need to defer to the browser navigator -->
        <!-- ignore the url prefixing... it's for a reverse proxy, not a vue-router thing -->
        <b-nav-item to="/test/">Test</b-nav-item>
        <b-nav-item to="/todo/">ToDo</b-nav-item>
        </b-nav-item>
      </b-nav>
    </b-collapse>
  </b-navbar>

  <div id = "app">
    <router-view/>
  </div>

  </body>
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
