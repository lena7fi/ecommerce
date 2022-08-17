<template>
    <main class="setting">
        <h1 class="mb-5">Anaytics</h1>
        <section style="width:80%">
            <table  class="table table-borderless" style="width:100%">
            <tr>
                <th>Stock</th>
                <th>Total Invest</th>
                <th>Total Sell</th> 
                <th>Profit / loss (<img src="../assets/euro-symbol.svg" style="width:12px; padding: 0"/> )</th>
            </tr>
            <analytic-item-comp v-for="item in analytics" :key="item.id"
                :name="item.name"
                :total="item.buy"
                :sell="item.sell"
                :netvar="item.netvar"
                :price="item.price"
            />
            <analytic-total-comp
                :total="total"
                :sell="sell"
                :pl="pl"
                 />
        </table>
        </section>
    </main>
</template>

<script>
import { defineComponent } from 'vue'
import '../assets/scss/profile.scss'
import { mapActions, mapState } from 'vuex';
import analyticItemComp from './AnalyticItemComp.vue';
import analyticTotalComp from './AnalyticTotalComp.vue';


export default defineComponent({
  components: { analyticItemComp, analyticTotalComp },
    created() {
        this.getAll();
    }, 
    computed: {
        ...mapState({
            analytics: state=>state.analytics.all.items,  
            total: state=>state.analytics.total,     
            sell: state=>state.analytics.sell,     
            pl: state=>state.analytics.pl,     
        })
    },
    methods: {
        ...mapActions('analytics', ['getAll']),
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