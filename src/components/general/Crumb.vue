<template>
 <el-breadcrumb separator="/" separator-class="el-icon-arrow-right">
   <el-breadcrumb-item v-for="route in $route.matched" v-if="route.path != '/'" :to="route.path" :key="route.path"><h4>{{ route.name }}</h4></el-breadcrumb-item>
 </el-breadcrumb>
</template>
<script>
export default {
}
</script>
<style>
    .router-breadcrumb {
        font-size: 14px;
    }
</style>
