<template>
<div>
<Menu></Menu>
<md-card md-with-hover>
  <md-card-header>
    <div class='md-title'>Add New Product</div>
  </md-card-header>
<md-card-content>
<el-form ref="form" :model="form" label-width="20%" label-position="left">
  <el-form-item label="Product Name">
    <el-input v-model="form.productname"></el-input>
  </el-form-item>
  <el-form-item label="Ingredient Category">
    <el-select class="select" filterable clearable auto-complete automatic-dropdown v-model="form.ingcat" placeholder="please select your ingredient category">
      <el-option v-for="cat in ingredients" v-bind:key="cat.id" v-bind:value="cat.value">{{ cat.text }}</el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="Supplier">
    <el-select class = "select"  filterable clearable auto-complete automatic-dropdown v-model="form.supplier" placeholder="Please select supplier">
      <el-option v-for="sup in suppliers" v-bind:key="sup.id" v-bind:value="sup.value">{{ sup.text }}</el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="Pack/Size">
    <el-input v-model="form.packsize"></el-input>
  </el-form-item>
  <el-form-item label="Multiplier">
    <el-input-number size="large" controls-position="right" v-model="form.multiplier"></el-input-number>
  </el-form-item>
  <el-form-item label="Multiplier Measure">
    <el-select class= "select" filterable clearable auto-complete automatic-dropdown v-model="form.multimeasure" placeholder="Select">
      <el-option v-for="mm in multimeasure" v-bind:key="mm.id" v-bind:value="mm.value">{{ mm.text }}</el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="Contract Price">
    <el-input-number size="large" controls-position="right" v-model="form.contractprice"></el-input-number>
  </el-form-item>
  <el-form-item label="Comments">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Create</el-button>
    <el-button>Cancel</el-button>
  </el-form-item>
</el-form>
</md-card-content>
</md-card>
</div>
</template>
<script>
import Menu from '@/components/general/Menu'
export default {
  components: {
    'Menu': Menu
  },
  data () {
    return {
      form: {
        name: '',
        ingcat: ''
      },
      ingredients: [
        { id: 1, text: 'Bars', value: 'Bars' },
        { id: 2, text: 'Meat', value: 'Meat' },
        { id: 3, text: 'Dairy', value: 'Dairy' }
      ],
      suppliers: [
        { id: 1, text: 'ABC', value: 'ABC' },
        { id: 2, text: 'Heinz', value: 'Heinz' },
        { id: 3, text: 'Cadbury', value: 'Cadbury' }
      ],
      multimeasure: [
        { id: 1, text: 'ea', value: 'ea' },
        { id: 2, text: 'oz', value: 'oz' }
      ]
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>
<style>
.select {
    width:100%
}
</style>
