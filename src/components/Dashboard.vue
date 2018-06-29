<template>
  <div>
    <Menu> </Menu>
  </div>
</template>

<script>
import firebase from 'firebase'
import Menu from './Menu'
export default {
  components: {
    'Menu': Menu
  },
  data () {
    return {
      photo: '',
      userId: '',
      name: '',
      email: '',
      user: {}
    }
  },
  created () {
    this.user = firebase.auth().currentUser
    if (this.user) {
      this.name = this.user.displayName
      this.email = this.user.email
      this.photo = this.user.photoURL
      this.userId = this.user.uid
    }
  },
  methods: {
    logOut () {
      firebase.auth().signOut()
    }
  }
}
</script>
