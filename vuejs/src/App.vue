<template>
    <Navbar />
    <router-view />
</template>

<script>
import './assets/scss/app.scss'
import Navbar from './components/NavbarComp'

export default {
  name: 'app',
  components: {
    Navbar,
  },
  data() {
    return {

    }
  }
}
</script>
