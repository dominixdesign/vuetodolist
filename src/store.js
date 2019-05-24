import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { title: 'test ToDO', desc: 'lorem ipsum dolor', status: 1 },
      { title: 'test ToDO', desc: 'lorem ipsum dolor', status: 1 },
      { title: 'test ToDO', desc: 'lorem ipsum dolor', status: 1 },
      { title: 'test ToDO', desc: 'lorem ipsum dolor', status: 1 },
      { title: 'test ToDO', desc: 'lorem ipsum dolor', status: 1 },
      { title: 'test ToDO', desc: 'lorem ipsum dolor', status: 1 }
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    getTodoById: state => id => state.todos[id]
  }
})
