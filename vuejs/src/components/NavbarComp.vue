<template>
    <nav class="navbar">
        <div class="container d-flex">
            <div class="me-auto">
                <b> <h3>STOCK TRADING</h3> </b>
            </div>
            <div class="toggler">
                <ul class="menu">
                    <li class="menu-item">
                        <router-link to="/" class="home">HOME</router-link>
                    </li>
                    <li :class="isLogin ? 'menu-item' : 'hidden'">
                        <router-link to="/dashboard" class="home">DASHBOARD</router-link>
                    </li>
                    <li :class="isLogin ? 'menu-item' : 'hidden'">
                        <router-link to="/profile" class="home">PROFILE</router-link>
                    </li>
                    <li :class="!isLogin ? 'menu-item' : 'hidden'">
                        <router-link to="/login" class="home">LOGIN/REGISTER</router-link>
                    </li>
                    <li :class="isLogin ? 'menu-item' : 'hidden'">
                            <router-link to="/login">Logout</router-link>
                    </li>
                </ul>
                <button class="navbar-toggler"><i class="fa fa-align-justify"></i></button>
            </div>
        </div>
    </nav>
</template>

<script>
import '../assets/scss/navbar.scss'
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex';

export default {
    name: 'NavbarComp',
    setup () {
        const store = useStore();
        return {
            isLogin: computed(() => store.state.account.status.loggedIn),
        }
    },
    data() {
        return {
            
        }
    },

    created() {

    },

    methods: {
        logout() {
        }
    }

}
</script>

<style lang="scss">
    
</style>