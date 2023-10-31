<script setup lang="ts">
  import {useRoute} from 'vue-router'

  const route = useRoute()

  const id = parseInt(route.params.id)


</script>

<template>
  <h1>Producte {{ id }}</h1>
</template>
