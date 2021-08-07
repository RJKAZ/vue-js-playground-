<template>
  <div id="app">
    <navigation/>
  </div>
</template>

<script>
import Navigation from './components/includes/navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
