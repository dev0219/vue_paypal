<template id="Layout_3_9">
    <div class="row">
        <div class="col-3">
               <slot name="zone_1"></slot>
        </div>
	   <div class="col-9">
               <slot name="zone_2"></slot>
        </div>
    </div>
</template>

<script>

export default {
     name: 'Layout_3_9',
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