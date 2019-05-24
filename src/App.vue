<template>
  <section>
    <h1>Simple ToDoList</h1>
    <hr>
    <router-view/>
  </section>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app'
}
</script>

<style>
section {
  margin: 2rem;
}
h1 {
  margin: 0;
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
