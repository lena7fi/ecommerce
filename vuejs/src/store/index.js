import { createStore } from 'vuex';
import { users } from './users';
import { account } from './account';
import { alert } from './alert';
import { stock } from './stock';
import { analytics } from './analytics'
import { portfolio } from './portfolio';
import { notification } from './notification';
import { pricehistory } from './pricehistory';
import { newsfeed } from './newsfeed';

// Create a new store instance.
const store = createStore({
  modules: {
    account,
    users,
    alert,
    stock,
    analytics,
    portfolio,
    notification,
    pricehistory,
    newsfeed
  }
})

export default store;