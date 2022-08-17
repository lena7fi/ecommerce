<template>
     <li class="list-group-item p-5 mt-5">
        <div class="card" style="width:100%">
        <img class="card-img-top" :src="item.imageUrl" alt="">
        <div class="card-body">
            <h4 class="card-title">{{item.title}}</h4>
            <div class="card-text">
                <p>{{item.description}}</p>
                <p>{{item.publishedAt}}</p>
                <span>{{item.industries}}</span>
                <span>{{item.sectors}}</span>
            </div>
            <a :href="item.url">{{item.url}}</a>
        </div>
        </div>
     </li>
</template>

<script>
    export default {
         props: {
            item: {require: true, type: Object },
        },
    }
</script>

<style lang="scss" scoped>

</style>