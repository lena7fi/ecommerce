<template>
    <main class="setting">
        <button ref="upbtn" @click="newdata" class="btn btn-primary" style="position: fixed ; right: 10%;display:none">Upload Data</button>
        <h1 class="mb-5">StockList</h1>
        <section style="width:99%">
            <input 
                type="file" 
                name="xlfile" 
                class="form-control input-sm" 
                style="display:none"
                accept=".xlsx" 
                id="xlf" 
                ref="xlf" 
                @change="uploadx" 
            />
            <table class="col-md-12 table table-borderless">
            <thead>
                <tr>
                    <th>No</th>
                    <th>StockName</th> 
                    <th>Volume</th>
                    <th>Price(<img src="../assets/euro-symbol.svg" style="width:12px"/> )</th>
                    <th>Pervious Close(<img src="../assets/euro-symbol.svg" style="width:12px"/> )</th>
                    <th>NetVar(<img src="../assets/euro-symbol.svg" style="width:12px"/> )</th>
                    <th>Change(% )</th>
                    <th>Beta</th>
                    <th>Quentity</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <stock-list-item-comp v-for="(item, index) in items" 
                        :key="item.id"
                        :id="item.id" 
                        :index="index" 
                        :name="item.name" 
                        :volume="item.volume" 
                        :beta="item.beta" 
                        :prev_price="item.prev_price" 
                        :change="item.change" 
                        :price="item.price" 
                        :netvar="item.netvar"
                        @onbuy="onbuy"
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
import '../assets/scss/profile.scss'
import { mapState, mapActions } from 'vuex'
import StockListItemComp from '@/components/StockListItemComp';

import XLSX from 'xlsx/dist/xlsx.full.min.js'


export default defineComponent({
    data() {
        return {
            isadmin: false,
            isbusy: false
        }
    },
    components: {
        StockListItemComp
    },
    created() {
        this.getAll();
        this.clear();
        this.isadmin = this.$store.state.account.user.user.api_key && this.$store.state.account.user.user.api_key === 'admin'
            setTimeout(() => {
                if(this.isadmin)    
                    this.$refs['upbtn'].style.display='inline';
            }, 500);

    },
    computed: {
        ...mapState({
        items: state=>state.stock.all.items, 
        msgtype: state=>state.alert.type,
        msg:state=>state.alert.message
    })
    },
    methods: {
        ...mapActions('stock', ['getAll', 'uploadxlsx']),
        ...mapActions('alert', ['clear']),
        onbuy() {
            this.isbusy=true;
            setTimeout(()=>{this.clear();this.isbusy=false}, 300);
        },
        newdata(){
            this.$refs['xlf'].click();
        },
        uploadx(e){
            console.log(e.target.files);
            var reader = new FileReader()
            let _this=this;
            reader.onload = function (e) {
            var data = e.target.result
            var workbook = XLSX.read(data, { type: 'binary' })
            let sheetName = workbook.SheetNames[0]
            let worksheet = workbook.Sheets[sheetName]
            let rowObject = XLSX.utils.sheet_to_row_object_array(worksheet)
            let date = new Date();
            let today=date.getFullYear()+'/'+date.getMonth()+'/'+date.getDay()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
                            
            var newdata=[];
            rowObject.forEach(row => {
                var nrow={
                    name:row['Stock name'],
                    price:row['Price'],
                    prev_price:row['Previous close'],
                    netvar:row['net variation'],
                    change:row['Change (%)'],
                    beta:row['Beta'],
                    volume:row['Volume'],
                    updated_time:today
                };
                newdata.push(nrow);
            });
            _this.uploadxlsx(newdata)
            }
            reader.readAsBinaryString(e.target.files[0])
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
