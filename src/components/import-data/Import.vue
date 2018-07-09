<template>
<div>
<Menu></Menu>
<el-upload
  class="upload-demo"
  drag
  action=""
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  >
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
  <div class="el-upload__tip" slot="tip">xls files with a size less than 10mb</div>
</el-upload>
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
      fileList: []
    }
  },
  methods: {
    handleRemove () {
      console.log('removed')
    },
    handlePreview () {
      console.log('preview')
    }
  }
}
</script>

<style>

</style>
