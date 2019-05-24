<template>
<div class="listItemDetails" v-if="todo">
	<h2><IconCaret v-if="todo.status === 0" /><IconCheck v-if="todo.status === 1" /> {{ todo.title }}</h2>
	<p>{{ todo.desc }}</p>
	<p><button v-on:click="triggerStatus"><span>markiere Aufgabe als {{ todo.status === 1 ? 'nicht erledigt': 'erledigt' }}</span></button></p>
</div>
</template>

<script>
import IconCheck from '../assets/IconCheck'
import IconCaret from '../assets/IconCaret'

export default {
	name: 'ItemDetails',
  components: {IconCheck, IconCaret},
	computed: {
    todo: function() {return this.$store.getters.getTodoById(this.$route.params.id)}
	},
	methods: {
		triggerStatus: function() {
			this.$store.dispatch('triggerStatus',{id: this.$route.params.id})
		}
	}
}
</script>

<style>
.listItemDetails {
	color: #fff;
  padding: 1rem 0;
}
.listItemDetails h2 svg {
  width: 2rem;
  display: inline-block;
  vertical-align: middle;
  margin: -3px .5rem 0 0;

}
button {
  background: rgb(146,23,186);
  background: linear-gradient(90deg, rgba(146,23,186,1) 0%, rgba(0,212,255,1) 100%);
	padding: 2px;
	border: none;
	cursor: pointer;
}
button span {
	background: #100e17;
	padding: .5rem;
	display: block;
	color: #fff;
}
</style>
