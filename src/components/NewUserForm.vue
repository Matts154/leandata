<template></template>

<script>
import { useUsersStore } from '@/stores/users'
import { mapActions } from 'pinia'

export default {
  data: () => {
    return {
      valid: false,
      firstName: '',
      lastName: '',
      rules: [(value) => Boolean(value) || 'Name is required.']
    }
  },
  methods: {
    ...mapActions(useUsersStore, ['create']),
    submit() {
      if (!this.valid) return

      const { firstName, lastName } = this

      this.create(firstName, lastName)
    }
  }
}
</script>

<style></style>
