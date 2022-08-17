<template>
    <div class="container content">
        <div class="row full">
            <div class="col-md-3 item">
                <div class="feature">
                    <i class="fa fa-btc"></i><br />
                    <router-link to="/stockList">Stock List</router-link>
                </div>
            </div>
            <div class="col-md-3 item">
                <div class="feature">
                    <i class="fa fa-briefcase"></i><br />
                    <router-link to="portfolio">Portfolio</router-link>
                </div>
            </div>
            <div class="col-md-3 item">
                <div class="feature">
                    <i class="fa fa-briefcase"></i><br />
                    <router-link to="analytics">Analytics</router-link>
                </div>
            </div>
            <div class="col-md-3 item">
                <div class="feature">
                    <i class="fa fa-address-card"></i><br/>
                    <router-link to="/profile">Profile</router-link>
                </div>
            </div>
            <div class="col-md-3 item">
                <div class="feature">
                    <i class="fa fa-history"></i><br/>
                    <router-link to="/priceHistory">Price History</router-link>
                </div>
            </div>
            <div class="col-md-3 item">
                <div class="feature">
                    <i class="fa fa-bell"></i><br/>
                    <router-link to="/notifications">Notifications</router-link>
                </div>
            </div>
            <div class="col-md-3 item">
                <div class="feature">
                    <i class="fa fa-newspaper-o"></i><br/>
                    <router-link to="/newsfeed">Newsfeed</router-link>
                </div>
            </div>
            <div class="col-md-3 item">
                <div class="feature">
                    <i class="fa fa-search"></i><br/>
                    <router-link to="/search">Search</router-link>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import '../assets/scss/dashboard.scss'
export default {
    
}
</script>