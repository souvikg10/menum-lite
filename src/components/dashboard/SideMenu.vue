<template>
<div style="display:inline-block;vertical-align:top">
<table align=center>
  <tr>
    <td>
      <md-card md-with-hover  class="md-primary">
      <md-ripple>
        <md-card-header>
          <div class="md-title">Menus</div>
          <div class="md-subhead">Organise your Menus</div>
        </md-card-header>
        <md-card-content>
          Use this module to manage your daily menus, create new ones and print them
        </md-card-content>
        <md-card-actions md-alignment="space-between">
          <md-button>Dashboard</md-button>
          <md-button>Create Menu</md-button>
        </md-card-actions>
      </md-ripple>
      </md-card >
    </td>
    <td>
      <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Menu Items</div>
          <div class="md-subhead">Organise your Menu items</div>
        </md-card-header>
        <md-card-content>
          Create/Manage Menu Items and print them as recipes for your staff
        </md-card-content>
        <md-card-actions md-alignment="space-between">
          <md-button>Dashboard</md-button>
          <md-button @click="createMenuItems">Create Menu Items</md-button>
        </md-card-actions>
      </md-ripple>
      </md-card>
    </td>
  </tr>
  <tr>
    <td>
      <md-card md-with-hover>
        <md-ripple>
          <md-card-header>
            <div class="md-title">Batch Items</div>
            <div class="md-subhead">Manage your batch recipes</div>
          </md-card-header>
          <md-card-content>
            Manage your favorite batch recipes and analyse the cost per recipe
          </md-card-content>
          <md-card-actions md-alignment="space-between">
            <md-button>Dashboard</md-button>
            <md-button @click="createBatch">Create Batch Items</md-button>
          </md-card-actions>
        </md-ripple>
      </md-card>
    </td>
    <td>
      <md-card md-with-hover class="md-primary">
        <md-ripple>
          <md-card-header>
            <div class="md-title">Products</div>
            <div class="md-subhead">View your products</div>
          </md-card-header>
          <md-card-content>
            Manage/View your products received from your distributors. Create Test products as well
          </md-card-content>
          <md-card-actions md-alignment="space-between">
            <md-button>Dashboard</md-button>
            <md-button @click="createProduct">Create Products</md-button>
          </md-card-actions>
        </md-ripple>
      </md-card>
    </td>
  </tr>
  <tr>
    <td colspan="2">
      <md-card md-with-hover>
        <md-ripple>
          <md-card-header>
            <div class="md-title">Import</div>
            <div class="md-subhead">Import Distributor data</div>
          </md-card-header>
          <md-card-content>
            Import your distributor data from GFS/Sysco
          </md-card-content>
          <md-card-actions md-alignment="space-between">
            <md-button @click="importData">Import data</md-button>
          </md-card-actions>
        </md-ripple>
      </md-card>
    </td>
  </tr>
</table>
</div>
</template>
<script>
export default {
  methods: {
    importData () {
      this.$router.push({name: 'Import'})
    },
    createProduct () {
      this.$router.push({name: 'Create Product'})
    },
    createBatch () {
      this.$router.push({name: 'Create Batch'})
    },
    createMenuItems () {
      this.$router.push({name: 'Create Menu Items'})
    }
  }

}
</script>

<style>
</style>
