import Vue from 'vue'
import Vuex from 'vuex'
import faker from 'faker'

Vue.use(Vuex)

console.log()

// Helper function to generate example todos
const generateTodoList = numberOfTodo  => {
  var todoArray = []
  for(;numberOfTodo--;numberOfTodo>0) {
    todoArray.push({
      title: faker.fake('{{lorem.words}}'),
      desc: faker.fake('{{lorem.paragraphs}}'),
      status: Math.round(Math.random())
    })
  }
  return todoArray
}

export default new Vuex.Store({
  state: {
    todos: generateTodoList(10)
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
