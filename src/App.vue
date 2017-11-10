<template>
  <div id="app">
    <img src="./assets/logo.jpg" width= "250px">
    <HelloWorld/>
    <Book/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Book from './components/Book'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Book
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
