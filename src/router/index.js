import { createRouter, createWebHistory } from 'vue-router'
import { menuRoute } from '@/helpers/menuRout';
import store from '@/store/storeRoom';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'defaultLayout',
      component: ()=> import('@/layouts/defaultLayout.vue'),
      children: [
        ...menuRoute
      ]
    },
    {
      path: '/auth',
      name: 'authLayout',
      component: () => import('@/layouts/authLayout.vue'),
      children: [
        {
          path: 'registration',
          name: 'registration',
          component: () => import('@/views/auth/regPage.vue')
        },  
        {
          path: '',
          name: 'login',
          component: () => import('@/views/auth/loginPage.vue')
        }
      ]
    }
  ]
})

export default router;

router.beforeEach(async (to, from, next) => {
  console.log(to);
  
  document.title = `Hospital | ${to?.meta?.name || 'Sahifa'}`

  if (['login', 'registration', 'authLayout'].includes(to.name) || store.state.isAuth) {
    next()
  }else{
      if($cookies.isKey('hospital__token')){
        await store.dispatch('checkUser')
        next()
      }else{
        next({name: 'login'})
      }
  }  
})
