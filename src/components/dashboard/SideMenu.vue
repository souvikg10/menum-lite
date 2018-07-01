<template>
<div>
<el-menu  class="el-menu-vertical-demo" background-color="#2c5f99"
      text-color="#fff"
      active-text-color="#e8e82c">
<el-submenu index="2">
    <template slot="title">Menus</template>
    <el-menu-item index="2-1">Dashboard</el-menu-item>
    <el-menu-item index="2-2">Create Menu</el-menu-item>
  </el-submenu>
  <el-submenu index="3">
      <template slot="title">Menu Items</template>
      <el-menu-item index="3-1">Dashboard</el-menu-item>
      <el-menu-item index="3-2">Create Menu Item Recipe</el-menu-item>
  </el-submenu>
  <el-submenu index="4">
      <template slot="title">Batch Items</template>
      <el-menu-item index="4-1">Dashboard</el-menu-item>
      <el-menu-item index="4-2">Create Batch Item Recipe</el-menu-item>
  </el-submenu>
  <el-submenu index="5">
      <template slot="title">Products</template>
      <el-menu-item index="5-1">Dashboard</el-menu-item>
      <el-menu-item index="5-2" @click="createProduct">Create Product</el-menu-item>
  </el-submenu>
  <el-menu-item index="6" @click="importData">Import Data</el-menu-item>
</el-menu>
</div>
</template>
<script>
export default {
  methods: {
    importData () {
      this.$router.push('/importData')
    },
    createProduct () {
      this.$router.push('/createProduct')
    }
  }

}
</script>

<style>
</style>
