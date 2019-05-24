import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { title: 'test ToDO 1', desc: 'lorem ipsum dolor1', status: 1 },
      { title: 'test ToDO 2', desc: 'lorem ipsum dolor2', status: 0 },
      { title: 'test ToDO 3', desc: 'lorem ipsum dolor3', status: 1 },
      { title: 'test ToDO 4', desc: 'lorem ipsum dolor4', status: 0 },
      { title: 'test ToDO 5', desc: 'lorem ipsum dolor5', status: 0 },
      { title: 'test ToDO 6', desc: 'lorem ipsum dolor6', status: 1 }
    ]
  },
  mutations: {
    triggerStatus(state, payload) {
      state.todos[payload.id].status = (state.todos[payload.id].status === 1) ? 0 : 1
    }
  },
  actions: {
    triggerStatus(context, payload) {
      context.commit('triggerStatus', payload)
    }
  },
  getters: {
    getTodoById: state => id => state.todos[id]
  }
})
