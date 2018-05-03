<template>
  <div v-if="visible" class="dropdown-divider"></div>
</template>
<script>
  export default {
    name: "",
    props: ['visible']
}
</script>
<style scoped>
    div {
      border: 3px solid red;
    }
</style>
