<template>
  <div class="todo">
    <h1> To Do</h1>
    <div> {{ todos }} </div>
    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" v-bind="{checked: todo.done}" v-on:click="todo.done = !todo.done" v-model="todo.done">
        <span v-bind:class="{done: todo.done}"> {{todo.task}} </span>
      </li>
    </ul>
    <input type="text" placeholder="new task" v-model="newTask" v-on:keyup.enter="add()">
  </div>
</template>

<script>
  export default {
    name: 'ToDo',
    data () {
      return {
        newTask: '',
        todos: [
          { task: 'task1', done: false },
          { task: 'task2', done: true },
          { task: 'task3', done: false }
        ]
      }
    },
    methods: {
      add: function () {
        this.todos.push({
          task: this.newTask,
          done: false
        })
        this.newTask = ''
      }
    }
  }
</script>

<style scoped>
  h1 {
    font-size: 30px;
    border-bottom: 1px solid;
    padding: 0 0 5px;
  }

  ul {
    list-style-type: none ;
    padding: 0;
    margin: 0 0 5px;
  }

  ul > li {
    padding: 0 0 5px;
  }

  input[type=text] {
    padding: 4px;
    border-radius: 4px;
  }

  .done {
    text-decoration: line-through;
    color: #aaa;
  }
 </style>
