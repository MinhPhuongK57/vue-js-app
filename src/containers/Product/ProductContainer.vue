<script setup>
import ProductItem from "./ProductItem/ProductItem.vue";
import data from "../Product/ProductItem/data";
</script>

<template>
  <div class="products">
    <div class="row">
      <!-- {data.map((x, index) return <ProductItem {data.x} />})} -->
      <ProductItem />
      <!-- <div class="col-md-4">
        <div class="card">
          <img
            src="../../src/img/tonner.jpg"
            class="card-img-top"
            alt="Sản phẩm 1"
          />
          <div class="card-body">
            <h5 class="card-title">Simple Soothing Facial Toner–200 ml</h5>
            <p class="card-text">
              Mô tả: Nước hoa hồng Simple Kind to Skin Soothing Facial Toner của
              chúng tôi có sự pha trộn đặc biệt giữa các thành phần làm săn chắc
              da Simple giúp giữ cho làn da săn chắc và tươi mới.<br />
              Thành phần: Pro-Vitamin B5, Cúc La Mã, Cây phỉ và Allantoin
            </p>
            <button class="primary">Thêm giỏ hàng</button><br />
            <button class="danger">Mua ngay</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img src="./img/serum.jpg" class="card-img-top" alt="Sản phẩm 2" />
          <div class="card-body">
            <h5 class="card-title">ESTÉE LAUDER</h5>
            <p class="card-text">
              Mô tả: Tận dụng sức mạnh tái tạo của màn đêm.
            </p>
            <button class="primary">Thêm giỏ hàng</button><br />
            <button class="danger">Mua ngay</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img
            src="./img/kem-chong-nang-nang-tone-da-5.jpg"
            class="card-img-top"
            alt="Sản phẩm 3"
          />
          <div class="card-body">
            <h5 class="card-title">Sunplay Skin Aqua Tone Up UV Milk</h5>
            <p class="card-text">
              Mô tả: một sản phẩm có công dụng 2 trong 1 mà các chị em nên sở
              hữu bởi đấy nhé. <br />
              Ngoài khả năng bảo vệ da của một loại kem chống nắng thông dụng ra
              thì chúng sẽ còn giúp da của bạn trông đều màu và trắng hồng hơn
              nữa
            </p>
            <button class="primary">Thêm giỏ hàng</button><br />
            <button class="danger">Mua ngay</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img src="./img/khoa-nen.jpg" class="card-img-top" alt="Sản phẩm 4" />
          <div class="card-body">
            <h5 class="card-title">
              Xịt Khóa Nền So Natural All Day Tight Make Up Setting Fixx 75ml
            </h5>
            <p class="card-text">
              Mô tả: Vừa giữ ẩm, vừa hút dầu, tăng độ bám cho lớp nền luôn bền
              màu và mịn màng.<br />
              **Chiết xuất chanh vàng: giúp làm sạch da và kiểm soát lượng bã
              nhờn, cân bằng được lượng dầu trên da.<br />
              **Hạn chế mụn hình thành, hỗ trợ hút bớt dầu thừa và mồ hôi, bã
              nhờn.
            </p>
            <button class="primary">Thêm giỏ hàng</button><br />
            <button class="danger">Mua ngay</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img
            src="./img/tẩy-da-chết-innisfree-green-barley-gommage-peeling-mask-1-1.jpg"
            class="card-img-top"
            alt="Sản phẩm 5"
          />
          <div class="card-body">
            <h5 class="card-title">
              Tẩy Tế Bào Chết Lúa Mạch Xanh Innisfree Green Barley Gommage Mask
            </h5>
            <p class="card-text">
              Thành phần:Lúa mạch và Salicylic Acid, AHA (Acid Glycolic) + BHA
              (Salicylic).<br />
              **Lưu ý: Có chứa AHA, BHA nên thử sản phẩm trước ở cổ tay. Với một
              số vùng da nhạy cảm, có thể ngứa râm ran trong lần đầu sử dụng.
            </p>
            <button class="primary">Thêm giỏ hàng</button><br />
            <button class="danger">Mua ngay</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img src="./img/kem-nen.jpg" class="card-img-top" alt="Sản phẩm 6" />
          <div class="card-body">
            <h5 class="card-title">Kem nền Mac Studio Fix Fluid SPF15</h5>
            <p class="card-text">
              Mô tả:<br />
              - Công dụng chính: Kem nền Mac Studio Fix Fluid SPF15 dạng lỏng
              cho hiệu ứng mờ giúp che phủ từ trung bình đến cao, đồng thời kiểm
              soát­­ độ bóng, duy trì lớp nền đến 24h<br />
              - Hiệu ứng: Mờ, mịn
            </p>
            <button class="primary">Thêm giỏ hàng</button><br />
            <button class="danger">Mua ngay</button>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
