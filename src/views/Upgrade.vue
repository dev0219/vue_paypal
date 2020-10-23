<template>
  <PricingComponent/>
</template>
<style>
.content.app-content {
    overflow-x: inherit!important;
  }
</style>
<script>
import PageSettings from "@/store/config/globals/PageThemeSettings";
export default {
  name: "Upgrade",
  components: {
    PricingComponent: () => import("@/themes/modern-admin/components/Ready/Pricing/Pricing"),
  },
 
  data() {
    return {
      
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
  }
};
</script>