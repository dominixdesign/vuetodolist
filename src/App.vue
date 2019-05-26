<template>
  <section>
    <h1>
      Simple ToDoList
      <router-link title="zurück zur Liste" class="backlink" v-if="showBacklink" tag="a" :to="{ path: '/' }">
        <IconBack />
      </router-link>
    </h1>
    <hr>
    <router-view/>
  </section>
</template>

<script>
import IconBack from './assets/IconBack'
export default {
  name: 'app',
	computed: {
    showBacklink: function() {
      return this.$route.name === 'todo'
    }
  },
  components: {IconBack}
}
</script>

<style>
body {
  background: #100e17;
}
section {
  margin: 2rem;
}
h1 {
  margin: 0;
  position: relative;
  color: #fff;
}
a.backlink {
  position: absolute;
  right: 0;
}
a.backlink svg {
  width: 2rem;
}
a.backlink svg path {
  fill: #fff;
}
a.backlink:hover svg path {
  fill: #9217ba;
}
hr {
  border: none;
  height: 1px;
  margin: .5rem 0;
  width: 20rem;
  background: rgb(146,23,186);
  background: linear-gradient(90deg, rgba(146,23,186,1) 0%, rgba(0,212,255,1) 100%);
}
</style>
