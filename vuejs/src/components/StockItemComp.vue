<template>
    <li class="list-group-item" @click="click">
        <button class="btn btn-link ">{{name}}</button>
    </li>
</template>
<script>
export default {
    props: {
        name: { required: true, type: String },
        id: { required: true, type: String },
    },
    methods:{
        click() {
            this.$emit('selected')
        }
    }
}
</script>