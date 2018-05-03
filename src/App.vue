<template>
  <div class="container" id="todo">
    <h1>Vue Todo with Vuex </h1>
    <AddNewTask />
    <TodoList :visible="uncompleted"/>
    <Divider :visible="completed"/>
    <DoneItems :visible="completed" />
    <ResetSore :visible="completed" />
  </div>
</template>

<script>
import DoneItems from'./components/DoneItems.vue';
import AddNewTask from './components/AddNewTask.vue';
import TodoList from './components/TodoList.vue';
import ResetSore from './components/ResetStore.vue'
import Divider from './components/Divider.vue';

export default {
  components: {
    DoneItems,
    AddNewTask,
    TodoList,
    ResetSore,
    Divider
  },
  computed: {
    uncompleted() {
      return this.$store.getters.uncompleted.length > 0
    },
    completed() {
      return this.$store.getters.completed.length > 0
    }
  }
}
</script>
<style>
    #todo {
        margin-top: 60px;
        width: 400px;
    }
    h1 {
      padding-top: 10px;
      padding-bottom: 10px;
      text-align: center;
    }
</style>
