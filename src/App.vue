<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <v-container>
          <v-row>
            <v-col>
              <strong>LeanData</strong>
              <RouterLink class="btn" to="/"><v-btn variant="text">Home</v-btn></RouterLink>
              <RouterLink to="/about"><v-btn variant="text">About</v-btn></RouterLink>
              <RouterLink to="/users"><v-btn variant="text">Users</v-btn></RouterLink>
              <RouterLink to="/expenses"><v-btn variant="text">Expenses</v-btn></RouterLink>
              <RouterLink to="/reports"><v-btn variant="text">Reports</v-btn></RouterLink>
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

  <footer>
    <v-container>
      <v-row justify="center" no-gutters>
        <v-col class="text-center mt-4" cols="12"> 2023 &#8212; Matthew Stephenson </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<style scoped>
strong {
  margin-right: 1rem;
}
</style>
