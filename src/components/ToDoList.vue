<template>
	<div class="todolist">
		<ul>
			<Item
      v-for="(todo, index) in todos"
      :key="index"
			:title="todo.title"
			:id="index"
			/>
		</ul>
	</div>

</template>

<script>
import { mapState, mapActions } from 'vuex'
import Item from './Item.vue'

export default {
  name: 'ToDoList',
  props: {
    msg: String
	},
	computed: mapState({
    todos: state => state.todos
	}),
	components: {
		Item
	}
}
</script>

<style>
@media (min-width: 700px) {
	.todolist {
		width: calc(700px - 4rem);
	}
}
.todolist {
	text-align: left;
}
.todolist ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>