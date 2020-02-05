import Home from '../pages/Home/home.vue'
import Search from '../pages/Search/search.vue'
import Category from '../pages/Category/category.vue'
import CategoryItem from "../pages/Category/CategoryItem/categoryItem.vue"
import ShopCart from '../pages/ShopCart/shopCart.vue'
import Worth from '../pages/Worth/worth.vue'
import Profile from '../pages/Profile/profile.vue'
import Login from '../pages/Login/login.vue'
import Register from '../pages/Register/register.vue'
export default [
  {
    path: '/home',
    component: Home,
    meta: {
      isShow: true
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      isShow: true
    },
    children: [
      {
        path: '/categorylist/category/',
        component: CategoryItem,
        meta: {
          isShow: true
        }
      },
      {
        path: '',
        redirect: '/categorylist/category'
      }
    ]
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/shopCart',
    component: ShopCart,
    meta: {
      isShow: true
    }
  },
  {
    path: '/worth',
    component: Worth,
    meta: {
      isShow: true
    }
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/',
    redirect: '/home'
  }
]