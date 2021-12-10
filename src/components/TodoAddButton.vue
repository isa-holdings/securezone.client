<template>
  <q-btn @click="AddButtonClicked"/>
</template>

<script>
export default {
  methods: {
    AddButtonClicked () {
      this.$q.dialog({
        title: 'Create Todo',
        prompt: {
          modal: '',
          type: 'text'
        }
      })
        .ok(this.createToto)
    },
    createTodo (todo) {
      console.log(todo)
    }
  }
}
</script>
