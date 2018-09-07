<template>
  <div>
    <div class="input-group mb-3">
      <input v-model="new_item.text" type="text" class="form-control" placeholder="task here" aria-label="Recipient's username" aria-describedby="basic-addon2">
      <div class="input-group-append">
        <button v-on:click="addItem(new_item)" class="btn btn-outline-secondary" type="button">Add task</button>
      </div>
    </div>
    <div class="alert alert-danger" role="alert" v-if="errorMessage !== '' && new_item.text === ''">
      {{ errorMessage }}
    </div>
  </div>
</template>
<script>
  export default {
      name: "",
      data () {
        return {
          new_item: {text: "", complete: false},
          errorMessage: ""
        }
      },
      methods: {
        addItem(item) {
          if (item.text === "") {
            this.errorMessage = "Task can't be blank";
            return;
          } else {
            this.errorMessage = "";
          }
          //this.$store.commit('addItem', item);
          this.$store.dispatch('addItem', item );
          this.new_item = {
            text: "",
            complete: false
          }
        },
        complete (item) {
          this.$store.dispatch('complete',item);
        }
      },
  }
</script>
