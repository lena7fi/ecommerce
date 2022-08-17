<template>
    <div class="container-fluid content">
        <div class="row full">
            <div class="col-md-6 left-content">
                <div class="welcome">
                    <div v-if="status.loggedIn">
                      Hi, You are Loged in!
                    </div>
                    <div v-else>
                      <h3>WELCOME!</h3>
                      <p>BUY STOCKS TODAY AND START MAKING MONEY</p>
                      <p>Register for your FREE ACCOUNT today</p>
                      <router-link to="/login">LOING/REGISTER  <i class="fa fa-arrow-right" aria-hidden="true"></i></router-link>
                    </div>
                </div>
            </div>
            <div class="col-md-6 right-content">
                <banner-content />
            </div>
        </div>
    </div>
    
</template>

<script>
import BannerContent from './auth/BannerContent'
import { mapState } from 'vuex'

export default {
  
  computed: {
      ...mapState('account', ['status'])
  },

  components: { BannerContent },
    name: 'HomeContent',
}
</script>

<style lang="scss">
    .welcome {
        margin-bottom: 30px;
        h3 {
          font-family: initial;
          color: black;
          margin-bottom: 20px;
        }

        p {
          font-family: monospace;
          color: black;
          margin-bottom: 30px;
        }

        a {
          text-decoration: none;
          color: black;
          padding: 10px;
        }
        a:hover {
          background-color: rgb(131, 124, 124);
        }
      }
</style>