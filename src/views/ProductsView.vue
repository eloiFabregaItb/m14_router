<script setup lang="ts">
  import products from "../assets/products.json"
  import ProductList from "../components/ProductList.vue"


  console.log("PRODUCTS",products)

</script>

<template>
  <h1>PRODUCTS</h1>
  <ProductList :items="products" />
</template>
