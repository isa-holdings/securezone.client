<template>
  <q-list>
    <q-item>
      <q-item-section side>
        <todoStatusCheck/>

      </q-item-section>

      <q-item-section>
        Go Shopping
      </q-item-section>

      <q-item-section side>
        <todo-delete-button flat round size="sm" icon="mdi-delete"/>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import TodoStatusCheck from 'components/TodoStatusCheck.vue'
import TodoDeleteButton from 'components/TodoDeleteButton.vue'
export default {
  components: {
    TodoStatusCheck,
    TodoDeleteButton
  }
}
</script>
