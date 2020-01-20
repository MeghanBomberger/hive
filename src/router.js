import Vue from 'vue'
import Router from 'vue-router'
import PageNotFound from '@/views/page-not-found'
import UserList from '@/views/user-list'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			redirect: '/users'
		},{
			path: '/users',
			component: UserList
		},{
			path: '*',
			component: PageNotFound
		}
	]
})