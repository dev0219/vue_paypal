import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { firebaseAuth } from './firebase'

// plugins - toggle switches
import { ToggleButton } from 'vue-js-toggle-button'


// package - vue update body class from router meta 
/////////////////////////////////////////////////////

Vue.config.productionTip = false;

import MasterFullWidthNoPadding from '@/themes/modern-admin/templates/MasterFullWidthNoPadding';
import MasterFullWidthPadding from '@/themes/modern-admin/templates/MasterFullWidthPadding';

import Layout_2_8_2 from '@/themes/modern-admin/layouts/Layout_2_8_2';
import Layout_2_10 from '@/themes/modern-admin/layouts/Layout_2_10';
import Layout_3_6_3 from '@/themes/modern-admin/layouts/Layout_3_6_3';
import Layout_3_9 from '@/themes/modern-admin/layouts/Layout_3_9';
import Layout_4_4_4 from '@/themes/modern-admin/layouts/Layout_4_4_4';
import Layout_4_8 from '@/themes/modern-admin/layouts/Layout_4_8';
import Layout_6_6 from '@/themes/modern-admin/layouts/Layout_6_6';
import Layout_8_4 from '@/themes/modern-admin/layouts/Layout_8_4';
import Layout_9_3 from '@/themes/modern-admin/layouts/Layout_9_3';
import Layout_10_2 from '@/themes/modern-admin/layouts/Layout_10_2';
import Layout_12 from '@/themes/modern-admin/layouts/Layout_12';
import LayoutMXAuto2 from '@/themes/modern-admin/layouts/LayoutMXAuto2';
import LayoutMXAuto4 from '@/themes/modern-admin/layouts/LayoutMXAuto4';
import LayoutMXAuto6 from '@/themes/modern-admin/layouts/LayoutMXAuto6';
import LayoutMXAuto8 from '@/themes/modern-admin/layouts/LayoutMXAuto8';
import LayoutMXAuto10 from '@/themes/modern-admin/layouts/LayoutMXAuto10';

Vue.component('MasterFullWidthNoPadding', MasterFullWidthNoPadding);
Vue.component('MasterFullWidthPadding', MasterFullWidthPadding);


Vue.component('Layout_2_8_2', Layout_2_8_2);
Vue.component('Layout_2_10', Layout_2_10);
Vue.component('Layout_3_6_3', Layout_3_6_3);
Vue.component('Layout_3_9', Layout_3_9);
Vue.component('Layout_4_4_4', Layout_4_4_4);
Vue.component('Layout_4_8', Layout_4_8);
Vue.component('Layout_6_6', Layout_6_6);
Vue.component('Layout_8_4', Layout_8_4);
Vue.component('Layout_9_3', Layout_9_3);
Vue.component('Layout_10_2', Layout_10_2);
Vue.component('Layout_12', Layout_12);
Vue.component('LayoutMXAuto2', LayoutMXAuto2);
Vue.component('LayoutMXAuto4', LayoutMXAuto4);
Vue.component('LayoutMXAuto6', LayoutMXAuto6);
Vue.component('LayoutMXAuto8', LayoutMXAuto8);
Vue.component('LayoutMXAuto10', LayoutMXAuto10);

// plugins 
Vue.component('ToggleButton', ToggleButton)




firebaseAuth.onAuthStateChanged((user) => {
	if (user) {
		store.commit("setProfile", {
			firebaseUser: user
		});

		router.replace("/home");
	}
});


router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		// this route requires auth, check if logged in
		// if not, redirect to login page.
		if (!store.state.ModuleUsers.profile.firebaseUser) {
			next({ path: '/', });
		}
		else {
			next();
		}
	}
	else {
		next();
	}
});

var vm = new Vue({
	data() {
		return {

		}
	},
	computed: {

	},
	watch: {

	},
	methods: {

	},
	beforeCreate: function () {
		console.log('before create')

	},
	created: function () {

	},
	beforeMount: function () {

	},
	mounted: function () {

	},
	beforeUpdate: function () {

	},
	updated: function () {

	},
	beforeDestroy: function () {

	},
	destroyed: function () {

	},
	errorCaptured: (err, vm, info) => {

	},
	router,
	store,
	render: h => h(App)
}).$mount('#app')
