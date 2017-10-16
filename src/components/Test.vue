<template>
  <div class="test">
    <h1>test</h1>
    <div> {{ msg }} </div>
    <textarea v-model="msg" placeholder="test data binding"></textarea>
  </div>
</template>

<script>
  export default {
    name: 'Test',
    data () {
      return {
        msg: 'this is test page'
      }
    }
  }
</script>

<style scoped>
  textarea {
    width: 400px;
    height: 300px;
  }
</style>
