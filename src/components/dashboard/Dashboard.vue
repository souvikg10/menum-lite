<template>
  <div>
   <el-header>
      <Menu> </Menu>
      <Crumb> </Crumb>
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
import Crumb from '@/components/general/Crumb'
export default {
  components: {
    'Menu': Menu,
    'SideMenu': SideMenu,
    'Crumb': Crumb
  }
}
</script>
