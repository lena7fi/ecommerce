<template>
    <div class="container-fluid content">
        <div class="row full">
            <div class="col-md-6 left-content">
                <div class="register">
                    <p>Already have an account? <router-link to="/login"> Login </router-link></p>
                    <b>Create Your Stock Trading Account</b><br><br>
                    
                    <form @submit.prevent="handleSubmit">
                    <div class="form-group">
                        <i class="fa fa fa-user"></i>
                        <input type="text" placeholder="First Name" v-model="user.firstname" required>
                    </div>

                    <div class="form-group">
                        <i class="fa fa fa-user"></i>
                        <input type="text" placeholder="Last Name" v-model="user.lastname" required>
                    </div>

                    <div class="form-group">
                        <i class="fa fa fa-user"></i>
                        <input type="text" placeholder="Username" v-model="user.username" required>
                    </div>

                    <div class="form-group">
                        <i class="fa fa-envelope"></i>
                        <input type="email" placeholder="Email" v-model="user.email" required>
                    </div>

                    <div class="form-group">
                        <i class="fa fa-lock"></i>
                        <input type="password" placeholder="Password" v-model="user.password" required>
                    </div>

                    <button class="btn-register" type="submit" :disabled="status.registering">SIGN UP</button>
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
import '../../assets/scss/register.scss'
import BannerContent from './BannerContent';
import { mapState, mapActions } from 'vuex'

export default {
    name: 'RegisterContent',
    data() {
        return {
            user:{
                username: '',
                firstname: '',
                lastname: '',
                email: '',
                password: '',
            }
        }
    },
    components: {
        BannerContent,
    },
    computed: {
        ...mapState('account', ['status'])
    },
    methods: {
        ...mapActions('account', ['register']),
        handleSubmit() {
            // e.preventDefault();

            this.submitted = true;
            this.register(this.user);
        }
    }
}
</script>
