<template>
<router-link class="listItem" tag="li" :to="{ path: '/todo/' + id }">
	{{ title }}
</router-link>
</template>

<script>
export default {
  name: 'Item',
  props: {
		title: String,
		id: Number,
		status: String
  }
}
</script>

<style>
.listItem {
	background-color: #fff;
  box-shadow: 0 2px 1px -1px rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.12);
  padding: 1rem;
	transition: all 300ms ease-out;
	margin: .2rem 0;
}
.listItem a {
	color: rgba(203,96,179,1);
	text-decoration: none;
	font-weight: bold;
}
.listItem a:hover {
	color: rgba(48,171,193,1);
}
.listItem:hover {
	transform: scale(1.05);
}
</style>