import Vue from 'vue'
import Router from 'vue-router'
import PageNotFound from '@/views/page-not-found'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/'
		},{
			path: '*',
			component: PageNotFound
		}
	]
})