<template lang="html">
<div :class="$route.meta.css_nav_left" data-scroll-to-active="true">
     <div class="main-menu-content">
          <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
               <li class="nav-item"><a class="nav-link" href="/">Matches</a></li>
               <li class="nav-item"><a class="nav-link" href="/quiz/categories">Match Factors</a></li>
               <li class="nav-item"><a class="nav-link" href="/messages">Messages</a></li>
               <li class="nav-item"><a class="nav-link" href="/upgrade">Upgrade</a></li>
          </ul>
     </div>
</div>
</template>

<script>
export default {
     name: 'LeftNavigation',
     components: {},
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
