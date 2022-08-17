<template>
    <tr>
        <td>-</td>
        <td>{{total}}</td>
        <td>{{sell}}</td>
        <td>{{pl}}</td>
    </tr>
</template>

<script>
    export default {
        props: {
            total: { require: true, type:Number },
            sell: {require: true, type: Number },
            pl: {require: true, type: Number },
        }
        
      
    }
</script>