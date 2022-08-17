<template>
    <tr>
        <td>{{index}}</td>
        <td>{{name}}</td>
        <td>{{qty}}</td>
        <td><input placeholder="Qty" class="w3-first" type="number" v-model="sqty" style="width: 120px" /></td>
        <td><button :disabled="isbusy" @click="confirm">Confirm</button></td>
    </tr>
</template>

<script>

    import { mapActions } from 'vuex'

    export default {
        data(){
            return{
                sqty: 0,
            }
        },
        props: {
            id: { require: true, type:Number },
            name: {require: true, type: String },
            qty: {require: true, type: Number },
            index: {require: true, type: Number },
            isbusy: {require: true, type: Boolean },
        },
        methods: {
            ...mapActions('portfolio', ['update']),
            confirm() {
                if(this.isbusy)return;
                if(this.sqty > this.qty || this.sqty <= 0 || this.qty <= 0) {
                    alert('Pls, Input again...');
                }
                else{
                let nqty = this.qty-this.sqty;
                const data={
                    portfolio: {
                        id: this.id, 
                        portfolio:{ 
                            qty: nqty
                        }
                    },
                    analytic: {
                        id: this.id,
                        analytic: {
                            stock: this.id,
                            buy: this.qty,
                            sell: this.sqty
                        }
                    },
                    notification:this.$store.state.account.user.user.email+': '+this.name + '(' + this.sqty + ') sell'
                }
                this.update(data)
                    .then(() => {
                            this.sqty = 0;
                            this.$emit('onSell')
                       
                    },error => {console.log(error)}).catch(err=>{console.log(err)});
                }
            }
        }
    }
</script>