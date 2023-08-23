<template>
  <nav class="navbar navbar-expand-lg">
  <!-- Container wrapper -->
  <div class="container-fluid">

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse justify-content-center" id="navbarRightAlignExample">
      <!-- Left links -->
      <ul class="navbar-nav ms-auto mb-4 mb-lg-0">
        <li class="nav-item me-5">
          <router-link class="nav-link active" to="/">Home</router-link>
        </li>
        <li class="nav-item me-5">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item me-5">
          <router-link class="nav-link" to="/product">Our Products</router-link>
        </li>
        <li class="nav-item me-5">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
        <li class="nav-item me-5">
          <router-link class="nav-link" to="/admin">Admin</router-link>
        </li>
      </ul>
    </div>
    <!-- Collapsible wrapper -->
  </div>
  <!-- Container wrapper -->
</nav>
</template>
