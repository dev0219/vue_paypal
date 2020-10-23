<template id="Layout_6_6">
    <div class="row">
        <div class="col-6">
               <slot name="zone_1"></slot>
        </div>
	   <div class="col-6">
               <slot name="zone_2"></slot>
        </div>
    </div>
</template>


<script>

export default {
     name: 'Layout_6_6',
     components: {},
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