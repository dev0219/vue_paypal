<template id="ChatRoom" lang="html">
<div v-bind:class="[c_col_width]">
     <template v-if="c_id == 1">
        <div class="sidebar-left">
            <div class="sidebar">                
                <!-- app chat sidebar start -->
                <div class="chat-sidebar card">
                    <span class="chat-sidebar-close">
                        <i class="ft-x"></i>
                    </span>
                    <div class="chat-sidebar-search">
                        <div class="d-flex align-items-center">
                            <div class="chat-sidebar-profile-toggle">
                                <div class="avatar">
                                    <img src="@/assets/app-assets/images/portrait/small/avatar-s-11.png" class="cursor-pointer" alt="user_avatar" height="36" width="36">
                                </div>
                            </div>
                            <fieldset class="form-group position-relative has-icon-left mx-75 mb-0">
                                <input type="text" class="form-control round" id="chat-search" placeholder="Search">
                                <div class="form-control-position">
                                    <i class="ft-search text-dark"></i>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <div class="chat-sidebar-list-wrapper pt-2 ps ps--active-y">
                        <h6 class="px-2 pt-2 pb-25 mb-0">CHATS</h6>
                        <ul class="chat-sidebar-list">
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="avatar m-0 mr-50"><img src="@/assets/app-assets/images/portrait/small/avatar-s-26.png" height="36" width="36" alt="sidebar user image">
                                        <span class="avatar-status-busy"></span>
                                    </div>
                                    <div class="chat-sidebar-name">
                                        <h6 class="mb-0">Elizabeth Elliott</h6><span class="text-muted">Cake pie</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    <div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; height: 426px; right: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 215px;"></div></div></div>
                </div>
                <!-- app chat sidebar ends -->
            </div>
        </div>
        <div class="content-right">
            <div class="content-overlay"></div>
            <div class="content-wrapper">
                <div class="content-header row">
                </div>
                <div class="content-body">
                    <!-- app chat overlay -->
                    <div class="chat-overlay"></div>
                    <!-- app chat window start -->
                    <section class="chat-window-wrapper">
                        <div class="chat-start">
                            <span class="ft-message-square chat-sidebar-toggle chat-start-icon font-large-3 p-3 mb-1"></span>
                            <h4 class="d-none d-lg-block py-50 text-bold-500">Select a contact to start a chat!</h4>
                            <button class="btn btn-light-primary chat-start-text chat-sidebar-toggle d-block d-lg-none py-50 px-1">Start
                                Conversation!</button>
                        </div>
                        <div class="chat-area d-none">
                            <div class="chat-header">
                                <header class="d-flex justify-content-between align-items-center px-1 py-75">
                                    <div class="d-flex align-items-center">
                                        <div class="chat-sidebar-toggle d-block d-lg-none mr-1"><i class="ft-align-justify font-large-1 cursor-pointer"></i>
                                        </div>
                                        <div class="avatar chat-profile-toggle m-0 mr-1">
                                            <img src="@/assets/app-assets/images/portrait/small/avatar-s-26.png" class="cursor-pointer" alt="avatar" height="36" width="36">
                                            <span class="avatar-status-busy"></span>
                                        </div>
                                        <h6 class="mb-0">Elizabeth Elliott</h6>
                                    </div>
                                    <div class="chat-header-icons">
                                        <span class="dropdown">
                                            <i class="ft-more-vertical font-medium-4 ml-25 cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu">
                                            </i>
                                            <span class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="JavaScript:void(0);"><i class="ft-trash-2 mr-25"></i> Unmatch</a>
                                                <a class="dropdown-item" href="JavaScript:void(0);"><i class="ft-x-circle mr-25"></i> Block</a>
                                            </span>
                                        </span>
                                    </div>
                                </header>
                            </div>
                            <!-- chat card start -->
                            <div class="card chat-wrapper shadow-none mb-0">
                                <div class="card-content">
                                    <div class="card-body chat-container ps">
                                        <div class="chat-content">
                                            <div class="chat">
                                                <div class="chat-avatar">
                                                    <a class="avatar m-0">
                                                        <img src="@/assets/app-assets/images/portrait/small/avatar-s-11.png" alt="avatar" height="36" width="36">
                                                    </a>
                                                </div>
                                                <div class="chat-body">
                                                    <div class="chat-message">
                                                        <p>How can we help? We're here for you! 😄</p>
                                                        <span class="chat-time">7:45 AM</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chat chat-left">
                                                <div class="chat-avatar">
                                                    <a class="avatar m-0">
                                                        <img src="@/assets/app-assets/images/portrait/small/avatar-s-26.png" alt="avatar" height="36" width="36">
                                                    </a>
                                                </div>
                                                <div class="chat-body">
                                                    <div class="chat-message">
                                                        <p>Hey John, I am looking for the best admin template.</p>
                                                        <p>Could you please help me to find it out? 🤔</p>
                                                        <span class="chat-time">7:50 AM</span>
                                                    </div>
                                                    <div class="chat-message">
                                                        <p>It should be Bootstrap 4 🤩 compatible.</p>
                                                        <span class="chat-time">7:58 AM</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="badge badge-pill badge-light-secondary my-1">Yesterday</div>
                                            <div class="chat">
                                                <div class="chat-avatar">
                                                    <a class="avatar m-0">
                                                        <img src="@/assets/app-assets/images/portrait/small/avatar-s-11.png" alt="avatar" height="36" width="36">
                                                    </a>
                                                </div>
                                                <div class="chat-body">
                                                    <div class="chat-message">
                                                        <p>Absolutely!</p>
                                                        <span class="chat-time">8:00 AM</span>
                                                    </div>
                                                    <div class="chat-message">
                                                        <p>modern admin is the responsive bootstrap 4 admin template.</p>
                                                        <span class="chat-time">8:01 AM</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chat chat-left">
                                                <div class="chat-avatar">
                                                    <a class="avatar m-0">
                                                        <img src="@/assets/app-assets/images/portrait/small/avatar-s-26.png" alt="avatar" height="36" width="36">
                                                    </a>
                                                </div>
                                                <div class="chat-body">
                                                    <div class="chat-message">
                                                        <p>Looks clean and fresh UI. 😃</p>
                                                        <span class="chat-time">10:12 AM</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chat">
                                                <div class="chat-avatar">
                                                    <a class="avatar m-0">
                                                        <img src="@/assets/app-assets/images/portrait/small/avatar-s-11.png" alt="avatar" height="36" width="36">
                                                    </a>
                                                </div>
                                                <div class="chat-body">
                                                    <div class="chat-message">
                                                        <p>Thanks 🤝 , from ThemeForest.</p>
                                                        <span class="chat-time">10:20 AM</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    <div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; right: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></div>
                                </div>
                                <div class="card-footer chat-footer px-2 py-1 pb-0">
                                    <form class="d-flex align-items-center" onsubmit="chatMessagesSend();" action="javascript:void(0);">
                                        <i class="ft-user cursor-pointer"></i>
                                        <input type="text" class="form-control chat-message-send mx-1" placeholder="Type your message here...">
                                        <button type="submit" class="btn btn-primary glow send d-lg-flex"><i class="ft-play"></i>
                                            <span class="d-none d-lg-block mx-50">Send</span></button>
                                    </form>
                                </div>
                            </div>
                            <!-- chat card ends -->
                        </div>
                    </section>
                </div>
            </div>
        </div>
     </template>
</div>
</template>

<script lang="js">
export default {
    name: 'ChatRoom',
	components: {
		// PricingItems: () => import('@/themes/modern-admin/components/Pricing/PricingItems')
    },
	props: {
        p_payload: {
            type: Object
        }
    },
    data() {
        return {
            c_type: this.p_payload.c_type,
            c_id: this.p_payload.c_id,
            c_col_width: this.p_payload.c_col_width,
            c_data: this.p_payload.c_data
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
}
</script>