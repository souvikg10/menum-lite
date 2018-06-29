<template>
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">Home</el-menu-item>
  <el-submenu index="2">
    <template slot="title">Menus</template>
    <el-menu-item index="2-1">Dashboard</el-menu-item>
    <el-menu-item index="2-2">Create Menu</el-menu-item>
  </el-submenu>
  <el-submenu index="3">
      <template slot="title">Batches</template>
      <el-menu-item index="3-1">Dashboard</el-menu-item>
      <el-menu-item index="3-2">Create Batch Recipe</el-menu-item>
  </el-submenu>
  <el-submenu index="4">
      <template slot="title">Products</template>
      <el-menu-item index="4-1">Dashboard</el-menu-item>
      <el-menu-item index="4-2">Create Product</el-menu-item>
  </el-submenu>
  <el-menu-item index="1"><i class="el-icon-close"></i></el-menu-item>
</el-menu>
</template>
<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  created () {
    this.user = firebase.auth().currentUser
    if (this.user) {
      this.name = this.user.displayName
      this.email = this.user.email
      this.photo = this.user.photoURL
      this.userId = this.user.uid
    }
  },
  methods: {
    logOut () {
      firebase.auth().signOut()
    }
  }
}
</script>
