<template>
  <div v-if="visible">
  <h6>Done:</h6>
    <ul class="list-group">
      <li class="list-group-item"  v-for="item in completed_items">
        <span>
          <i class="fas fa-check fa-xs"></i>
          {{ item.text }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  import { store } from '../store';
  import Divider from "./Divider";
  import ResetStore  from "./ResetStore";
  export default {
      components: {
        Divider,
        ResetStore
      },
      name: "",
      store,
      props:['visible'],
      data () {
        return {}
      },
      computed: {
        completed_items () {
          return this.$store.getters.completed;
        }
      }
  }
</script>

<style scoped>
  div {
    background-color: lightgray;
    border-radius: 5px;
  }
  li {
    font-family: "Lucida Console", Monaco, monospace;
    opacity: 0.4;
  }
  h6 {
    padding-top: 10px;
    padding-left: 10px;
  }
</style>
