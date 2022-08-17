<template>
    <main class="setting">
        <h1 class="mb-5">PriceHistroy</h1>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <ul class="list-group" style="margin:auto;">
                        <stock-item-comp v-for="(item) in sitems" :key="item.id"
                            :id="item.id"
                            :name="item.name"
                            @selected="onselected(item.id)"
                        />
                    </ul>
                </div>
                <div class="col-md-8">
                    <section>
                        <table  class="table table-borderless">
                        <thead>
                            <tr>
                                <th>No</th> 
                                <th>Price</th> 
                                <th>Net variation</th> 
                                <th>Updated Time</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <price-history-item-comp v-for="(item, index) in vitems" 
                                    :key="item.id"
                                    :index="index" 
                                    :price="item.price" 
                                    :netvar="item.netvar" 
                                    :updated_time="item.updated_time" 
                                    />
                        </tbody>
                    </table>
                    {{msg}}
                    </section>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { defineComponent } from 'vue'
import '../assets/scss/profile.scss'
import { mapState, mapActions } from 'vuex'
import PriceHistoryItemComp from '@/components/PriceHistoryItemComp.vue';
import StockItemComp from '@/components/StockItemComp';

export default defineComponent({
    data(){
        return{
            vitems:[]
        }
    },
    components: {
        PriceHistoryItemComp,
        StockItemComp
    },
    created() {
        this.getAll();
    },
    computed: {
        ...mapState({
        items: state=>state.pricehistory.all.items, 
        sitems: state=>state.pricehistory.stock.items, 
    })
    },
    methods: {
        ...mapActions('pricehistory', ['getAll']),
        onselected(id) {
            console.log(id,this.items)
            this.vitems = this.items.filter(item => item.stock == id).sort().reverse()
        },
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
