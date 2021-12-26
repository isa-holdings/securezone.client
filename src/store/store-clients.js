import { reactive, computed, readOnly } from 'vue'
import { Client } from 'types/Client';

// State
const list = 

const state = reactive({
    name: null,
    company: null,

});

// Getters
const timesTwo = computed(() => state.count * 2)

// Mutations
const increment = amount => (state.count += amount)


export default {
    state, increment, timesTwo
}
