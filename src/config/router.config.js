// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

export const asyncRouterMap = [

  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/index',
		children: [
			{
				path: '/index',
				name: 'index-workplace',
				component: () => import('@/views/workplace/index'),
				meta: { title: '工作台', keepAlive: true, icon: bxAnaalyse }
			},
			{
				path: '/dashboard',
				name: 'dashboard',
				redirect: '/workplace',
				component: RouteView,
				meta: { title: '仪表盘', keepAlive: true, icon: bxAnaalyse },
				children: [
					{
						path: '/workplace',
						name: 'workplace',
						component: () => import('@/views/workplace/index'),
						meta: { title: '工作台', keepAlive: true }
					},
					{
						path: '/ind455ex',
						name: 'workpla21ce',
						component: () => import('@/views/workplace/index'),
						meta: { title: '工作台', keepAlive: true }
					},
					{
						path: '/ind66ex',
						name: 'workp21lace',
						component: () => import('@/views/workplace/index'),
						meta: { title: '工作台', keepAlive: true }
					},
					{
						path: '/in55dex',
						name: 'workpl2ace',
						component: () => import('@/views/workplace/index'),
						meta: { title: '工作台', keepAlive: true }
					},
					{
						path: '/in44dex',
						name: 'workp21lace',
						component: () => import('@/views/workplace/index'),
						meta: { title: '工作台', keepAlive: true }
					},
					{
						path: '/inde53435x',
						name: 'workplsasaace',
						component: () => import('@/views/workplace/index'),
						meta: { title: '工作台', keepAlive: true }
					},
					{
						path: '/ind354ex',
						name: 'workpl2451ace',
						component: () => import('@/views/workplace/index'),
						meta: { title: '工作台', keepAlive: true }
					},
					{
						path: '/ind543x',
						name: 'work213place',
						component: () => import('@/views/workplace/index'),
						meta: { title: '工作台', keepAlive: true }
					},
					{
						path: '/in75dex',
						name: 'workpla2112ce',
						component: () => import('@/views/workplace/index'),
						meta: { title: '工作台', keepAlive: true }
					},
					{
						path: '/ind453ex',
						name: 'work534place',
						component: () => import('@/views/workplace/index'),
						meta: { title: '工作台', keepAlive: true }
					},
					{
						path: '/ind35e7x',
						name: 'workp7453lace',
						component: () => import('@/views/workplace/index'),
						meta: { title: '工作台', keepAlive: true }
					},
					{
						path: '/inde534354x',
						name: 'workpl3ace',
						component: () => import('@/views/workplace/index'),
						meta: { title: '工作台', keepAlive: true }
					},
					{
						path: '/in5435dex',
						name: 'work4place',
						component: () => import('@/views/workplace/index'),
						meta: { title: '工作台', keepAlive: true }
					},
					{
						path: '/ind452ex',
						name: 'workp54lace',
						component: () => import('@/views/workplace/index'),
						meta: { title: '工作台', keepAlive: true }
					},
					{
						path: '/ind2121ex',
						name: 'workp6lace',
						component: () => import('@/views/workplace/index'),
						meta: { title: '工作台', keepAlive: true }
					},
					{
						path: '/ind2ex',
						name: 'wor45kplace',
						component: () => import('@/views/workplace/index'),
						meta: { title: '工作台', keepAlive: true, permission: ['common_admin'] }
					},
					/*{
						path: '/dashboard/workplace',
						name: 'Workplace',
						component: () => import('@/views/dashboard/Workplace'),
						meta: { title: '权限控制的工作台', keepAlive: true, permission: ['common_admin'] }
					},*/
				]
			}
		]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },
	
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
