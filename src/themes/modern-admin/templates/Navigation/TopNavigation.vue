<template id="TopNavigation" lang="html">
<nav :class="$route.meta.css_nav_top">
     <div class="navbar-wrapper">
          <div class="navbar-header">
              <TopNavigationCenter/>
          </div>
          <div class="navbar-container content">
               <div class="collapse navbar-collapse" id="navbar-mobile">
                    <TopNavigationLeft />
                    <TopNavigationRight />
               </div>
          </div>
     </div>
</nav>
</template>

<script>
import TopNavigationRight from '@/themes/modern-admin/templates/Navigation/TopNavigationRight';
import TopNavigationLeft from '@/themes/modern-admin/templates/Navigation/TopNavigationLeft';
import TopNavigationCenter from '@/themes/modern-admin/templates/Navigation/TopNavigationCenter';

export default {
     name: 'TopNavigation',
     components: {
          TopNavigationRight,
		TopNavigationLeft,
		TopNavigationCenter
     },
     props: [],
     data() {
          return {

          }
     },
     computed: {

     },
     watch: {

     },
     methods: {

     },
     beforeCreate: function () {

     },
     created: function () {

     },
     beforeMount: function () {

     },
     mounted: function () {

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

     }
}
</script>
