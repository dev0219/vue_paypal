<template id="ProfileOwner">
  <component :is="$route.meta.layout">
    <template v-slot:zone_1>
      <div class="row">
        <div class="col-10">
              <h3 class="content-header-title mb-0">You Have 80% Compatiblity With Ryan</h3>
        </div>
        <div class="col-2">
              <div class="row">
                  <div class="col-6">
                      <button class="btn btn-block btn-info mb-1" type="button">Chat</button>
                  </div>
                  <div class="col-6">
                      <button class="btn btn-block btn-info mb-1" type="button">Unmatch</button>
                  </div>
              </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="card">
            <div class="text-center">
              <div class="card-body">
                <img
                  src="/img/avatar-s-4.b4f57575.png"
                  alt="Card image"
                  class="rounded-circle height-100"
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">Michelle Howard</h5>
                <h6 class="card-subtitle text-muted">100% Compatibility Match!</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card">
            <div class="text-center">
              <div class="card-body">
                <img
                  src="/img/avatar-s-4.b4f57575.png"
                  alt="Card image"
                  class="rounded-circle height-100"
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">Michelle Howard</h5>
                <h6 class="card-subtitle text-muted">100% Compatibility Match!</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="card" style="height: 794.109px;">
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Factor 1 - You Both Enjoy Hiking</li>
                <li class="list-group-item">Factor 2 - You Both Love Reading</li>
                <li class="list-group-item">Factor 3 - You Both Dislike People</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card" style="height: 794.109px;">
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Factor 1 - You Both Enjoy Hiking</li>
                <li class="list-group-item">Factor 2 - You Both Love Reading</li>
                <li class="list-group-item">Factor 3 - You Both Dislike People</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </template>
  </component>
</template>

<script lang="js">
import PageSettings from "@/store/config/globals/PageThemeSettings"
export default {
     name: 'ProfileOwner',
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
	}
}
</script>
