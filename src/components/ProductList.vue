
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>


<template>
  <ul class="itemList">
    <li v-for="item in items" class="item">
      <RouterLink :to="{path: 'product/'+item.id}" class="link">
        <img :src="item.img" alt="">
        <p>{{ item.name }}</p>
        <p>{{ item.price }}€</p>
      </RouterLink>
    </li>  
  </ul>
</template>

<style>

.itemList{
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
}

.item{
  width: 200px;
  height: 300px;
  border: 3px solid black;
  border-radius: 10px;
  padding: 1rem;
  -webkit-box-shadow: 0px 0px 10px 4px rgba(0,0,0,0.28); 
box-shadow: 0px 0px 10px 4px rgba(0,0,0,0.28);
}

.item .link{
  color: black;
  text-decoration: none;
}

.item img{
  height: 100px;
  
}


@media (width < 1100px){
  .itemList{
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (width < 800px){
  .itemList{
    grid-template-columns: 1fr 1fr;
  }
}

</style>