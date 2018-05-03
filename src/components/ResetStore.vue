<template>
  <div>
    <Divider :visible="visible" />
    <button v-if="visible" v-on:click="resetStore" type="button" class="btn btn-secondary btn-lg btn-block">Clear All</button>
  </div>
</template>
<script>
  import Divider  from './Divider.vue';

   export default {
     components: {
       Divider
     },
     name: "",
     props: {
       visible: {
         type: Boolean,
         required: false,
         default: false
       }
     },
     methods: {
       resetStore (){
         this.$store.dispatch('resetStore');
       }
     }
  }
</script>
<style scoped>
</style>
