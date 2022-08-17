<template>
    <main class="setting">
        <h1 class="mb-5">Profile</h1>
        <section>
            <div class="mb-4">
                <span>First Name:</span>
                <input type="text" v-model="me.firstname" />
            </div>
            <div class="mb-4">
                <span>Last Name:</span>
                <input type="text"  v-model="me.lastname"/>
            </div>
            <div class="mb-4">
                <span>User Name:</span>
                <input type="text"  v-model="me.username"/>
            </div>
            <div class="mb-4">
                <span>Email:</span>
                <input type="email"  v-model="me.email"/>
            </div>
            <button class="changes" @click="onSave">SAVE CHANGES</button>
        </section>
    </main>
</template>

<script>
import { defineComponent } from 'vue'
import '../assets/scss/profile.scss'
import { mapState, mapActions } from 'vuex'

export default defineComponent({
    data() {
        return {
            me: this.$store.state.account.user.user
        }
    },
    created() {
        this.getAll();
    },
    computed:{
        ...mapState({
            me: state=>state.account.user,
        })
    },
    methods: {
        ...mapActions('users', ['update', 'getAll']),
        onSave() {
            console.log(this.me);
            this.update(this.me);
        }
    }
})
</script>
