<script setup lang="ts">
  import products from "../assets/products.json"
  import ProductList from "../components/ProductList.vue"

  import { ref } from "vue";

  const input = ref()

  let productsShow = ref()



  function search(e){
    e.preventDefault()

    const newProducts = products.filter(x=> x.name.toLowerCase().includes(input.value.toLowerCase()) || x.description.toLowerCase().includes(input.value.toLowerCase()))
    console.log(input.value,newProducts)
    productsShow.value= newProducts
  }

</script>

<template>

  <form @submit="search">
    <input v-model="input" type="text">
    <button>🔎</button>
  </form>

  <ProductList :items="productsShow" />
  
</template>

<style scoped>
  form{
    display: flex;
    justify-content: center;
    padding: 10px
  }

  form button{
    background-color: #333;
    border-radius: 0 10px 10px 0;
    border: 0;
    padding: 5px;
  }
</style>