import { defineStore } from 'pinia';
import User from '../models/User.js';

export const useUsersStore = defineStore('user', {
  state: () => ({
    users: [],
  }),
  actions: {
    create(firstName, lastName) {
      this.users.push(new User(firstName, lastName));
    },
  },
});
