<template>
  <div class="container-xxl bg-white p-0">
    <!-- Spinner Start -->
    <div
      id="spinner"
      class="
        show
        bg-white
        position-fixed
        translate-middle
        w-100
        vh-100
        top-50
        start-50
        d-flex
        align-items-center
        justify-content-center
      "
    >
      <div
        class="spinner-border text-primary"
        style="width: 3rem; height: 3rem"
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <!-- Spinner End -->

    <!-- Navbar & Hero Start -->
    <div class="container-xxl position-relative p-0">
      <nav
        class="
          navbar navbar-expand-lg navbar-dark
          bg-dark
          px-4 px-lg-5
          py-3 py-lg-0
        "
      >
        <router-link to="/" class="navbar-brand p-0">
          <h1 class="text-primary m-0">Master Tour</h1>
          <!-- <img src="img/logo.png" alt="Logo"> -->
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="fa fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto py-0 pe-4">
            <router-link to="/" class="nav-item nav-link active"
              >Home</router-link
            >
            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                >Tours</a
              >
              <div class="dropdown-menu m-0">
                <router-link to="/list" class="dropdown-item"
                  >Tour List</router-link
                >
                <router-link to="/check/tour" class="dropdown-item"
                  >Reservation Check</router-link
                >
              </div>
            </div>
            <router-link to="/service" class="nav-item nav-link"
              >Service</router-link
            >
            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                >About Us</a
              >
              <div class="dropdown-menu m-0">
                <router-link to="/about" class="dropdown-item"
                  >About</router-link
                >
                <router-link to="/team" class="dropdown-item"
                  >Our Team</router-link
                >
                <router-link to="/review" class="dropdown-item"
                  >Review</router-link
                >
                <router-link to="/faq" class="dropdown-item">FAQs</router-link>
              </div>
            </div>
            <router-link to="/contact" class="nav-item nav-link"
              >Contact</router-link
            >
          </div>
          <router-link to="/booking" class="btn btn-primary py-2 px-4"
            >Book A Tour</router-link
          >
        </div>
      </nav>

      <div class="container-xxl py-5 bg-dark hero-header mb-5">
        <div class="container my-5 py-5">
          <div class="row align-items-center g-5">
            <div class="col-lg-6 text-center text-lg-start">
              <h1 class="display-3 text-white animated slideInLeft">
                Enjoy Our<br />Fantastic Tour
              </h1>
              <p class="text-white animated slideInLeft mb-4 pb-2">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <a
                href=""
                class="
                  btn btn-primary
                  py-sm-3
                  px-sm-5
                  me-3
                  animated
                  slideInLeft
                "
                >Book A Table</a
              >
            </div>
            <div class="col-lg-6 text-center text-lg-end overflow-hidden">
              <img class="img-fluid" src="img/hero.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Navbar & Hero End -->
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>