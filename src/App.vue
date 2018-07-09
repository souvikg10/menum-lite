<template>
  <div id="app">
    <img src="./assets/chef.jpg" style="height:6%;width:6%;">
    <img src="./assets/logo.png" style="height:6%;width:6%;">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 0px;
}
</style>
