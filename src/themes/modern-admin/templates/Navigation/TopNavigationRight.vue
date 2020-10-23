<template id="VerticalMaterialOverlayTopNavigationRight" lang="html">
<ul class="nav navbar-nav float-right">
     <li class="dropdown dropdown-language nav-item">
          <a class="dropdown-toggle nav-link" id="dropdown-flag" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               <i class="flag-icon flag-icon-us"></i><span class="selected-language"></span></a>
          <div class="dropdown-menu" aria-labelledby="dropdown-flag">
               <a class="dropdown-item" href="#" data-language="en"><i class="flag-icon flag-icon-us"></i> English</a>
               <a class="dropdown-item" href="#" data-language="fr"><i class="flag-icon flag-icon-fr"></i> French</a>
               <a class="dropdown-item" href="#" data-language="pt"><i class="flag-icon flag-icon-pt"></i> Portuguese</a>
               <a class="dropdown-item" href="#" data-language="de"><i class="flag-icon flag-icon-de"></i> German</a>
               </div>
     </li>
     <li class="dropdown dropdown-notification nav-item">
          <a class="nav-link nav-link-label" href="#" data-toggle="dropdown">
               <i class="ficon ft-bell"></i><span class="badge badge-pill badge-danger badge-up badge-glow">5</span>
          </a>
          <ul class="dropdown-menu dropdown-menu-media dropdown-menu-right">
               <li class="dropdown-menu-header">
                    <h6 class="dropdown-header m-0">
                    <span class="grey darken-2">Notifications</span></h6>
                    <span class="notification-tag badge badge-danger float-right m-0">5 New</span>
               </li>
               <li class="scrollable-container media-list w-100">
                    <a href="javascript:void(0)">
                         <div class="media">
                              <div class="media-left align-self-center"><i class="ft-plus-square icon-bg-circle bg-cyan mr-0"></i></div>
                              <div class="media-body">
                                   <h6 class="media-heading">You have new order!</h6>
                                   <p class="notification-text font-small-3 text-muted">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                   <small><time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">30 minutes ago</time></small>
                              </div>
                         </div>
                    </a>
               </li>
               <li class="dropdown-menu-footer"><a class="dropdown-item text-muted text-center" href="javascript:void(0)">Read all notifications</a>
               </li>
          </ul>
     </li>
     <li class="dropdown dropdown-notification nav-item">
          <a class="nav-link nav-link-label" href="#" data-toggle="dropdown"><i class="ficon ft-mail"></i></a>
          <ul class="dropdown-menu dropdown-menu-media dropdown-menu-right">
               <li class="dropdown-menu-header">
                    <h6 class="dropdown-header m-0"><span class="grey darken-2">Messages</span></h6>
                    <span class="notification-tag badge badge-warning float-right m-0">4 New</span>
               </li>
               <li class="scrollable-container media-list w-100"><a href="javascript:void(0)">
                         <div class="media">
                              <div class="media-left"><span class="avatar avatar-sm avatar-online rounded-circle">
                                   <img src="@/assets/app-assets/images/portrait/small/avatar-s-19.png" alt="avatar">
                                   </span>
                              </div>
                              <div class="media-body">
                                   <h6 class="media-heading">Margaret Govan</h6>
                                   <p class="notification-text font-small-3 text-muted">I like your portfolio, let's start.</p>
                                   <small><time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">Today</time></small>
                              </div>
                         </div>
                    </a></li>
               <li class="dropdown-menu-footer">
                    <a class="dropdown-item text-muted text-center" href="javascript:void(0)">Read all messages</a>
               </li>
          </ul>
     </li>
     <li class="dropdown dropdown-user nav-item">
          <a class="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
               <span class="mr-1 user-name text-bold-700">John Doe</span>
               <span class="avatar avatar-online">
                    <img src="@/assets/app-assets/images/portrait/small/avatar-s-19.png" alt="avatar"><i></i>
               </span>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
               <a class="dropdown-item" href="/profile-edit"><i class="ft-user"></i> Edit Profile</a>
               <div class="dropdown-divider"></div>
               <a class="dropdown-item" href="/logout"><i class="ft-power"></i> Logout</a>
          </div>
     </li>
</ul>
</template>

<script>
export default {
  name: "VerticalMaterialOverlayTopNavigationRight",
  components: {},
  props: [],
  data() {
    return {};
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
  errorCaptured: (err, vm, info) => {},
};
</script>
