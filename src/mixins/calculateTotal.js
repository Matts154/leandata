export default {
  methods: {
    calculateUserTotal(user) {
      const userTypeTotals = this.userTotals[user.accountId]
      return this.calculateTotal(userTypeTotals);
    },
    calculateTotal(totals) {
        return Object.values(totals).reduce((total, value) => total + value, 0)
    }
  }
}
