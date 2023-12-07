<template>
  <div>
    <p>Hello vue</p>
    <test-component greeting="Hola">world</test-component>
  </div>
</template>

<script>
import TestComponent from '../components/TestComponent.vue'

export default {
  components: {
    TestComponent
  }
}
</script>

<style scoped></style>
