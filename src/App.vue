<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/users">Users</RouterLink>
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
        <v-col class="text-center mt-4" cols="12">
          2023 &#8212; Matthew Stephenson
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<style scoped></style>
