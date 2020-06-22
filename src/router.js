import Vue from 'vue'
import Router from 'vue-router'
import Firebase from 'firebase'
import Home from './views/Home.vue'
import Create from './components/Create.vue'
import Error404 from './components/Error404.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', 
      redirect: 'home'
    },
    {
      path: '/about',
      name: 'about',
      
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
        requiereLogin:true

      }
    },
    {
    path:'/create',
    name: 'create',
    component: Create
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/*',
      name: 'Error404',
      component: Error404
    }
  ]
})

router.beforeEach((to, from, next) =>{

  let user = Firebase.auth().currentUser;
  let authRequired = to.matched.some(route => route.meta.requiereLogin)
  if (!user && authRequired){
    next ('login')
  }  else{
    next()
  }
})

export default router;