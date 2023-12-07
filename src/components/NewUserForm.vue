<template>
  <v-form v-model="valid" @submit.prevent>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstName"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastName"
            label="Last name"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-btn type="submit" class="mt-2">Submit</v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { useUsersStore } from '@/stores/users';
import { mapActions } from 'pinia';

export default {
    data: () => {
        return {
            valid: false,
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