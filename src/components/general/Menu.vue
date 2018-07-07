<template>
<el-menu class="el-menu-demo" mode="horizontal" background-color="#34d65a" text-color="#ffffff">
    <el-menu-item index="1" @click="home">Home</el-menu-item>
    <el-menu-item index="2">Profile</el-menu-item>
    <el-menu-item index="3">Help</el-menu-item>
    <el-menu-item index="6" @click="logOut">Logout</el-menu-item>
  </el-menu>
</template>

<script>
import firebase from 'firebase'
export default {
  methods: {
    logOut () {
      firebase.auth().signOut()
      this.$router.push({name: 'Welcome'})
    },
    home () {
      this.$router.push({name: 'Dashboard'})
    }
  }
}
</script>
<style>
  .md-app {
    max-height: 400px;
    border: 1px solid rgba(#000, .12);
  }
</style>
