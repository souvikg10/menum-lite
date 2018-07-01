<template>
<div>
<Menu></Menu>
<Crumb></Crumb>
<el-form ref="form" :model="form" label-width="20%">
  <el-form-item label="Product Name">
    <el-input v-model="form.productname"></el-input>
  </el-form-item>
  <el-form-item label="Ingredient Category">
    <el-select class="select" v-model="form.ingcat" placeholder="please select your ingredient category">
      <el-option v-for="cat in ingredients" v-bind:key="cat" v-bind:value="cat.value">{{ cat.text }}</el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="Supplier">
    <el-select class = "select" v-model="form.supplier" placeholder="Please select supplier">
      <el-option v-for="sup in suppliers" v-bind:key="sup" v-bind:value="sup.value">{{ sup.text }}</el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="Pack/Size">
    <el-input v-model="form.packsize"></el-input>
  </el-form-item>
  <el-form-item label="Multiplier">
    <el-input v-model="form.multiplier"></el-input>
  </el-form-item>
  <el-form-item label="Multiplier Measure">
    <el-select class= "select" v-model="form.multimeasure" placeholder="Select">
      <el-option v-for="mm in multimeasure" v-bind:key="mm" v-bind:value="mm.value">{{ mm.text }}</el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="Contract Price">
    <el-input v-model="form.contractprice"></el-input>
  </el-form-item>
  <el-form-item label="Comments">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Create</el-button>
    <el-button>Cancel</el-button>
  </el-form-item>
</el-form>
</div>
</template>
<script>
import Menu from '@/components/general/Menu'
import Crumb from '@/components/general/Crumb'
export default {
  components: {
    'Menu': Menu,
    'Crumb': Crumb
  },
  data () {
    return {
      form: {
        name: '',
        ingcat: ''
      },
      ingredients: [
        { text: 'Bars', value: 'Bars' },
        { text: 'Meat', value: 'Meat' },
        { text: 'Dairy', value: 'Dairy' }
      ],
      suppliers: [
        { text: 'ABC', value: 'ABC' },
        { text: 'Heinz', value: 'Heinz' },
        { text: 'Cadbury', value: 'Cadbury' }
      ],
      multimeasure: [
        { text: 'ea', value: 'ea' },
        { text: 'oz', value: 'oz' }
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
