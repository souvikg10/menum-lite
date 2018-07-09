  <template>
  <div>
  <Menu></Menu>
  <md-card md-with-hover>
    <md-card-header>
      <div class='md-title'>Add Menu</div>
    </md-card-header>
  <md-card-content>
  <el-form ref='form' :inline="true" :model='form' label-width='40%' label-position='top'>
    <el-form-item label='Menu Name'>
      <el-input v-model='form.menuname'></el-input>
    </el-form-item>
    <el-form-item label='Menu Type'>
      <el-select class='select' popper-class="select-option" auto-complete filterable automatic-dropdown v-model='form.category' placeholder='please select your ingredient category'>
        <el-option arrowOffset=0 v-for='cat in category' v-bind:key='cat.id' v-bind:value='cat.value'>{{ cat.text }}</el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Menu Year">
    <el-date-picker
      v-model="form.year"
      type="year"
      placeholder="Pick a year">
    </el-date-picker>
    </el-form-item>
    <el-form-item>
      <md-card md-with-hover>
        <md-card-header>
          <div class='md-title'>Add Menu Items</div>
        </md-card-header>
        <md-card-content>
          <el-form :inline='true' :model='newMenuItems' label-width='40%' label-position='top'>
            <el-form-item label="Menu Item">
          <el-select class='select' filterable automatic-dropdown v-model='newMenuItems.newMenuItem' placeholder='Category'>
            <el-option v-for='p in menuitems' v-bind:key='p.id' v-bind:value='p.value'>{{ p.text }}</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label='Item Price 1 ($CAD)'>
          <el-input-number size='small' controls-position='right' v-model='newMenuItems.newItemPrice1'></el-input-number>
        </el-form-item>
        <el-form-item label='Item Price 2 ($CAD)'>
          <el-input-number size='small' controls-position='right' v-model='newMenuItems.newItemPrice2'></el-input-number>
        </el-form-item>
        <el-form-item label='Item Price 3 ($CAD)'>
          <el-input-number size='small' controls-position='right' v-model='newMenuItems.newItemPrice3'></el-input-number>
        </el-form-item>
        <el-form-item label='Item Price 4 ($CAD)'>
          <el-input-number size='small' controls-position='right' v-model='newMenuItems.newItemPrice4'></el-input-number>
        </el-form-item>
        <el-form-item label="Current Price ($CAD)">
          <el-input-number size='small' controls-position='right' v-model='newMenuItems.newPrice'></el-input-number>
        </el-form-item>
        <el-form-item label="Historical FC">
          <el-input-number size='small' controls-position='right' v-model='newMenuItems.newHistoricalFC'></el-input-number>
        </el-form-item>
        <el-form-item label="POS Number">
          <el-input-number size='small' controls-position='right' v-model='newMenuItems.newPos'></el-input-number>
        </el-form-item>
       <el-form-item label="Menu Placeholder">
          <el-input-number size='small' controls-position='right' v-model='newMenuItems.newMenuPlaceholder'></el-input-number>
        </el-form-item>
        <el-form-item label="Add">
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
        menuname: '',
        category: '',
        year: '2018'
      },
      newMenuItems: {
        newMenuItem: '',
        newItemPrice1: 0,
        newItemPrice2: 0,
        newItemPrice3: 0,
        newItemPrice4: 0,
        newPrice: 0,
        newHistoricalFC: 0,
        newPos: 0,
        newMenuPlaceholder: 0
      },
      menuitems: [],
      multimeasure: [
        { id: 1, text: 'ea', value: 'ea' },
        { id: 2, text: 'oz', value: 'oz' }
      ],
      recipeItemsCols: [
        { id: '1', prop: 'menuItem', label: 'Menu Item', width: '80%' },
        { id: '2', prop: 'itemPrice1', label: 'Item Price 1($CAD)' },
        { id: '3', prop: 'itemPrice2', label: 'Item Price 2($CAD)' },
        { id: '4', prop: 'itemPrice3', label: 'Item Price 3($CAD)' },
        { id: '5', prop: 'itemPrice4', label: 'Item Price 4($CAD)' },
        { id: '6', prop: 'currentPrice', label: 'Current Price($CAD)' },
        { id: '7', prop: 'historicalFC', label: 'Historical FC' },
        { id: '8', prop: 'pos', label: 'POS Number' },
        { id: '9', prop: 'menuPlaceholder', label: 'Menu Placeholder' }
      ],
      category: [
        { id: 1, text: 'Menu', value: 'Menu' },
        { id: 2, text: 'Test', value: 'Test' },
        { id: 3, text: 'Promo', value: 'Promo' }
      ],
      recipeItems: []
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    addProduct () {
      const items = this.newMenuItems
      this.recipeItems.push({
        menuItem: items.newMenuItem,
        itemPrice1: items.newItemPrice1,
        itemPrice2: items.newItemPrice2,
        itemPrice3: items.newItemPrice3,
        itemPrice4: items.newItemPrice4,
        currentPrice: items.newPrice,
        historicalFC: items.newHistoricalFC,
        pos: items.newPos,
        menuPlaceholder: items.newMenuPlaceholder
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
