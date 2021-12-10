<template>
  <q-page class="row">
    <q-card class="col-xs-9">
      <q-toolbar>
        <q-input
          dense
          placeholder="Search"
          borderless
          class="full-width"
        >
          <template #append>
             <q-icon name="mdi-magnify"/>
          </template>
        </q-input>
      </q-toolbar>

      <todo-list bordered></todo-list>

    </q-card>
    <div class="col-xs-3">
      <q-toolbar class="bg-primary">
        <todo-add-button
          fab
          style="margin-bottom: -42px"
          class="q-ml-lg"
          color="secondary"
          icon="mdi-plus"
        ></todo-add-button>
      </q-toolbar>
    </div>
  </q-page>
</template>
<script>

import { defineComponent } from 'vue'
import TodoList from 'components/TodoList.vue'
import TodoAddButton from 'components/TodoAddButton.vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    TodoList,
    TodoAddButton
  },
  data () {
    return {
      search: ''
    }
  }
})
</script>
