<template>
    <main class="setting">
    <h1 class="mb-5">Portfolio</h1>
    <section style="width:80%">
  
        <table  class="table table-borderless" style="width:100%">
          <thead>

            <tr>
                <th>No</th>
                <th>StockName</th> 
                <th>total.qty</th>
                <th>sell.qty</th>
                <th>Sell</th>
                <th></th>
                <th></th>
            </tr>
          </thead>
          <tbody>

            <portfolio-item-comp v-for="(item, index) in items" 
                :key="item.id"
                :id="item.id"
                :index="index"
                :name="item.name"
                :qty="item.qty"
                :sellen="sellen"
                @onSell="onSell"
                :isbusy="isbusy"
             />
          </tbody>
               
        </table>
        {{msg}}
    </section>
    </main>
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions, mapState } from 'vuex';
import '../assets/scss/profile.scss'
import PortfolioItemComp from './PortfolioItemComp.vue';


export default defineComponent({
  data(){
    return{
      isbusy:false
    }
  },
  components:{
    PortfolioItemComp
  },
  created() {
    this.getAll();
    this.clear();
  }, 
  computed: {
    ...mapState({
        items: state=>state.portfolio.all.items,       
        msgtype: state=>state.alert.type,
        msg:state=>state.alert.message
    })
  },
  methods: {
    ...mapActions('portfolio', ['getAll']),
    ...mapActions('alert', ['clear']),
    onSell() {
      this.isbusy=true;
      setTimeout(()=>{this.clear();this.isbusy=false;this.getAll();}, 300);
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


