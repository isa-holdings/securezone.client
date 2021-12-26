import { reactive, computed, readOnly } from 'vue'

// State
const state = reactive({
    count: 1
});

// Getters
const timesTwo = computed(() => state.count * 2)

// Mutations
const increment = amount => (state.count += amount)


export default {
    state, increment, timesTwo
}
