<script setup lang="ts">

const products = [1,2,3,4,5]
</script>

<template>
  <h1>PRODUCTS</h1>
  <ul>
    <li v-for="item in products">
      <RouterLink to="{{ item }}">producte {{ item}}</RouterLink>
    </li>  
  </ul>
</template>
