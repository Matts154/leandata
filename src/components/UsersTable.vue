<template>
  <v-table
    fixed-header
    height="300px"
  >
    <thead>
      <tr>
        <th class="text-left">
          First Name
        </th>
        <th class="text-left">
          Last Name
        </th>
        <th class="text-left">
          Total
        </th>
        <th class="text-left">
          Actions
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="user in users"
        :key="user.guid"
      >
        <td>{{ item.firstName }}</td>
        <td>{{ item.lastName }}</td>
        <td>{{ formatCurrency(1000) }}</td>
        <td>View</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
import { mapState } from 'pinia';
import { useUsersStore } from '@/stores/users';

export default {
  computed: {
      ...mapState(useUsersStore, ['users'])
  },
  methods: {
    formatCurrency(number) {
      const formatter = new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD',
      });

      return formatter.format(number);
    }
  }
}
</script>

<style>

</style>