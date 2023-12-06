<template>
  <p>{{ greeting }} <slot /></p>
  <p>Counter: {{ count }}</p>
  <p>Double: {{ double }}</p>
  <button @click="increment">Increment</button>
</template>

<script>
import { mapActions, mapState, mapStores } from 'pinia'
import { useCounterStore } from '@/stores/counter'
export default {
  props: {
    greeting: {
      type: String,
      default: 'Hello'
    }
  },
  computed: {
    // other computed properties
    // ...
    // gives access to this.counterStore and this.userStore
    ...mapStores(useCounterStore),
    // gives read access to this.count and this.double
    ...mapState(useCounterStore, ['count', 'double'])
  },
  methods: {
    // gives access to this.increment()
    ...mapActions(useCounterStore, ['increment'])
  }
}
</script>

<style></style>
