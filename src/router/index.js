import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Detail from '@/components/detail'
// import Detail1 from '@/components/detail1'
// import Detail2 from '@/components/detail2'
// import Detail3 from '@/components/detail3'
// import Detail4 from '@/components/detail4'
// import Detail5 from '@/components/detail5'
// import Detail6 from '@/components/detail6'
// import Detail7 from '@/components/detail7'
// import Detail8 from '@/components/detail8'
// import Detail9 from '@/components/detail9'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/detail/:id',
//       component: Detail0
//     },
//     {
//       path: '/detail0',
//       name: 'detail0',
//       component: Detail0
//     },
//     {
//       path: '/detail1',
//       name: 'detail1',
//       component: Detail1
//     },
//     {
//       path: '/detail2',
//       name: 'detail2',
//       component: Detail2
//     },
//     {
//       path: '/detail3',
//       name: 'detail3',
//       component: Detail3
//     },
//     {
//       path: '/detail4',
//       name: 'detail4',
//       component: Detail4
//     },
//     {
//       path: '/detail5',
//       name: 'detail5',
//       component: Detail5
//     },
//     {
//       path: '/detail6',
//       name: 'detail6',
//       component: Detail6
//     },
//     {
//       path: '/detail7',
//       name: 'detail7',
//       component: Detail7
//     },
//     {
//       path: '/detail8',
//       name: 'detail8',
//       component: Detail8
//     },
//     {
//       path: '/detail9',
//       name: 'detail9',
//       component: Detail9
//     }
//   ]
// })
export default new Router({
mode: 'history',
  routes: [{
          path: '/',
          component: Home,
          // redirect: '/index'
      },
      {
          // path: '/:id',
          path: '/id',
          component: Detail
          // children: [{
          //     path: '/:id',
          //     query: {
          //         id: ''
          //     },
          //     component: sections,
          // }],
      }
  ]
})