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
</template>

<style scoped>

</style>
