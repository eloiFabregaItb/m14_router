<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/products">Productes</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>

  header{
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
    padding: 1rem;
  }
  
  header nav a:hover{
    color: #333;
    background-color: #bbb;
  }
  

  header nav a.router-link-active{
    color: orange;
  }

  header nav a.router-link-active:hover{
    color: white;
    background-color: orange;
  }





</style>
