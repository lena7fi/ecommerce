<template>
    <main class="setting">
        <h1 class="mb-5">Notification List</h1>
        <section style="width:80%">
            <input placeholder="Search" class="form-control input-sm" style="margin-bottom: 20px" v-model="key" @keyup="search" />
            <table  class="table table-borderless" style="width:100%">
            <thead>
                <tr>
                <td>No</td>
                <td>Notification</td>
                <td>Update Time</td>
                </tr>
            </thead>
            <tbody>
                <notification-item-comp v-for="(item, index) in (key===''?items:vitems)" 
                    :key="item.id"
                    :index="index" 
                    :notification="item.notification" 
                    :updated_time="item.updated_time" 
                    />
            </tbody>
        </table>
        </section>
    </main>
</template>

<script>
import { defineComponent } from 'vue'
import '../assets/scss/profile.scss'
import { mapState, mapActions } from 'vuex'
import NotificationItemComp from '@/components/NotificationItemComp'

export default defineComponent({
    data() {
        return {
            key:'',
            vitems:[]
        }
    },
    components: {
        NotificationItemComp
    },
    created() {
        this.getAll();
    },
    computed: {
        ...mapState({
        items: state=>state.notification.all.items, 
    })
    },
    methods: {
        ...mapActions('notification', ['getAll']),
        search() {
            this.vitems = this.items.filter(item => item.notification.match(this.key))
        }
    }
})
</script>

<style lang="scss">
    label {
        font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
    }
    table, th, td, input {
        // border: 1px solid black;
        border-collapse: collapse;
    }
    button {
        border: 1px solid;
    }
    * {
        text-align: center;
    }
</style>
