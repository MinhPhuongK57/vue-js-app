<script setup>
import ProductItem from "./ProductItem/ProductItem.vue";
import data from "../../data/data"; // Product Array
</script>

<template>
  <div class="products">
    <div class="row">
      <ProductItem
        v-for="(product, index) in data"
        :key="index"
        :product="product"
      />
    </div>
  </div>
</template>
