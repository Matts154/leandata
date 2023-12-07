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
          <th class="text-left">First Name</th>
          <th class="text-left">Last Name</th>
          <th class="text-left">Total</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.guid">
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ formatCurrency(1000) }}</td>
          <td><v-btn>View</v-btn></td>
        </tr>
      </tbody>
    </v-table>

    <v-dialog v-model="dialog" width="500px">
      <v-card>
        <v-card-text>
          <v-form fast-fail v-model="valid" @submit.prevent="submit">
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

export default {
  data: () => {
    return {
      dialog: false,
      valid: false,
      firstName: '',
      lastName: '',
      rules: [(value) => Boolean(value) || 'Name is required.']
    }
  },
  computed: {
    ...mapState(useUsersStore, ['users'])
  },
  methods: {
    ...mapActions(useUsersStore, ['create']),
    submit() {
      if (!this.valid) return

      const { firstName, lastName } = this

      this.create(firstName, lastName)
      this.toggleDialog(false)
    },
    toggleDialog(value) {
      this.dialog = value || !this.dialog
      if (!this.dialog) this.clearDialog()
    },
    clearDialog() {
      this.firstName = ''
      this.lastName = ''
    },
    formatCurrency(number) {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      })

      return formatter.format(number)
    }
  }
}
</script>

<style></style>
