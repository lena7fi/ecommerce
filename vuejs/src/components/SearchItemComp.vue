<template>
    <tr>
        <td>{{index}}</td>
        <td>{{name}}</td>
        <td>{{price}}</td>
        <td>{{prev_price}}</td>
        <td>{{netvar}}</td>
        <td>{{change}}</td>
        <td>{{beta}}</td>
        <td>{{volume}}</td>
    </tr>
</template>
<script>
export default {
    props: {
        name: { required: true, type: String },
        price: { required: true, type: String },
        volume: { required: true, type: String },
        beta: { required: true, type: String },
        change: { required: true, type: String },
        prev_price: { required: true, type: String },
        netvar: { required: true, type: String },
        id: { required: true, type: String },
        index: { required: true, type: String}
    },
}
</script>