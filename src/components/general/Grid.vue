<template>
    <div>
    <el-table :data="records" border style="width: 100%" height="400"  stripe>
        <el-table-column v-for="col in cols" :key="col.id" :prop="col.prop" :label="col.label" :width="col.width">
        </el-table-column>
    </el-table>
    </div>
</template>
<script>
export default {
  props: ['cols', 'records']
}
</script>
