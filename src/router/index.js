import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/TodoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/todo',
      component: TodoList
    },
    {
      path: '/todo',
      component: TodoList
    }
  ]
})
