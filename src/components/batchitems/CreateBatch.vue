  <template>
  <div>
  <Menu></Menu>
  <md-card md-with-hover>
    <md-card-header>
      <div class='md-title'>Add Batch Recipe</div>
    </md-card-header>
  <md-card-content>
  <el-form ref='form' :inline="true" :model='form' label-width='40%' label-position='top'>
    <el-form-item label='Batch Item Name'>
      <el-input v-model='form.batchitemname'></el-input>
    </el-form-item>
    <el-form-item label='Batch Item Category'>
      <el-select class='select' popper-class="select-option" auto-complete filterable automatic-dropdown v-model='form.ingcat' placeholder='please select your ingredient category'>
        <el-option arrowOffset=0 v-for='cat in ingredients' v-bind:key='cat.id' v-bind:value='cat.value'>{{ cat.text }}</el-option>
      </el-select>
    </el-form-item>
    <el-form-item label='Yield'>
      <el-input-number size='large' controls-position='right' v-model='form.yield'></el-input-number>
    </el-form-item>
    <el-form-item label='Multiplier Measure'>
      <el-select class= 'select' filterable   automatic-dropdown v-model='form.multimeasure' placeholder='Select'>
        <el-option v-for='mm in multimeasure' v-bind:key='mm.id' v-bind:value='mm.value'>{{ mm.text }}</el-option>
      </el-select>
    </el-form-item>
    <el-form-item label='Total Batch Price ($CAD)'>
      <el-input-number size='large' controls-position='right' v-model='form.batchprice'></el-input-number>
    </el-form-item>
    <el-form-item label='Comments'>
      <el-input type='textarea'  v-model='form.desc'></el-input>
    </el-form-item>
    <el-form-item>
      <md-card md-with-hover>
        <md-card-header>
          <div class='md-title'>Add New Recipe Items</div>
        </md-card-header>
        <md-card-content>
          <el-form :inline='true' :model='newRecipeItems' label-width='40%' label-position='top'>
            <el-form-item label="Product Type">
          <el-select class='select' filterable automatic-dropdown v-model='newRecipeItems.productType' placeholder='Category'>
            <el-option v-for='p in productType' v-bind:key='p.id' v-bind:value='p.value'>{{ p.text }}</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Recipe Item">
          <el-select class='select' filterable automatic-dropdown v-model='newRecipeItems.item' placeholder='Recipe Item'>
            <el-option v-for='p in products' v-bind:key='p.id' v-bind:value='p.value'>{{ p.text }}</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label='Amount'>
          <el-input-number size='small' controls-position='right' v-model='newRecipeItems.newAmount'></el-input-number>
        </el-form-item>
        <el-form-item label="Measure">
          <el-select class= 'select' filterable automatic-dropdown v-model='newRecipeItems.multimeasure' placeholder='Measure'>
            <el-option v-for='mm in multimeasure' v-bind:key='mm.id' v-bind:value='mm.value'>{{ mm.text }}</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Notes">
          <el-input type='textarea'  v-model='newRecipeItems.newNotes' placeholder='Notes'></el-input>
        </el-form-item>
        <el-form-item label='Price ($CAD)'>
          <el-input-number size='small' controls-position='right' v-model='newRecipeItems.newPrice'></el-input-number>
        </el-form-item>
        <el-form-item>
          <el-button type='success' @click='addProduct'>Add New Recipe Item</el-button>
        </el-form-item>
        </el-form>
        </md-card-content>
      </md-card>
    </el-form-item>
    <Grid v-bind:cols='RecipeItemsCols' v-bind:records='recipeItems'></Grid>
    <el-form-item>
      <el-button type='primary' @click='onSubmit'>Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
  </md-card-content>
  </md-card>
  </div>
  </template>
<script>
import Menu from '@/components/general/Menu'
import Grid from '@/components/general/Grid'
export default {
  components: {
    Menu: Menu,
    Grid: Grid
  },
  data () {
    return {
      form: {
        batchitemname: '',
        ingcat: '',
        yield: 0,
        multimeasure: '',
        batchprice: 0,
        desc: ''
      },
      newRecipeItems: {
        newAmount: 0,
        productType: '',
        item: '',
        multimeasure: '',
        newNotes: '',
        newPrice: 0
      },
      ingredients: [
        { id: 1, text: 'Bars', value: 'Bars' },
        { id: 2, text: 'Meat', value: 'Meat' },
        { id: 3, text: 'Dairy', value: 'Dairy' }
      ],
      multimeasure: [
        { id: 1, text: 'ea', value: 'ea' },
        { id: 2, text: 'oz', value: 'oz' }
      ],
      RecipeItemsCols: [
        { id: '1', prop: 'category', label: 'Category' },
        { id: '2', prop: 'product', label: 'Recipe Item' },
        { id: '3', prop: 'amount', label: 'Amount' },
        { id: '4', prop: 'measure', label: 'Measure' },
        { id: '5', prop: 'notes', label: 'Notes' },
        { id: '6', prop: 'price', label: 'Price' }
      ],
      productType: [
        { id: 1, text: 'Batch Item', value: 'Batch Item' },
        { id: 2, text: 'Product', value: 'Product' }
      ],
      products: [],
      recipeItems: []
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    addProduct () {
      const items = this.newRecipeItems
      this.recipeItems.push({
        category: items.productType,
        product: items.item,
        amount: items.newAmount,
        measure: items.multimeasure,
        notes: items.newNotes,
        price: items.newPrice
      })
    }
  }
}
</script>
<style>
.select {
  width: 100%;
}
.card {
position: absolute;
}
</style>
