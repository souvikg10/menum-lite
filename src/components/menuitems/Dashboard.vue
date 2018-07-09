<template>
    <div>
    <Menu></Menu>
    <el-aside>
    <md-list class="md-triple-line">
      <md-list-item v-for="menu in menuitems" v-bind:key="menu.id" index="batch.id">
        <div class="md-list-item-text">
           <span> {{ menu.menuitemname }} </span>
           <span> {{ menu.category }} </span>
           <span> {{ menu.menuprice }} ($CAD) </span>
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
      menuitems: [
        {id: 1, menuitemname: 'Chicken Wings', category: 'Starters', menuprice: 20.42},
        {id: 1, menuitemname: 'Chicken Wings', category: 'Starters', menuprice: 20.42}
      ]
    }
  }
}
</script>
