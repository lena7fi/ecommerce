<template>
    <div class="container-fluid content">
        <div class="row full">
            <div class="col-md-6 left-content">
                <div class="login">
                    <p>Don't have an account? <router-link to="/register"> Register </router-link></p>
                    <b>Login to Account</b><br><br>
                    <form @submit.prevent="handleSubmit">
                    <div class="form-group">
                        <i class="fa fa-envelope"></i>
                        <input type="email" placeholder="Email" v-model="email" required>
                    </div>

                    <div class="form-group">
                        <i class="fa fa-lock"></i>
                        <input type="password" placeholder="Password" v-model="password" required>
                    </div>

                    <p class="forgot">Forgot your password?</p>
                    <button class="btn-login" type="submit">SIGN IN</button>
                    </form>
                </div>
            </div>
            <div class="col-md-6">
                <banner-content />
            </div>
        </div>
    </div>
</template>

<script>
import '../../assets/scss/login.scss'
import BannerContent from './BannerContent';
import { mapState, mapActions } from 'vuex';

export default {
    name: 'LoginContent',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    components: {
        BannerContent
    },
    computed: {
        ...mapState('account', ['status'])
    },
    created () {
        // reset login status
        this.logout();
    },
    methods: {
        ...mapActions('account', ['login', 'logout']),
        handleSubmit () {
            // e.preventDefault();
            this.submitted = true;
            const { email, password } = this;
            if (email && password) {
                this.login({ email, password })
            }
        }
    }
}
</script>
