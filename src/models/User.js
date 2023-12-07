import { v4 as uuidv4 } from 'uuid'

export default class User {
  constructor(firstName, lastName) {
    this.accountId = uuidv4()
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = this.getFullName()
  }

  setName({ firstName, lastName }) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = this.getFullName()
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
