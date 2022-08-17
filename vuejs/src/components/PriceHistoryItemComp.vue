<template>
    <tr>
        <td>{{index + 1}}</td>
        <td>{{price}}</td>
        <td>{{netvar}}</td>
        <td>{{updated_time}}</td>
    </tr>
</template>
<script>

export default {

    props: {
        updated_time: { required: true, type: String },
        price: { required: true, type: String },
        netvar: { required: true, type: String },
        id: { required: true, type: String },
        index: { required: true, type: String}
    }
}
</script>