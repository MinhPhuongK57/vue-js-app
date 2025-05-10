<script setup>
import ProductInfo from "./data";

const { dataItem1, dataItem2, dataItem3, dataItem4 } = ProductInfo;
</script>

<template>
  <div class="col-md-4">
    <div class="card">
      <img src="{dataItem1}" class="card-img-top" alt="{dataItem2}" />
      <div class="card-body">
        <h5 class="card-title">"{dataItem3}"</h5>
        <p class="card-text">"{dataItem4}"</p>
        <button class="primary">Thêm giỏ hàng</button><br />
        <button class="danger">Mua ngay</button>
      </div>
    </div>
  </div>
</template>
