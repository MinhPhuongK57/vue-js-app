<script setup>
import HeaderContainer from "./containers/HeaderContainer/HeaderContainer.vue";
import CarouselContainer from "./containers/Carousel/CarouselContainer.vue";
import ProductContainer from "./containers/Product/ProductContainer.vue";
import FooterContainer from "./containers/Footer/FooterContainer.vue";
</script>

<template layout>
  <HeaderContainer />
  <CarouselContainer />
  <h1>Sản phẩm nổi bật</h1>
  <ProductContainer />
  <FooterContainer />
</template>

<style>
.content {
  max-width: 1600px;
  margin: 0 auto;
  padding-top: 10px;
}
.carousel-inner {
  max-height: 300px; /* bạn có thể điều chỉnh thấp hơn như 300px nếu muốn */
  overflow: hidden;
}

.carousel-img {
  width: auto;
  height: auto;
  object-fit: cover;
}
h1 {
  text-align: center;
}

p {
  text-align: center;
  margin-left: 50px;
}
.danger {
  color: white;
  border: none;
  box-shadow: 0px 0px 30px rgba(91, 90, 90, 0.37);
  color: rgb(255, 255, 255);
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background-color: #10a521;
}
.danger:hover {
  color: black;
  backdrop-filter: blur(30px);
  border: 5px solid rgba(0, 0, 0, 0.18);
  transition: 0.5s;
  box-shadow: 0 0 10px rgba(72, 255, 72, 1.2);
}

.primary {
  backdrop-filter: blur(30px);
  background-color: white;
  box-shadow: 0px 0px 30px rgba(91, 90, 90, 0.37);
  color: rgb(0, 0, 0);
  border: 2px solid rgba(0, 0, 0, 0.18);
  border: none;
  border-radius: 20px;
  margin-left: 35px;
  margin-bottom: 10px;
  width: 80%;
  padding: 10px 20px; /* Khoảng cách bên trong */
  cursor: pointer;
  transition: background-color 0.3s;
}
.primary:hover {
  background-color: #4c4c4c;
  color: white;
  position: relative;
  transition: 0.5s;
  box-shadow: 0 0 10px rgba(105, 105, 105, 1.2);
}
.products {
  width: 100%;
  display: block;
  padding: 40px 0;
  margin: 10px;
}
.products-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  --gap: 20px; /* Khoảng cách giữa các thẻ card */
}

.products .card {
  width: 22rem;
  margin: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.products .card:hover {
  transform: translateY(-5px);
}
.text-pink {
  color: #e83e8c;
}
</style>
