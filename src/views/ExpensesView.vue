<template>
  <v-container>
    <v-row>
      <v-col cols="10">
        <h1>Expenses</h1>
      </v-col>
      <v-col cols="2">
        <v-btn @click="toggleDialog()">Add Expense</v-btn>
      </v-col>
    </v-row>
  </v-container>
  <v-table fixed-header height="300px">
    <thead>
      <tr>
        <th class="text-left">Type</th>
        <th class="text-left">Amount</th>
        <th class="text-left">Description</th>
        <th class="text-left">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="expense in expenses" :key="expense.expenseId">
        <td>{{ expense.type }}</td>
        <td>{{ formatCurrency(expense.amount) }}</td>
        <td>{{ expense.description }}</td>
        <td>
          <v-btn variant="text" @click="edit(expense)">Edit</v-btn>
          <v-btn color="red" variant="text" @click="remove(expense)">Delete</v-btn>
        </td>
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
                <v-select
                  required
                  v-model="accountId"
                  label="User"
                  :items="Object.values(users)"
                  item-title="fullName"
                  item-value="accountId"
                  :disabled="!!expenseId"
                ></v-select>
                <v-select
                  required
                  v-model="type"
                  label="Type"
                  :items="types"
                  item-title="label"
                  item-value="type"
                ></v-select>
                <v-text-field
                  v-model="amount"
                  label="Amount"
                  prefix="$"
                  :rules="[rules.required, rules.number]"
                ></v-text-field>
                <v-textarea counter label="Description" v-model="description"></v-textarea>
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
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useUsersStore } from '@/stores/users'
import { useExpensesStore } from '@/stores/expenses'
import formatCurrency from '@/mixins/formatCurrency'

export default {
  mixins: [formatCurrency],
  data() {
    return {
      valid: false,
      dialog: false,
      expenseId: null,
      accountId: null,
      type: null,
      amount: 0,
      description: null,
      types: [
        { type: 'meals', label: 'Meals' },
        { type: 'travel', label: 'Travel' },
        { type: 'software', label: 'Software' }
      ],
      rules: {
        required: (value) => Boolean(value) || 'Field is required.',
        number: (value) => !!Number.parseFloat(value) || 'Enter a number.'
      }
    }
  },
  computed: {
    ...mapState(useUsersStore, ['users']),
    ...mapState(useExpensesStore, ['expenses', 'userExpenses', 'userTotals'])
  },
  methods: {
    ...mapActions(useExpensesStore, ['insert', 'update', 'remove']),
    edit(expense) {
      this.expenseId = expense.expenseId
      this.accountId = expense.accountId
      this.type = expense.type
      this.amount = expense.amount
      this.description = expense.description
      this.toggleDialog(true)
    },
    submit() {
      const { valid, expenseId, accountId, type, amount, description } = this

      if (!valid) return

      if (this.expenseId) {
        this.update({ expenseId, accountId, type, amount: Number.parseFloat(amount), description })
      } else {
        this.insert({ accountId, type, amount: Number.parseFloat(amount), description })
      }

      this.toggleDialog(false)
    },
    toggleDialog(value) {
      this.dialog = value || !this.dialog
      if (!this.dialog) this.clearDialog()
    },
    clearDialog() {
      this.user = null
      this.type = null
      this.amount = 0
      this.description = null
      this.expenseId = null
      this.accountId = null
    }
  }
}
</script>

<style scoped>
tr td:last-child {
    width: 1%;
    white-space: nowrap;
}
</style>
