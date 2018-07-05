<template>
  <div>
   <el-header>
      <Menu> </Menu>
    </el-header>
    <el-container></el-container>
    <el-aside>
      <SideMenu></SideMenu>
    </el-aside>
  </div>
</template>

<script>
import Menu from '@/components/general/Menu'
import SideMenu from './SideMenu'
export default {
  components: {
    'Menu': Menu,
    'SideMenu': SideMenu
  }
}
</script>
