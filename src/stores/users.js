import { defineStore } from 'pinia';
import User from '../models/User.js';

export const useUsersStore = defineStore('user', {
  state: () => ({ users: [] }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    create(firstName, lastName) {
      this.users.push(new User(firstName, lastName));
    },
  },
});
