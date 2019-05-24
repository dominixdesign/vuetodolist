<template>
<li class="listItem">
  <router-link tag="h4" :to="{ path: '/todo/' + id }"><IconCaret v-if="status === 0" /><IconCheck v-if="status === 1" /><span>{{ title }}</span></router-link>
</li>
</template>

<script>
import IconCheck from '../assets/IconCheck'
import IconCaret from '../assets/IconCaret'

export default {
  name: 'Item',
  components: {IconCheck, IconCaret},
  props: {
    title: String,
    id: Number,
    status: Number
  }
}
</script>

<style>
.listItem {
  padding: 1rem 0;
  position: relative;
}
.listItem h4 {
  color: rgba(255,255,255,1);
  text-decoration: none;
  font-weight: bold;
  margin: 0;
  cursor: pointer;
  display: inline-block;
}
.listItem h4 svg {
  width: 1.5rem;
  display: inline-block;
  vertical-align: middle;
  margin: -3px .5rem 0 0;
}
.listItem h4 span::before {
  content: "";
  border-bottom: 1px solid #fff;
  display: inline-block;
  transition: all 300ms ease-out;
  width: 0;
  height: 10px;
}
.listItem:hover h4 span::before {
  width: 10px;
}
</style>
