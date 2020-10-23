<template id="QuizCategories">
  <component :is="$route.meta.layout">
    <template v-slot:zone_1>
      <div class="row">
        <!-- left menu section -->
        <div class="col-md-3 mb-2 mb-md-0">
          <ul class="nav nav-pills flex-column mt-md-0 mt-1">
            <li class="nav-item" v-for="item in FetchCategories" :key="item.id">
              <a
                :class="`nav-link d-flex waves-effect waves-dark ${ActiveTabId ==item.id ? 'active' : ''}`"
                :id="item.category.id"
                data-toggle="pill"
                href="#account-vertical-general"
                aria-expanded="true"
                @click="setActiveTabId(item.id)"
              >{{item.category}}</a>
            </li>
          </ul>
        </div>
        <!-- right content section -->
        <div class="col-md-9">
          <div class="card">
            <div class="card-content">
              <div class="card-body">
                <div class="tab-content">
                  <div role="tabpanel" class="tab-pane active" aria-labelledby aria-expanded="true">
                    <div class="row">
                      <h6 class="ml-1 mb-2">Select Statements You Agree With</h6>
                      <div class="col-12">
                        <div class="form-group" v-if="selectedData">
                          <div
                            class="row"
                            v-for="(item, index) in selectedData.questions"
                            :key="index"
                          >
                            <div class="col-1">
                              <toggle-button />
                            </div>
                            <div class="col-11">{{item.question}}</div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 d-flex flex-sm-row flex-column justify-content-end">
                        <button type="submit" class="btn btn-primary mr-sm-1 mb-1 mb-sm-0 waves-effect waves-light">Save</button>
                        <button type="reset" class="btn btn-light waves-effect waves-light">Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
     name: 'QuizCategories',
     components: {
     },
     props: {},
     data() {
          return {
               variable: 'value',
               ActiveTabId: 1,
               selectedData: {}
          }
     },
     computed: {
          FetchCategories () {
               return this.$store.state.ModuleFactors.categories;
          }
     },
     watch: {

     },
     methods: {
          MethodDestroy: function () {
               this.$destroy();
          },
          setActiveTabId(id) {
               console.log('Clicked Tab', id)
               this.ActiveTabId = id;
               this.selectedData = this.FetchCategories.filter(x => {
                    return x.id == id
               })[0];
          },
          
     },
     mounted: function () {
          this.setActiveTabId(1)
     },
     beforeCreate: function () {
     },
     created: function () {
     },
     beforeMount: function () {
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
     head: {
		title: {
			inner: 'Page Title'
		},
		meta: [
			// Meta tags
		],
		link: [
			// link tags
               { 
                    rel: 'stylesheet', href:  PageSettings.theme.style1.css_theme_file, type: 'text/css',
               },
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
