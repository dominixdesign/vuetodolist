import Vue from 'vue'
import Router from 'vue-router'
import ItemDetails from './components/ItemDetails.vue'
import ToDoList from './components/ToDoList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: ToDoList
    },
    {
      path: '/todo/:id',
      name: 'todo',
      component: ItemDetails,
      props: true
    }
  ]
})
