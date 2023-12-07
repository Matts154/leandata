<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

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

<style scoped>
strong {
  margin-right: 1rem;
}
</style>
