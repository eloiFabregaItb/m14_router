<script setup lang="ts">
  import {useRoute} from 'vue-router'
  import products from "../assets/products.json"

  const route = useRoute()

  const id = route.params.id

  const producte = products.find((x)=>x.id === id)

</script>

<template>

  <h1>{{ producte.name }}</h1>
  <h2>{{ producte.price }}€</h2>
  <p>{{ producte?.description }}</p>
  <img :src="producte.img" alt="">
  
</template>
