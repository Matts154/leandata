import { v4 as uuidv4 } from 'uuid'

export default class User {
  constructor(firstName, lastName) {
    this.guid = uuidv4()
    this.firstName = firstName
    this.lastName = lastName
  }
}
