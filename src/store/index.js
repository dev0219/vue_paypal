import Vue from 'vue'
import Vuex from 'vuex'

import Factors from './module/factors'
import Matches from './module/matches'
import Membership from './module/membership'
import Messages from './module/messages'
import Users from './module/users'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		count: 10,
	},
	mutations: {

	},
	actions: {

	},
	modules: {
		ModuleFactors: Factors,
		ModuleMatches: Matches,
		ModuleMembership: Membership,
		ModuleMessages: Messages,
		ModuleUsers: Users
	}
})
