<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="w-full flex justify-center items-center">
      <nav
        class="w-full max-w-5xl flex justify-between items-center bg-red-300 min-h-20 p-2 lg:p-0"
      >
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/auth/login">Login</RouterLink>
        <RouterLink to="/auth/register">Register</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
