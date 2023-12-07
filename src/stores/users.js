import { defineStore } from 'pinia'
import User from '../models/User.js'

const useUsersStore = defineStore('user', {
  state: () => ({
    users: {}
  }),
  actions: {
    create({ firstName, lastName }) {
      const user = new User(firstName, lastName)

      this.users[user.accountId] = user

      return user
    },
    update(details) {
      const { accountId } = details
      const user = this.users[accountId]

      user.setName(details)

      return user
    },
    remove({ accountId }) {
      delete this.users[accountId]
    }
  }
})

export { useUsersStore }
