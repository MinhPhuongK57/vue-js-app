<template>
  <div class="header">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top"
    >
      <div class="container">
        <a class="navbar-brand fw-bold" href="#">
          <i class="fas fa-spa me-2 text-pink"></i> Beauty Shop
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-ion"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#">Trang chủ</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="productsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Sản phẩm</a
              >
              <ul class="dropdown-menu" aria-labelledby="productsDropdown">
                <li>
                  <a class="dropdown-item" href="#">Kem chống nắng (9)</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Kem dưỡng (5)</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Sữa rữa mặt (3)</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Khóa nền (1)</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Kem chống nắng (12)</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Tẩy tế bào chết (15)</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Liên hệ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Đánh giá</a>
            </li>
          </ul>
          <div class="d-flex">
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Tìm kiếm sản phẩm..."
              class="form-control me-2"
            />
            <a href="#" class="btn btn-outline-dark me-2">
              <i class="fa-solid fa-spa"></i>
            </a>
            <a
              href="#"
              class="btn btn-outline-dark me-2"
              @click="toggleLoginModal"
            >
              <i class="fa-solid fa-user"></i>
            </a>
            <a href="#" class="btn btn-outline-dark position-relative">
              <i class="fa-solid fa-shopping-cart"></i>
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                v-if="cartItemCount > 0"
              >
                {{ cartItemCount }}
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div class="content">
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/8/23/1084256/295497942_2922294937.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/8/23/1084256/295497942_2922294937.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/8/23/1084256/295497942_2922294937.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <h1>Sản phẩm nổi bật</h1>
  <div class="products">
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <img src="./img/tonner.jpg" class="card-img-top" alt="Sản phẩm 1" />
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
      </div>
    </div>
  </div>
  <!-- Footer -->
  <footer class="py-5 bg-black text-white" id="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-3 mb-4">
          <p>
            Chuyên cung cấp các sản phẩm mỹ phẩm cao cấp, an toàn cho làn da.
          </p>
          <div class="social-icons">
            <a href="#" class="text-white me-2"
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a href="#" class="text-white me-2"
              ><i class="fab fa-instagram"></i
            ></a>
            <a href="#" class="text-white me-2"
              ><i class="fab fa-tiktok"></i
            ></a>
            <a href="#" class="text-white"><i class="fab fa-youtube"></i></a>
          </div>
        </div>

        <div class="col-md-3 mb-4">
          <h5>Liên kết</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#" class="text-white text-decoration-none">Trang chủ</a>
            </li>
            <li>
              <a href="#" class="text-white text-decoration-none"
                >Về chúng tôi</a
              >
            </li>
            <li>
              <a href="#" class="text-white text-decoration-none">Sản phẩm</a>
            </li>
            <li>
              <a href="#" class="text-white text-decoration-none">Blog</a>
            </li>
            <li>
              <a href="#footer" class="text-white text-decoration-none"
                >Liên hệ</a
              >
            </li>
          </ul>
        </div>

        <div class="col-md-3 mb-4">
          <h5>Dịch vụ</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#" class="text-white text-decoration-none">Tư vấn da</a>
            </li>
            <li>
              <a href="#" class="text-white text-decoration-none"
                >Hướng dẫn sử dụng</a
              >
            </li>
            <li>
              <a href="#" class="text-white text-decoration-none"
                >Chính sách đổi trả</a
              >
            </li>
            <li>
              <a href="#" class="text-white text-decoration-none">Vận chuyển</a>
            </li>
            <li>
              <a href="#" class="text-white text-decoration-none">Bảo mật</a>
            </li>
          </ul>
        </div>

        <div class="col-md-3 mb-4">
          <h5>Liên hệ</h5>
          <ul class="list-unstyled">
            <li>
              <i class="fas fa-map-marker-alt me-2"></i> 123 Đường ABC, Quận 1,
              TP.HCM
            </li>
            <li><i class="fas fa-phone me-2"></i> 0901 234 567</li>
            <li><i class="fas fa-envelope me-2"></i> info@beautyshop.com</li>
          </ul>
        </div>
      </div>

      <hr class="my-4 bg-secondary" />
      <div class="row">
        <div class="col-md-6 text-center text-md-start">
          <p class="mb-0">&copy; 2025 Beauty Shop. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from "vue";

export default {
  name: "app",
  setup() {
    const cartItemCount = ref(2);
    return { cartItemCount };
  },
};
</script>

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
