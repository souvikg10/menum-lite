<template>
<div>
<el-menu class="el-menu-demo" mode="horizontal">
  <el-menu-item index="1" @click="home">Home</el-menu-item>
  <el-menu-item index="2">Profile</el-menu-item>
  <el-menu-item index="3">Help</el-menu-item>
  <el-menu-item index="6" @click="logOut">Logout</el-menu-item>
</el-menu>
</div>
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
