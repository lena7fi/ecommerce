import { createRouter, createWebHashHistory } from 'vue-router'
import HomeContent from '../components/HomeContentComp'

// Authentication
import LoginContent from '../components/auth/LoginContentComp'
import RegisterContent from '../components/auth/RegisterContentComp'
import ProfileContent from '../components/ProfileComp'
import Dashboard from '../components/DashboardComp'

import Analytics from '../components/AnalyticsComp'
import Portfolio from '../components/PortfolioComp'
import Stocklist from '../components/StocklistComp'
import Serach from '../components/SearchComp'
import NewsFeed from '../components/NewsFeedComp'
import PriceHistory from '../components/PriceHistoryComp'
import Notification from '../components/NotificationComp'

const routes = [
  {
    path: '/search',
    name: 'search',
    component: Serach,
  },
  {
    path: '/newsfeed',
    name: 'newsfeed',
    component: NewsFeed,
  },
  {
    path: '/pricehistory',
    name: 'pricehistory',
    component: PriceHistory,
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: Notification,
  },
  {
    path: '/analytics',
    name: 'analytics',
    component: Analytics,
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio,
  },
  {
    path: '/stocklist',
    name: 'stocklist',
    component: Stocklist,
  },
  {
    path: '/',
    component: HomeContent
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/login',
    name: 'login',
    component: LoginContent
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterContent
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileContent
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
