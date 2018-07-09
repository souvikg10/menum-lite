<template>
    <div>
    <Menu></Menu>
    <el-aside>
    <md-list class="md-triple-line">
      <md-list-item v-for="batch in batchitems" v-bind:key="batch.id" index="batch.id">
        <div class="md-list-item-text">
           <span> {{ batch.batchitemname }} </span>
           <span> {{ batch.ingcat }} </span>
           <span> {{ batch.batchprice }} ($CAD) </span>
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
      batchitems: [
        {id: 1, batchitemname: 'Caesar Salad', ingcat: 'Salads', batchprice: 20.42},
        {id: 2, batchitemname: 'Caesar Salad', ingcat: 'Salads', batchprice: 20.42},
        {id: 3, batchitemname: 'Caesar Salad', ingcat: 'Salads', batchprice: 20.42},
        {id: 4, batchitemname: 'Caesar Salad', ingcat: 'Salads', batchprice: 20.42},
        {id: 5, batchitemname: 'Caesar Salad', ingcat: 'Salads', batchprice: 20.42},
        {id: 6, batchitemname: 'Caesar Salad', ingcat: 'Salads', batchprice: 20.42},
        {id: 7, batchitemname: 'Caesar Salad', ingcat: 'Salads', batchprice: 20.42}
      ]
    }
  }
}
</script>
