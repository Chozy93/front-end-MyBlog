<template>
  <div class="container-xxl py-5">
    <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close">
          <span class="icofont-close js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>

    <div class="hero hero-inner">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mx-auto text-center">
            <div class="intro-wrap">
              <h1 class="mb-0">Booking</h1>
              <p class="text-white">Booking Tour Page.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      
      <!-- Reservation Start -->
      <div class="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
        <div class="row g-0">
          <div class="col-md-6 bg-dark d-flex align-items-">
            <div class="p-5 wow fadeInUp" data-wow-delay="0.2s">
              <h5
                class="
                  section-title
                  ff-secondary
                  text-start text-primary
                  fw-normal
                "
              >
                Reservation
              </h5>
              <h1 class="text-white mb-4">Tour Info</h1>

              <div class="row g-3">
                <div class="col-md-12">
                  <div>
                    <label for="destination" class="text-white"
                      >Destination</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="destination"
                      required
                      name="destination"
                      v-model="booker.destination"
                      placeholder="destination"
                      disabled
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div>
                    <label for="schedule" class="text-white">Schedule</label>
                    <input
                      type="text"
                      class="form-control"
                      id="schedule"
                      required
                      name="schedule"
                      v-model="booker.schedule"
                      disabled
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div>
                    <label for="price" class="text-white">Price</label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      required
                      name="price"
                      v-model="booker.price"
                      disabled
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <label for="manager" class="text-white">Manager</label>
                  <input
                    type="text"
                    class="form-control"
                    id="manager"
                    required
                    name="manager"
                    v-model="booker.manager"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 bg-dark d-flex align-items-center">
            <div class="p-5 wow fadeInUp" data-wow-delay="0.2s">
              <h5
                class="
                  section-title
                  ff-secondary
                  text-start text-primary
                  fw-normal
                "
              >
                Tours
              </h5>
              <h1 class="text-white mb-4">Your Info</h1>

              <div class="row g-3">
                <div class="col-md-6">
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      v-model="booker.name"
                    />
                    <label for="name">Your Name</label>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control"
                      id="phone"
                      placeholder="Your Phone"
                      v-model="booker.phone"
                    />
                    <label for="phone">Your Phone</label>
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="form-floating">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Your Email"
                      v-model="booker.email"
                    />
                    <label for="email">Your Email</label>
                  </div>
                </div>

                <div class="col-12">
                  <button class="btn btn-primary w-100 py-3" @click="saveBooker">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="videoModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content rounded-0">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Youtube Video</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <!-- 16:9 aspect ratio -->
              <div class="ratio ratio-16x9">
                <iframe
                  class="embed-responsive-item"
                  src=""
                  id="video"
                  allowfullscreen
                  allowscriptaccess="always"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Reservation Start -->
    </div>

    <div class="alert alert-success" role="alert" v-if="submitted">
      Booking successfully!
    </div>
  </div>
</template>

<script>
import BookDataService from "../../services/BookDataService";
import BookerDataService from "../../services/BookerDataService";

/* eslint-disable */
export default {
  data() {
    return {
      currentBook: null,
      message: "",
      booker: {
        bkno: null,
        destination: "",
        schedule: "",
        price: "",
        manager: "",
        name: "",
        phone: "",
        email: "",
      },
      submitted: false,
    };
  },
  methods: {
    getBook(bno) {
      BookDataService.get(bno) // spring 요청
        //  성공/실패 모르겠지만
        //  성공하면 then안에 있는것이 실행
        .then((response) => {
          this.currentBook = response.data;
          this.booker.destination = this.currentBook.destination;
          this.booker.schedule = this.currentBook.schedule;
          this.booker.price = this.currentBook.price;
          this.booker.manager = this.currentBook.manager;
          console.log(response.data);
        })
        //  실패하면 catch안에 있는것이 실행
        .catch((e) => {
          console.log(e);
        });
    },
    saveBooker() {
      let data = {
        destination: this.booker.destination,
        schedule: this.booker.schedule,
        price: this.booker.price,
        manager: this.booker.manager,
        name: this.booker.name,
        phone: this.booker.phone,
        email: this.booker.email,
      };
      BookerDataService.create(data)
        .then((response) => {
          this.booker.bkno = response.data.bkno;
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getBook(this.$route.params.bno);
  },
};
</script>