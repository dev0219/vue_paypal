<template id="MasterFullWidthNoPadding">
<div>
     <TopNavigation></TopNavigation>
     <LeftNavigation></LeftNavigation>
     <div class="app-content content">
         <router-view />
    </div>
</div>
</template>

<script>
export default {
     name: 'MasterFullWidthNoPadding',
     components: {
          TopNavigation: () => import('@/themes/modern-admin/templates/Navigation/TopNavigation'),
          LeftNavigation: () => import('@/themes/modern-admin/templates/Navigation/LeftNavigation'),
     },
     data() {
          return {}
     },
     computed: {},
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
