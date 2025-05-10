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
</template>
