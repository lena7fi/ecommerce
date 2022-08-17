<template>
    <tr>
        <td>{{name}}</td>
        <td>{{totalx}}</td>
        <td>{{sellx}}</td>
        <td>{{profitx}}</td>
    </tr>
</template>

<script>
    export default {
        data(){
            return {
                totalx:this.total*this.price,
                sellx:this.sell*this.price,
                profitx:this.sell*this.netvar,
            }
        },
        props: {
            total: { require: true, type:Number },
            sell: {require: true, type: Number },
            netvar: {require: true, type: Number },
            price: {require: true, type: Number },
            name: {require: true, type: String },
        },
    }
</script>