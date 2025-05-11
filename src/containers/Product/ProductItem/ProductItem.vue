<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="col-md-4">
    <div class="card">
      <img :src="product.src" class="card-img-top" :alt="product.alt" />
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">{{ product.description }}</p>
        <button class="primary">Thêm giỏ hàng</button><br />
        <button class="danger">Mua ngay</button>
      </div>
    </div>
  </div>
</template>
