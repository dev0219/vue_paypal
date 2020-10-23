<template id="{{name_pc}}" lang="html">

</template>
<script lang="js">
export default {
     name: '{{name_pc}}',
     el: '#{{name_pc}}',
     props: [],
     data() {
          return {
               variation: 1,
               items: [{
                    id: 1,
                    name: 'Item 1'
               },{
                    id: 2,
                    name: 'Item 2'

               }]
          }
     },
     computed: {
          name() {
               return this.data
          },
     },
     watch: {

     },
     beforeCreate: function () {
          //console.log("beforeCreate() -> Component -> {{name_pc}} ")
     },
     created: function () {
          //console.log("created() -> Component -> {{name_pc}} ")
     },
     beforeMount: function () {
          //console.log("beforeMount() -> Component -> {{name_pc}} ");
     },
     mounted: function () {
          //console.log("mounted() -> Component -> {{name_pc}} ")
     },
     beforeUpdate: function () {
          //console.log("beforeUpdate() -> Component -> {{name_pc}} ")
     },
     updated: function () {
          //console.log("updated() -> Component -> {{name_pc}} ")
     },
     beforeDestroy: function () {
          //console.log("beforeDestroy() -> Component -> {{name_pc}} ")
     },
     destroyed: function () {
          //console.log("destroyed() -> Component -> {{name_pc}} ")
     },
     errorCaptured: (err, vm, info) => {

     },
     methods: {
          destroy: function () {
               this.$destroy();
          }
     }
}
</script>
