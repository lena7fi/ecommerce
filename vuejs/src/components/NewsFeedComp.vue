<template>
  <main class="container">
        <h1 class="mb-5">NewsFeed</h1>
        <section>
          <ul class="list-group">
            <news-feed-item-comp v-for="(item, index) in news"
             :key="index"
             :item="item"
             />
          </ul>
        </section>
    </main>
</template>

<script>
import NewsFeedItemComp from './NewsFeedItemComp.vue';
import { mapActions } from 'vuex'

export default {
    components:{
        NewsFeedItemComp
    },
    created () {
      // this.news = this.getAll();
    },
    data(){
      return {
          news:[
              {
                "source": {
                  "id": "cnbc",
                  "name": "CNBC"
                },
                "symbols": ["GM", "TSLA", "VOW3-DE", "F"],
                "title": "GM ups spending on EVs and autonomous vehicles by 30% to $35 billion by 2025 on higher profits",
                "description": "GM, America's largest automaker, is racing to catch up to Tesla on EVs and become a leader in the space against other well-established automakers such as VW.",
                "url": "https://newsfilter.io/articles/gm-ups-spending-on-evs-and-autonomous-vehicles-by-30-to-35-billion-by-2025-on-higher-profits-34bd42f1c936c9a56c9bdf1914fadd5a",
                "imageUrl": "https://image.cnbcfm.com/api/v1/image/106424520-1583341306047gmevbarra01.jpg?v=1583353549",
                "publishedAt": "2021-06-16T13:00:23+0000",
                "id": "34bd42f1c936c9a56c9bdf1914fadd5a",
                "industries": ["Auto Manufacturers"],
                "sectors": ["Consumer Cyclical"]
              },
              {
                "source": {
                  "id": "reuters",
                  "name": "Reuters"
                },
                "symbols": ["TSLA"],
                "title": "Polestar to make electric SUV at U.S. Volvo plant, starting in 2022",
                "description": "Polestar, the premium electric vehicle maker owned by China's Geely and Volvo Cars, will build its Polestar 3 electric SUV at Volvo's U.S. plant in South Carolina starting in the second half of 2022, the brand's chief executive said.",
                "url": "https://newsfilter.io/articles/polestar-to-make-electric-suv-at-us-volvo-plant-starting-in-2022-27a0cb71fd98d2a011e9b188341172af",
                "imageUrl": "",
                "publishedAt": "2021-06-16T10:00:15Z",
                "id": "27a0cb71fd98d2a011e9b188341172af",
                "industries": ["Auto Manufacturers"],
                "sectors": ["Consumer Cyclical"]
              },
              {
                "source": {
                  "id": "cnbc",
                  "name": "CNBC"
                },
                "symbols": ["F", "GM", "TSLA"],
                "title": "Ford's luxury Lincoln brand aims for half of sales to be electric vehicles by 2026",
                "description": "Lincoln expects about half of its sales to be all-electric models by 2026, as it plans to offer new EVs across its portfolio of vehicles within the next decade.",
                "url": "https://newsfilter.io/articles/fords-luxury-lincoln-brand-aims-for-half-of-sales-to-be-electric-vehicles-by-2026-5f8bbcab3905d371cfe66b988f72b22c",
                "imageUrl": "https://image.cnbcfm.com/api/v1/image/106361970-1580317286365lincolnstar_electricblue.jpg?v=1623792027",
                "publishedAt": "2021-06-16T10:00:01+0000",
                "id": "5f8bbcab3905d371cfe66b988f72b22c",
                "industries": ["Auto Manufacturers"],
                "sectors": ["Consumer Cyclical"]
              },
              {
                "source": {
                  "id": "benzinga",
                  "name": "Benzinga"
                },
                "symbols": ["TSLA"],
                "title": "Elon Musk Says New HVAC Firmware Coming 'Soon' In Tesla EVs That Will Be 'Quieter'",
                "description": "Tesla Inc’s (NASDAQ: TSLA) CEO Elon Musk on Tuesday said cabin noise for its mid-size sedan Model 3 is set to get even \"quieter\" soon. What Happened: Musk tweeted in response to a video to say Tesla is working on new HVAC firmware - heating, ventilation and air conditioning -...",
                "url": "https://newsfilter.io/articles/elon-musk-says-new-hvac-firmware-coming-soon-in-tesla-evs-that-will-be-quieter-0b5cc8d5a92cc8f081d694e1c6ca7587",
                "imageUrl": "",
                "publishedAt": "2021-06-16T05:16:00-04:00",
                "id": "0b5cc8d5a92cc8f081d694e1c6ca7587",
                "industries": ["Auto Manufacturers"],
                "sectors": ["Consumer Cyclical"]
              }
            ]
        }
    },
    methods:{
        ...mapActions('newsfeed', ['getAll']),

    }
}
</script>

<style lang="scss" scoped>

</style>