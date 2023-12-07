<template></template>

<script>
import { useExpensesStore } from '@/stores/expenses'
import { mapState } from 'pinia'

export default {
  computed: {
    ...mapState(useExpensesStore, ['expenses'])
  }
}
</script>

<style></style>
