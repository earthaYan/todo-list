<template>
  <section class="real-app">
    <input type="text" class="add-input" autofocus placeholder="接下去要做什么？"
      @keyup.enter="addTodo"/>
    <item :todo="todo" v-for="todo in filteredTodos" :key="todo.id"
      @del="deleteTodo"></item>
    <tabs :filter="filter" :todos="todos"
      @toggle="toggleFilter" @clear="clearAllCompleted"></tabs>
  </section>
</template>

<script>
import Item from './item'
import Tabs from './tabs'
let id = 0
export default {
  data () {
    return {
      todos: [],
      filter: 'all'
    }
  },
  components: {
    Item,
    Tabs
  },
  computed: {
    filteredTodos () {
      if (this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter(todo => completed === todo.completed)
    }
  },
  methods: {
    addTodo (event) {
      this.todos.unshift({
        id: id++,
        content: event.target.value.trim(),
        completed: false
      })
      event.target.value = ''
    },
    deleteTodo (id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    },
    toggleFilter (state) {
      this.filter = state
    },
    clearAllCompleted () {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../assets/styles/global';
.real-app{
  position: absolute;
  top: px2rem(60);
  // bottom: px2rem(60);
  background-color: transparent;
  width:px2rem(600);
  box-shadow: 0 0 px2rem(4) #666;
  .add-input{
    position: relative;
    margin: 0;
    width: 100%;
    font-size: px2rem(24);
    outline: none;
    box-sizing: border-box;
    padding: px2rem(16) px2rem(16) px2rem(16) px2rem(36);
    border: none;
    box-shadow: inset 0 -2px 1px rgba(0,0,0,.03);
  }
}
</style>
