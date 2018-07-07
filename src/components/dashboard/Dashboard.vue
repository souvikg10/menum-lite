<template>
<div>
<Menu></Menu>
<SideMenu></SideMenu>
</div>
</template>

<script>
import Menu from '@/components/general/Menu'
import SideMenu from '@/components/dashboard/SideMenu'
export default {
  name: 'Dashboard',
  components: {
    Menu: Menu,
    SideMenu: SideMenu
  },
  data: () => ({
  })
}
</script>
