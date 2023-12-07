<template>
  <div>
    <form @submit.prevent="submit">
        <div>
            <label for="firstName">First Name</label>
            <input required type="text" name="firstName" v-model="firstName" />
        </div>
        <div>
            <label for="lastName">Last Name</label>
            <input required type="text" name="lastName" v-model="lastName" />
        </div>
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