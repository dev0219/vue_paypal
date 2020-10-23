<template id="MasterFullWidthPadding">
<div>
     <TopNavigation></TopNavigation>
     <LeftNavigation></LeftNavigation>
     <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="content-wrapper">
            <div class="content-body">
               <router-view />
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
     name: 'MasterFullWidthPadding',
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
