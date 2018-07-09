<template>
    <div>
    <Menu></Menu>
    <el-aside>
    <md-list class="md-triple-line">
      <md-list-item v-for="menu in menus" v-bind:key="menu.id" index="batch.id">
        <div class="md-list-item-text">
           <span> {{ menu.menuname }} </span>
           <span> {{ menu.category }} </span>
           <span> {{ menu.year }} </span>
        </div>
        <md-button class="md-icon-button md-list-action">
          <i class="material-icons">play_arrow</i>
        </md-button>
      </md-list-item>
    </md-list>
    </el-aside>
  </div>
</template>
<script>
import Menu from '@/components/general/Menu'
export default {
  components: {
    Menu: Menu
  },
  data () {
    return {
      menus: [
        {id: 1, menuname: 'Menu Thursday', category: 'Starters', year: '2018'},
        {id: 2, menuname: 'Fridays special', category: 'Starters', year: '2017'}
      ]
    }
  }
}
</script>
