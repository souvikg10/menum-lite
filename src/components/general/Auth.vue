<template lang="html">
  <div id="firebaseui-auth-container"></div>
</template>
<script>
import firebase from 'firebase'
import firebaseui from 'firebaseui'
export default {
  name: 'welcome',
  mounted () {
    var uiConfig = {
      signInSuccessUrl: '/dashboard',
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      credentialHelper: firebaseui.auth.CredentialHelper.NONE
    }
    var ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', uiConfig)
    // ui.disableAutoSignIn()
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push({name: 'Dashboard'})
        this.$notify({
          title: 'Welcome,' + user.displayName,
          type: 'success'
        })
      } else {
        this.$router.push({name: 'Welcome'})
        this.$notify({
          title: 'Please sign-in to continue',
          type: 'info'
        })
      }
    })
  }
}
</script>
