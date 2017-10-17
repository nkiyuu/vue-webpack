<template>
  <div class="todo">
    <h1>
      To Do
      <small>({{remaining}}/{{todos.length}})</small>
      <span class="linklike" v-on:click="purge()">[purge]</span>
    </h1>

    <ul>
      <li v-for="(todo, index) in todos">
        <input type="checkbox" v-bind="{checked: todo.done}" v-on:click="todo.done = !todo.done" v-model="todo.done">
        <span v-bind:class="{done: todo.done}"> {{todo.task}} </span>
        <span class="linklike" v-on:click="del(index)">[x]</span>
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
    computed: {
      remaining: function () {
        var count = 0
        for (var i = 0, j = this.todos.length; i < j; i++) {
          if (!this.todos[i].done) {
            count++
          }
        }
        return count
      }
    },
    methods: {
      add () {
        this.todos.push(
          {
            task: this.newTask,
            done: false
          }
        )
        this.newTask = ''
      },
      del (index) {
        if (confirm('are you sure?')) {
          this.todos.splice(index, 1)
        }
      },
      purge () {
        let i = this.todos.length
        console.log(i)
        while (i--) {
          if (this.todos[i].done) {
//            console.log(i)
            this.todos.splice(i, 1)
          }
        }
      }
    }
  }
</script>

<style scoped>
  body { font-size: 13px; font-family: Arial; }
  h1 { font-size: 14px; padding: 0 0 5px; }
  ul { list-style-type: none; padding: 0; margin: 0 0 5px; }
  ul > li { padding: 0 0 5px; }
  input[type=text] { padding: 4px; border-radius: 4px; }
  .done { text-decoration: line-through;color: #dddddd;}
  .linklike{
    color: blue; cursor: pointer; font-weight: normal;}
 </style>
