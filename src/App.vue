<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>

  header{
    position: fixed;
    top: 0;
    background-color: #333;
    color: white;
    width: 100%;



  }

  header nav{
    display: flex;
    gap: 1rem;
    padding: 0 2rem ;
  }

  header nav a{
    color: white;
    text-decoration: none;
  }

  header nav a.router-link-active{
    color: orange;
  }




</style>
