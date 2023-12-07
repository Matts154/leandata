import { defineStore } from 'pinia'
import { useUsersStore } from './users.js'
import Expense from '@/models/Expense.js'

const useExpensesStore = defineStore('expenses', {
  state: () => ({
    userExpenses: {},
    typeTotals: {
      meals: 0,
      travel: 0,
      software: 0
    },
    userTotals: {}
  }),
  getters: {
    expenses() {
      return Object.values(this.userExpenses).flat()
    }
  },
  actions: {
    create({ accountId }) {
      this.userExpenses[accountId] = []
      this.userTotals[accountId] = {
        meals: 0,
        travel: 0,
        software: 0
      }
    },
    insert(details) {
      const { accountId, type, amount } = details
      const expense = new Expense(details)

      this.userExpenses[accountId].push(expense)
      this.typeTotals[type] += amount
      this.userTotals[accountId][type] += amount

      return expense
    },
    update(details) {
      const { expenseId, accountId, type, amount, description } = details
      const expense = this.userExpenses[accountId].find(
        (expense) => expense.expenseId === expenseId
      )

      expense.type = type
      expense.amount = amount
      expense.description = description

      return expense
    },
    remove({ expenseId, accountId, type, amount }) {
      this.userExpenses[accountId] = this.userExpenses[accountId].filter(
        (expense) => expense.expenseId !== expenseId
      )
      this.userTotals[accountId][type] -= amount
      this.typeTotals[type] -= amount
    },
    purge({ accountId }) {
      for (const [type, total] of this.userTotals[accountId]) {
        this.typeTotals[type] -= total
      }
      delete this.userExpenses[accountId]
      delete this.userTotals[accountId]
    }
  }
})

useUsersStore().$onAction(({ name, args, after }) => {
  after((newUser) => {
    const expensesStore = useExpensesStore()

    if (name === 'create') {
      expensesStore.create(newUser)
    } else if (name === 'remove') {
      const user = args[0]
      expensesStore.remove(user)
    }
  })
})

export { useExpensesStore }
