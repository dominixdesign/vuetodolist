<template>
	<div class="todolist">
		<ul>
			<Item
			v-for="(todo, index) in todos"
			:key="index"
			:title="todo.title"
			:status="todo.status"
			:id="index"
			/>
		</ul>
	</div>

</template>

<script>
import { mapState } from 'vuex'
import Item from './Item'

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
.todolist {
	width: 100%;
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
