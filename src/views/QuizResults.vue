
<template id="QuizResults">
  <component :is="$route.meta.layout">
    <template v-slot:zone_1>
      <section id="sizing">
        <div class="row">
          <div class="col-md-3">
            <div class="card">
              <div class="card-header">
                <h3 class="content-header-title mb-1 text-center">Personality Ai</h3>
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="25"
                    aria-valuemax="100"
                    style="width:25%"
                    aria-describedby="example-caption-2"
                  ></div>
                </div>
              </div>
              <div class="card-content collpase show">
                <div class="card-body pt-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </component>
</template>

<script lang="js">
import PageSettings from "@/store/config/globals/PageThemeSettings"
export default {
     name: 'QuizResults',
     components: {
          //PricingComponent: () => import("@/themes/modern-admin/components/Pricing/Pricing"),
     },
      props: {},
     data() {
          return {
               variable: 'value'
          }
     },
     computed: {
          ComputedName() {
               return this.variable
          },
     },
     watch: {

     },
     methods: {
          MethodDestroy: function () {
               this.$destroy();
          }
     },
     beforeCreate: function () {
          //console.log("beforeCreate() -> [Component]")
     },
     created: function () {
          //console.log("created() -> [Component]")
     },
     beforeMount: function () {
          //console.log("beforeMount() -> [Component]");
     },
     mounted: function () {
          //console.log("mounted() -> [Component]")
     },
     beforeUpdate: function () {
          //console.log("beforeUpdate() -> [Component]")
     },
     updated: function () {
          //console.log("updated() -> [Component]")
     },
     beforeDestroy: function () {
          //console.log("beforeDestroy() -> [Component]")
     },
     destroyed: function () {
          //console.log("destroyed() -> [Component]")
     },
     errorCaptured: (err, vm, info) => {
          //console.log("errorCaptured() -> [Component]")
     },    
     head: {
		title: {
			inner: 'Page Title'
		},
		meta: [
			// Meta tags
		],
		link: [
			// link tags
			{ rel: 'stylesheet', href:  PageSettings.theme.style1.css_theme_file, type: 'text/css' },
		],
		script: [
			// scripts
		],
		style: [
			// styles
		]
	},
}
</script>
