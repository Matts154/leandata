<template>
  <div>
    <form @submit.prevent="submit">
        <input required type="text" v-model="firstName" />
        <input required type="text" v-model="lastName" />
        <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { useUsersStore } from '@/stores/users';
import { mapActions } from 'pinia';

export default {
    data: () => {
        return {
            firstName: '',
            lastName: '',
        };
    },
    methods: {
        ...mapActions(useUsersStore, ['create']),
        submit() {
            const { firstName, lastName } = this;
            this.create(firstName, lastName);
        }
    }
}
</script>

<style>

</style>