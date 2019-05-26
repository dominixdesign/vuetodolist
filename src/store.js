import Vue from 'vue'
import Vuex from 'vuex'
import todos from './example.data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos
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
