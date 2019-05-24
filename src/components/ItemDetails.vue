<template>
<div class="listItemDetails" v-if="todo">
	<h2>{{ todo.title }}</h2>
	{{ todo }}
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'ItemDetails',
	computed: {
    todo: function() {return this.$store.getters.getTodoById(this.$route.params.id)}
	}
}
</script>

<style>
.listItemDetails {
	background-color: #fff;
  box-shadow: 0 2px 1px -1px rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.12);
  padding: 1rem;
}
.listItem a {
	color: rgba(203,96,179,1);
	text-decoration: none;
	font-weight: bold;
}
</style>