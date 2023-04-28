import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    }, {
      path: '/',
      name: 'PageView',
      component: resolve => require(['@/view/PageView'], resolve),
      children: [
        {
          path: '/',
          redirect: '/home'
        }, {
          path: '/home',
          name: 'home',
          component: resolve => require(['@/view/HomePage'], resolve),
          meta: {
            title: '汤米科技用科技重塑商业'
          }
        }, {
          path: '/software',
          name: 'software',
          component: resolve => require(['@/view/Software'], resolve),
          meta: {
            title: '软件产品'
          },
          children: [
            {
              path: '/software',
              redirect: 'software/CRM'
            },
            // {
            //   path: '/software/smartTown',
            //   name: 'software',
            //   component: resolve => require(['@/view/Software_smartTown'], resolve),
            //   meta: {
            //     title: '软件产品丨智能小镇管理系统'
            //   }
            // },
            {
              path: '/software/CRM',
              name: 'software',
              component: resolve => require(['@/view/Software_CRM'], resolve),
              meta: {
                title: '软件产品丨客户关系分销系统'
              }
            }
          ]
        }, {
          path: '/service',
          name: 'service',
          component: resolve => require(['@/view/Service'], resolve),
          meta: {
            title: '相关服务'
          }
        }, {
          path: '/newsinformation',
          name: 'newsinformation',
          component: resolve => require(['@/view/NewsInformation'], resolve),
          meta: {
            title: '新闻动态'
          }
        }, {
          path: '/companyintroduction',
          name: 'companyintroduction',
          component: resolve => require(['@/view/CompanyIntroduction'], resolve),
          meta: {
            title: '公司介绍'
          }
        },
        // {
        //   path: '/jobchance',
        //   name: 'jobchance',
        //   component: resolve => require(['@/view/JobChance'], resolve),
        //   meta: {
        //     title: '工作机会'
        //   }
        // }, {
        //   path: '/contactus',
        //   name: 'contactus',
        //   component: resolve => require(['@/view/ContactUs'], resolve),
        //   meta: {
        //     title: '联系我们'
        //   }
        // },
        {
          path: '/servicedetail',
          name: 'servicedetail',
          component: resolve => require(['@/view/ServiceDetail'],resolve),
          meta: {
            title: '相关服务'
          }
        }
      ]
    }
  ]
})
