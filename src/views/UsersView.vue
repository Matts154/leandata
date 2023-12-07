<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="10">
          <h1>Users</h1>
        </v-col>
        <v-col cols="2">
          <v-btn @click="toggleDialog()">Add user</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-table fixed-header height="300px">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Total</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user of users" :key="user.accountId">
          <td>{{ user.fullName }}</td>
          <td>{{ formatCurrency(calculateUserTotal(user)) }}</td>
          <td>
            <v-btn variant="text" @click="edit(user)">Edit</v-btn>
            <v-btn variant="text" @click="remove(user)">Delete</v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>

    <v-dialog v-model="visible" width="500px">
      <v-card>
        <v-card-text>
          <v-form v-model="valid" @submit.prevent="submit">
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="firstName"
                    label="First name"
                    :rules="rules"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field v-model="lastName" label="Last name" :rules="rules"></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-container>
            <v-row>
              <v-btn color="primary" @click="submit()">Submit</v-btn>
              <v-btn color="secondary" @click="toggleDialog()">Cancel</v-btn>
            </v-row>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useUsersStore } from '@/stores/users'
import { useExpensesStore } from '@/stores/expenses'
import formatCurrency from '@/mixins/formatCurrency'
import calculateTotal from '@/mixins/calculateTotal'

export default {
  mixins: [formatCurrency, calculateTotal],
  data: () => {
    return {
      visible: false,
      valid: false,
      accountId: '',
      firstName: '',
      lastName: '',
      rules: [(value) => Boolean(value) || 'Name is required.']
    }
  },
  computed: {
    ...mapState(useUsersStore, ['users']),
    ...mapState(useExpensesStore, ['userTotals'])
  },
  methods: {
    ...mapActions(useUsersStore, ['create', 'update', 'remove']),
    edit({ firstName, lastName, accountId }) {
      this.accountId = accountId
      this.firstName = firstName
      this.lastName = lastName

      this.toggleDialog()
    },
    submit() {
      const { valid, accountId, firstName, lastName } = this

      if (!valid) return

      if (accountId) {
        this.update({ accountId, firstName, lastName })
      } else {
        this.create({ firstName, lastName })
      }

      this.toggleDialog(false)
    },
    toggleDialog(value) {
      this.visible = value || !this.visible
      if (!this.visible) this.clearDialog()
    },
    clearDialog() {
      this.accountId = ''
      this.firstName = ''
      this.lastName = ''
    },
  }
}
</script>

<style></style>
