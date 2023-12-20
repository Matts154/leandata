<template>
  <header>
    <div>
      <nav class="bg-teal-darken-1">
        <v-container>
          <v-row>
            <v-col>
              <strong>LeanData</strong>
              <RouterLink class="btn" to="/"
                ><v-btn color="white" variant="text">Home</v-btn></RouterLink
              >
              <RouterLink to="/users"><v-btn color="white" variant="text">Users</v-btn></RouterLink>
              <RouterLink to="/expenses"
                ><v-btn color="white" variant="text">Expenses</v-btn></RouterLink
              >
              <RouterLink to="/reports"
                ><v-btn color="white" variant="text">Reports</v-btn></RouterLink
              >
            </v-col>
          </v-row>
        </v-container>
      </nav>
    </div>
  </header>

  <main>
    <v-container>
      <RouterView />
    </v-container>
  </main>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapActions, mapState } from 'pinia'
import { useUsersStore } from './stores/users'
import { useExpensesStore } from './stores/expenses'
import { faker } from '@faker-js/faker';

export default {
  components: {
    RouterLink,
    RouterView,
  },
  computed: {
    ...mapState(useUsersStore, ['users']),
    ...mapState(useExpensesStore, ['expenses'])
  },
  methods: {
    ...mapActions(useUsersStore, {
      createUser: 'create',
      updateUser: 'update',
      removeUser: 'remove'
    }),
    ...mapActions(useExpensesStore, {
      insertExpense: 'insert',
      updateExpense: 'update',
      removeExpense: 'remove'
    }),
  },
  mounted: function() {
    useUsersStore().$onAction(({ name, args, after }) => {
      after((newUser) => {
        const expensesStore = useExpensesStore()

        if (name === 'create') {
          expensesStore.create(newUser)
        } else if (name === 'remove') {
          const user = args[0]
          expensesStore.purge(user)
        }
      })
    });

    const types = ['software', 'meals', 'travel'];

    for (let i = 0; i < 1000; i++) {
      const user = this.createUser({ firstName: faker.person.firstName(), lastName: faker.person.lastName() });

      for (let j = 0; j < 5; j++) {
        this.insertExpense({ 
          accountId: user.accountId,
          type: faker.helpers.arrayElement(types),
          amount: faker.number.int({ min: 1, max: 1000 }),
          description: faker.lorem.sentence() });
      }
    }
  }
}
</script>
