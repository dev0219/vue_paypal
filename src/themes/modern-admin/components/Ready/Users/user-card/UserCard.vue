<template id="UserCard" lang="html">
<div class="col-12" >
     <template v-if="c_id == 1" >
         <div class="row">
             <div v-for="item in c_data" :key="item.id" v-bind:class="[c_col_width]" >
                <div class="card ">
                        <div class="text-center">
                                <div class="card-body">
                                    <img src="@/assets/app-assets/images/portrait/small/avatar-s-4.png" class="rounded-circle  height-100" alt="Card image">
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title"><a href="/profile">Michelle Howard</a> </h5>
                                    <h6 class="card-subtitle text-muted">100% Compatibility Match!</h6>
                                </div>
                        </div>
                </div>
             </div>
         </div>
     </template>
     <template v-if="c_id == 2" >
         <div class="row">
             <div v-for="item in c_data" :key="item.id" v-bind:class="[c_col_width]" >
                <div class="card" v-for="item in c_data" :key="item.id"  >
                    <div class="text-center">
                            <div class="card-body">
                                <img src="@/assets/app-assets/images/portrait/small/avatar-s-4.png" class="rounded-circle  height-150" alt="Card image">
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">{{item.title}}</h4>
                                <h6 class="card-subtitle text-muted">Technical Lead</h6>
                            </div>
                            <div class="card-body">
                                <button type="button" class="btn btn-danger mr-1 waves-effect waves-light"><i class="la la-plus"></i> Follow</button>
                                <button type="button" class="btn btn-primary mr-1 waves-effect waves-light"><i class="ft-user"></i> Profile</button>
                            </div>
                        </div>
                    </div>
             </div>
         </div>
     </template>
</div>
</template>

<script lang="js">
export default {
    name: 'UserCard',
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