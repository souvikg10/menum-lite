<template>
<div>
    <Menu></Menu>
    <Grid v-bind:cols='productCols' v-bind:records='products'></Grid>
</div>
</template>
<script>
import Grid from '@/components/general/Grid'
import Menu from '@/components/general/Menu'
export default {
  components: {
    Grid: Grid,
    Menu: Menu
  },
  data () {
    return {
      productCols: [
        { id: '1', prop: 'ingcat', label: 'Ingredient Category' },
        { id: '2', prop: 'productname', label: 'Product Name' },
        { id: '3', prop: 'supplier', label: 'Supplier' },
        { id: '4', prop: 'packsize', label: 'Pack/Size' },
        { id: '5', prop: 'multiplier', label: 'Multiplier' },
        { id: '6', prop: 'multimeasure', label: 'Multiplier Measure' },
        { id: '7', prop: 'contractprice', label: 'Contract Price' }
      ]
    }
  }
}
</script>
