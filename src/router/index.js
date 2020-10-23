import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VueBodyClass from 'vue-body-class';
import VueHead from 'vue-head';
import PageSettings from '@/store/config/globals/PageThemeSettings'

const theme_style = PageSettings.theme;
//const style1  = 'vertical-menu-template';
//const style2  = 'vertical-collapsed-menu';
//const style3  = 'vertical-content-menu-template';
//const style4  = 'material-vertical-collapsed-menu-template';
//const style5  = 'material-vertical-menu-template';
//const style6  = 'material-vertical-compact-menu-template';
//const style7  = 'material-vertical-content-menu-template';
//const style8  = 'material-vertical-overlay-menu-template';
//const style9  = 'horizontal-menu-template';
//const style10 = 'material-horizontal-menu-template';

Vue.use(VueHead)
Vue.use(VueRouter)



const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			requiresAuth: false,
			template: "MasterFullWidthPadding",
			layout: "Layout_12",
			bodyClass: '' + theme_style.style8.css_body,
			css_nav_top: theme_style.style8.css_nav_top,
			css_nav_left: theme_style.style8.css_nav_left
		}
	},
	{
		path: '/login',
		name: 'Login',
		meta: {
			requiresAuth: false,
			template: "MasterFullWidthNoPadding",
			layout: "Layout_12",
			bodyClass: theme_style.style8.css_body,
			css_nav_top: theme_style.style8.css_nav_top,
			css_nav_left: theme_style.style8.css_nav_left
		},
		component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
	},
	{
		path: '/register',
		name: 'Register',
		meta: {
			requiresAuth: false,
			template: "MasterFullWidthNoPadding",
			layout: "Layout_12",
			bodyClass: '' + theme_style.style8.css_body,
			css_nav_top: theme_style.style8.css_nav_top,
			css_nav_left: theme_style.style8.css_nav_left
		},
		component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
	},	
	{
		path: '/messages',
		name: 'Messages',
		meta: {
			requiresAuth: false,
			template: "MasterFullWidthNoPadding",
			layout: "Layout_12",
			bodyClass: 'chat-application ' + theme_style.style8.css_body,
			css_nav_top: theme_style.style8.css_nav_top,
			css_nav_left: theme_style.style8.css_nav_left
		},
		component: () => import(/* webpackChunkName: "Messages" */ '../views/Messages.vue')
	},
	{
		path: '/quiz/categories',
		name: 'QuizCategories',
		meta: {
			requiresAuth: false,
			template: "MasterFullWidthPadding",
			layout: "Layout_12",
			bodyClass: '' + theme_style.style8.css_body,
			css_nav_top: theme_style.style8.css_nav_top,
			css_nav_left: theme_style.style8.css_nav_left
		},
		component: () => import(/* webpackChunkName: "QuizResults" */ '../views/QuizCategories.vue')
	},
	{
		path: '/profile',
		name: 'ProfileOwner',
		meta: {
			requiresAuth: false,
			template: "MasterFullWidthPadding",
			layout: "Layout_12",
			bodyClass: '' + theme_style.style8.css_body,
			css_nav_top: theme_style.style8.css_nav_top,
			css_nav_left: theme_style.style8.css_nav_left
		},
		component: () => import(/* webpackChunkName: "ProfileOwner" */ '../views/ProfileOwner.vue')
	},
	{
		path: '/profile',
		name: 'ProfileVisitor',
		meta: {
			requiresAuth: false,
			template: "MasterFullWidthPadding",
			layout: "Layout_12",
			bodyClass: '' + theme_style.style8.css_body,
			css_nav_top: theme_style.style8.css_nav_top,
			css_nav_left: theme_style.style8.css_nav_left
		},
		component: () => import(/* webpackChunkName: "ProfileVisitor" */ '../views/ProfileVisitor.vue')
	},
	{
		path: '/profile-edit',
		name: 'ProfileEdit',
		meta: {
			requiresAuth: false,
			template: "MasterFullWidthPadding",
			layout: "Layout_12",
			bodyClass: '' + theme_style.style8.css_body,
			css_nav_top: theme_style.style8.css_nav_top,
			css_nav_left: theme_style.style8.css_nav_left
		},
		component: () => import(/* webpackChunkName: "ProfileEdit" */ '../views/ProfileEdit.vue')
	},
	{
		path: '/upgrade',
		name: 'Upgrade',
		meta: {
			requiresAuth: false,
			template: "MasterFullWidthPadding",
			layout: "Layout_12",
			bodyClass: '' + theme_style.style8.css_body,
			css_nav_top: theme_style.style8.css_nav_top,
			css_nav_left: theme_style.style8.css_nav_left
		},
		component: () => import(/* webpackChunkName: "Upgrade" */ '../views/Upgrade.vue')
	}

]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

const vueBodyClass = new VueBodyClass(routes);
router.beforeEach((to, from, next) => { vueBodyClass.guard(to, next) });

export default router
