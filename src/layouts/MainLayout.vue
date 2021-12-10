<template>
  <q-layout view="hHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="mdi-menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          ISA | Secure Zone
        </q-toolbar-title>

        <q-btn
          flat
          round
          icon="mdi-logout"/>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
    <q-toolbar class="bg-primary"/>
      <q-item class="bg-grey-3">
        <q-item-section>
          Lists
        </q-item-section>
        <q-item-section>
          <todo-add-list-button/>
        </q-item-section>
      </q-item>
      <TodoListsList/>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import TodoAddListButton from 'components/TodoAddListButton.vue'
import TodoListsList from 'components/TodoListsList.vue'
export default defineComponent({
  name: 'MainLayout',

  components: {
    TodoAddListButton,
    TodoListsList
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
