<template>
  <div>
    <Divider :visible="visible"/>
    <ul class="list-group">
      <li class="list-group-item" v-for="item in list_items">
         <input type="checkbox" v-model="item.complete" @click="complete(item)">
          <span> {{ item.text }} </span>
      </li>
    </ul>
  </div>
</template>
<script>
  import { store } from '../store';
  import Divider from './Divider';
  export default {
      components: {
        Divider
      },
      props:['visible'],
      store,
      name: "",
      computed: {
        list_items() {
          return this.$store.getters.uncompleted;
        }
      },
      methods: {
        complete(item) {
          this.$store.dispatch('complete', item);
        }
      }
  }
</script>
