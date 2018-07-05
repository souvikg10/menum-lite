// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import {config} from './firebaseConfig'
import ElementUI from 'element-ui'
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  created () {
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push({name: 'Dashboard'})
      } else {
        this.$router.push({name: 'Welcome'})
        this.$notify({
          title: 'Please sign-in to continue',
          type: 'info'
        })
      }
    })
  },
  components: { App },
  template: '<App/>'
})
