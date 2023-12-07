import { v4 as uuidv4 } from 'uuid'

export default class Expense {
  constructor({ accountId, type, amount, description }) {
    this.expenseId = uuidv4()
    this.accountId = accountId
    this.type = type
    this.amount = amount
    this.description = description
  }
}
