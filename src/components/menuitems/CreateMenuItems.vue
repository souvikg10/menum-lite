  <template>
  <div>
  <Menu></Menu>
  <md-card md-with-hover>
    <md-card-header>
      <div class='md-title'>Add Menu Item</div>
    </md-card-header>
  <md-card-content>
  <el-form ref='form' :inline="true" :model='form' label-width='40%' label-position='top'>
    <el-form-item label='Menu Item Name'>
      <el-input v-model='form.menuitemname'></el-input>
    </el-form-item>
    <el-form-item label='Menu Item Category'>
      <el-select class='select' popper-class="select-option" auto-complete filterable automatic-dropdown v-model='form.category' placeholder='please select your ingredient category'>
        <el-option arrowOffset=0 v-for='cat in category' v-bind:key='cat.id' v-bind:value='cat.value'>{{ cat.text }}</el-option>
      </el-select>
    </el-form-item>
    <el-form-item label='Menu Item SubCategory'>
      <el-select class= 'select' filterable   automatic-dropdown v-model='form.subcat' placeholder='Select'>
        <el-option v-for='mm in subcat' v-bind:key='mm.id' v-bind:value='mm.value'>{{ mm.text }}</el-option>
      </el-select>
    </el-form-item>
    <el-form-item label='Total Menu Price ($CAD)'>
      <el-input-number size='large' controls-position='right' disabled="true" v-model='form.menuprice'></el-input-number>
    </el-form-item>
    <el-form-item label='Preparation Notes'>
      <el-input type='textarea'  v-model='form.prep'></el-input>
    </el-form-item>
    <el-form-item>
      <md-card md-with-hover>
        <md-card-header>
          <div class='md-title'>Add New Recipe Items</div>
        </md-card-header>
        <md-card-content>
          <el-form :inline='true' :model='newRecipeItems' label-width='40%' label-position='top'>
            <el-form-item label="Recipe Type">
          <el-select class='select' filterable automatic-dropdown v-model='newRecipeItems.productType' placeholder='Category'>
            <el-option v-for='p in recipeType' v-bind:key='p.id' v-bind:value='p.value'>{{ p.text }}</el-option>
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
          <el-input v-model='newRecipeItems.multimeasure' disabled="true"></el-input>
        </el-form-item>
        <el-form-item label='Build Order'>
          <el-input-number size='small' controls-position='right' v-model='newRecipeItems.buildOrder'></el-input-number>
        </el-form-item>
        <el-form-item label="Notes">
          <el-input type='textarea'  v-model='newRecipeItems.newNotes' placeholder='Notes'></el-input>
        </el-form-item>
        <el-form-item label='Price ($CAD)'>
          <el-input-number size='small' controls-position='right' v-model='newRecipeItems.newPrice' disabled="true"></el-input-number>
        </el-form-item>
        <el-form-item>
          <el-button type='success' @click='addProduct'>Add New Recipe Item</el-button>
        </el-form-item>
        </el-form>
        </md-card-content>
      </md-card>
    </el-form-item>
    <Grid v-bind:cols='recipeItemsCols' v-bind:records='recipeItems'></Grid>
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
        menuitemname: '',
        category: '',
        subcat: '',
        menuprice: 0,
        prep: ''
      },
      newRecipeItems: {
        newAmount: 0,
        productType: '',
        item: '',
        multimeasure: '',
        newNotes: '',
        newPrice: 0,
        buildOrder: 0
      },
      category: [
        { id: 1, text: 'Starters', value: 'Starters' },
        { id: 2, text: 'Burgers', value: 'Burgers' },
        { id: 3, text: 'Pasta', value: 'Pasta' }
      ],
      multimeasure: [
        { id: 1, text: 'ea', value: 'ea' },
        { id: 2, text: 'oz', value: 'oz' }
      ],
      recipeItemsCols: [
        { id: '1', prop: 'recipeType', label: 'Recipe Type' },
        { id: '2', prop: 'product', label: 'Recipe Item' },
        { id: '3', prop: 'amount', label: 'Amount' },
        { id: '4', prop: 'measure', label: 'Measure' },
        { id: '5', prop: 'build', label: 'Build Order' },
        { id: '6', prop: 'notes', label: 'Notes' },
        { id: '7', prop: 'price', label: 'Price' }
      ],
      recipeType: [
        { id: 1, text: 'Batch Item', value: 'Batch Item' },
        { id: 2, text: 'Product', value: 'Product' },
        { id: 3, text: 'Menu Item', value: 'Menu Items' }
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
        recipeType: items.productType,
        product: items.item,
        amount: items.newAmount,
        measure: items.multimeasure,
        build: items.buildOrder,
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
.select-option {
  position: absolute !important;
  font-family: Arial !important
}
</style>
