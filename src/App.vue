<template id="app" :data-app_name="get_app_name" :data-view_template="get_view_template" :data-view_layout="get_view_layout">
    <component v-bind:is="get_view_template"></component>
</template>
<!-- <template v-if="isLoggedIn"></template> -->
<script>
export default {
     name: 'App',
	components: {},
     data() {
		return {
			
          }
	},
	computed: {
		isLoggedIn(){
               return true; //this.$store.state.ModuleUsers.profile.firebaseUser;
		},
          get_app_name(){
               return this.$route.meta.app_settings.app.app_name_domain;
          },
          get_view_template(){
               return this.$route.meta.template;
          },
          get_view_layout(){
               return this.$route.meta.layout;
          }
     },
     watch: {},
     methods: {},
     beforeCreate: function () {},
     created: function () {},
     beforeMount: function () {},
     mounted: function () {},
     beforeUpdate: function () {},
     updated: function () {},
     beforeDestroy: function () {},
     destroyed: function () {},
     errorCaptured: (err, vm, info) => {}
}
</script>
