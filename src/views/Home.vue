<template id="home">
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
  name: "Home",
  components: {
    UserCard: () =>
      import("@/themes/modern-admin/components/Ready/Users/user-card/UserCard"),
  },
  data() {
    return {
      c1: {
      c_type: "UserCard",
      c_id: 1,
      c_zone: "zone_1",
      c_active: true,
		  c_visibility: "dev",
		  c_col_width: 'col-xl-3 col-sm-12',
		  c_data: [
			  {
				  id: 1,
				  title: 'title 1',
        },
         {
				  id: 2,
				  title: 'title 2',
        },
         {
				  id: 3,
				  title: 'title 3',
        },
         {
				  id: 4,
				  title: 'title 4',
        },
         {
				  id: 5,
				  title: 'title 5',
        },
         {
				  id: 6,
				  title: 'title 6',
			  }
		  ]
		},
	    c2: {
          c_type: "UserCard",
          c_id: 2,
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
    };
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
        href: PageSettings.theme.style1.css_theme_file,
        type: "text/css",
      },
    ],
    script: [
      // scripts
    ],
    style: [
      // styles
    ],
  },
};
</script>