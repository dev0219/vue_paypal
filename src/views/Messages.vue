<template id="Messages">
  <component :is="$route.meta.layout">
    <template v-slot:zone_1>
		<div class="row"> 
			<component :is="c1.c_type" :p_payload="c1"></component> 
       </div>
    </template>	
  </component>
</template>
<script>
import PageSettings from "@/store/config/globals/PageThemeSettings";
export default {
  name: "Messages",
  components: {
    ChatRoom: () =>
      import("@/themes/modern-admin/components/Ready/ChatRoom/ChatRoom.vue"),
  },
  data() {
    return {
          c1: {
            c_type: "ChatRoom",
            c_id: 1,
            c_zone: "zone_1",
            c_active: true,
            c_visibility: "dev",
            c_col_width: 'col-12',
            c_data: [
              {
                id: 1,
                title: 'title 1',
              }
            ]
          }
		}
  },
  computed: {
    ComputedName() {
      return this.variable;
    },
  },
  watch: {},
  methods: {
    MethodDestroy: function () {
      this.$destroy();
    },
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
      inner: "Page Title",
    },
    meta: [
      // Meta tags
    ],
    link: [
      // link tags
      {
        rel: "stylesheet",
        href: PageSettings.theme.style8.css_theme_file,
        type: "text/css",
      },
      { 
        rel: 'stylesheet', href:  '/assets/app-assets/css/pages/app-chat.css', type: 'text/css',
      },
    ],
    style: [
			// css files
      
		],
		script: [
      // scripts
      {  src:  '/assets/app-assets/js/scripts/pages/app-chat.js', type: 'text/javascript', async: true, body: true}
		],
  },
};
</script>