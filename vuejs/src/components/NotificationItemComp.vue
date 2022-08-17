<template>
        <tr>
            <td>{{index + 1}}</td>
            <td>{{notification}}</td>
            <td>{{updated_time}}</td>
        </tr>
</template>

<script>

    export default {

        data(){
            return{

            }
        },
        props: {
            index: { require: true, type: Number },
            notification: { require: true, type: String },
            updated_time: { require:true, type: String }
        },
    }
</script>