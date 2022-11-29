<template>
  <div>
    <!-- Service Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="service-item rounded pt-3">
              <div class="p-4">
                <i class="fa fa-3x fa-user-tie text-primary mb-4"></i>
                <h5>Pro Guide</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="service-item rounded pt-3">
              <div class="p-4">
                <i class="fa fa-3x fa-utensils text-primary mb-4"></i>
                <h5>Quality Tour</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="service-item rounded pt-3">
              <div class="p-4">
                <i class="fa fa-3x fa-cart-plus text-primary mb-4"></i>
                <h5>Online Booking</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <div class="service-item rounded pt-3">
              <div class="p-4">
                <i class="fa fa-3x fa-headset text-primary mb-4"></i>
                <h5>24/7 Service</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Service End -->

    <!-- About Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6">
            <div class="row g-3">
              <div class="col-6 text-start">
                <img
                  class="img-fluid rounded w-100 wow zoomIn"
                  data-wow-delay="0.1s"
                  src="img/about-1.jpg"
                />
              </div>
              <div class="col-6 text-start">
                <img
                  class="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.3s"
                  src="img/about-2.jpg"
                  style="margin-top: 25%"
                />
              </div>
              <div class="col-6 text-end">
                <img
                  class="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.5s"
                  src="img/about-3.jpg"
                />
              </div>
              <div class="col-6 text-end">
                <img
                  class="img-fluid rounded w-100 wow zoomIn"
                  data-wow-delay="0.7s"
                  src="img/about-4.jpg"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <h5
              class="
                section-title
                ff-secondary
                text-start text-primary
                fw-normal
              "
            >
              About Us
            </h5>
            <h1 class="mb-4">Welcome to Master Tour</h1>
            <p class="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem
              sit.
            </p>
            <p class="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <div class="row g-4 mb-4">
              <div class="col-sm-6">
                <div
                  class="
                    d-flex
                    align-items-center
                    border-start border-5 border-primary
                    px-3
                  "
                >
                  <h1
                    class="flex-shrink-0 display-5 text-primary mb-0"
                    data-toggle="counter-up"
                  >
                    10
                  </h1>
                  <div class="ps-4">
                    <p class="mb-0">Years of</p>
                    <h6 class="text-uppercase mb-0">Experience</h6>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div
                  class="
                    d-flex
                    align-items-center
                    border-start border-5 border-primary
                    px-3
                  "
                >
                  <h1
                    class="flex-shrink-0 display-5 text-primary mb-0"
                    data-toggle="counter-up"
                  >
                    20
                  </h1>
                  <div class="ps-4">
                    <p class="mb-0">Professional</p>
                    <h6 class="text-uppercase mb-0">Tour Guide</h6>
                  </div>
                </div>
              </div>
            </div>
            <a class="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
          </div>
        </div>
      </div>
    </div>
    <!-- About End -->

    <!-- Menu Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5
            class="
              section-title
              ff-secondary
              text-center text-primary
              fw-normal
            "
          >
            Tour List
          </h5>
          <h1 class="mb-5">Most Popular Tours</h1>
        </div>
        <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
         
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Destination</th>
                <th scope="col">Schedule</th>
                <th scope="col">Price</th>
                <th scope="col">Manager</th>
                <th scope="col">booking</th>
              </tr>
            </thead>
            <tbody v-for="(data, index) in book" :key="index">
              <tr>
                <td>{{ data.destination }}</td>
                <td>{{ data.schedule }}</td>
                <td>{{ data.price }}$</td>
                <td>{{ data.manager }}</td>
                <td>
                  <router-link :to="'/tour/' + data.bno"
                    ><span class="badge bg-success">book</span></router-link
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- Menu End -->

    <!-- Team Start -->
    <div class="container-xxl pt-5 pb-3">
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5
            class="
              section-title
              ff-secondary
              text-center text-primary
              fw-normal
            "
          >
            Team Members
          </h5>
          <h1 class="mb-5">Our Master Guide</h1>
        </div>
        <div class="row g-4">
          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="team-item text-center rounded overflow-hidden">
              <div class="rounded-circle overflow-hidden m-4">
                <img class="img-fluid" src="img/team-1.jpg" alt="" />
              </div>
              <h5 class="mb-0">Full Name</h5>
              <small>Designation</small>
              <div class="d-flex justify-content-center mt-3">
                <a class="btn btn-square btn-primary mx-1" href=""
                  ><i class="fab fa-facebook-f"></i
                ></a>
                <a class="btn btn-square btn-primary mx-1" href=""
                  ><i class="fab fa-twitter"></i
                ></a>
                <a class="btn btn-square btn-primary mx-1" href=""
                  ><i class="fab fa-instagram"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="team-item text-center rounded overflow-hidden">
              <div class="rounded-circle overflow-hidden m-4">
                <img class="img-fluid" src="img/team-2.jpg" alt="" />
              </div>
              <h5 class="mb-0">Full Name</h5>
              <small>Designation</small>
              <div class="d-flex justify-content-center mt-3">
                <a class="btn btn-square btn-primary mx-1" href=""
                  ><i class="fab fa-facebook-f"></i
                ></a>
                <a class="btn btn-square btn-primary mx-1" href=""
                  ><i class="fab fa-twitter"></i
                ></a>
                <a class="btn btn-square btn-primary mx-1" href=""
                  ><i class="fab fa-instagram"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="team-item text-center rounded overflow-hidden">
              <div class="rounded-circle overflow-hidden m-4">
                <img class="img-fluid" src="img/team-3.jpg" alt="" />
              </div>
              <h5 class="mb-0">Full Name</h5>
              <small>Designation</small>
              <div class="d-flex justify-content-center mt-3">
                <a class="btn btn-square btn-primary mx-1" href=""
                  ><i class="fab fa-facebook-f"></i
                ></a>
                <a class="btn btn-square btn-primary mx-1" href=""
                  ><i class="fab fa-twitter"></i
                ></a>
                <a class="btn btn-square btn-primary mx-1" href=""
                  ><i class="fab fa-instagram"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div class="team-item text-center rounded overflow-hidden">
              <div class="rounded-circle overflow-hidden m-4">
                <img class="img-fluid" src="img/team-4.jpg" alt="" />
              </div>
              <h5 class="mb-0">Full Name</h5>
              <small>Designation</small>
              <div class="d-flex justify-content-center mt-3">
                <a class="btn btn-square btn-primary mx-1" href=""
                  ><i class="fab fa-facebook-f"></i
                ></a>
                <a class="btn btn-square btn-primary mx-1" href=""
                  ><i class="fab fa-twitter"></i
                ></a>
                <a class="btn btn-square btn-primary mx-1" href=""
                  ><i class="fab fa-instagram"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Team End -->

    <!-- Testimonial Start -->
    <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container">
        <div class="text-center">
          <h5
            class="
              section-title
              ff-secondary
              text-center text-primary
              fw-normal
            "
          >
            Testimonial
          </h5>
          <h1 class="mb-5">Our Clients Say!!!</h1>
        </div>
        <div class="owl-carousel testimonial-carousel">
          <div class="testimonial-item bg-transparent border rounded p-4">
            <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
            <p>
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam
            </p>
            <div class="d-flex align-items-center">
              <img
                class="img-fluid flex-shrink-0 rounded-circle"
                src="img/testimonial-1.jpg"
                style="width: 50px; height: 50px"
              />
              <div class="ps-3">
                <h5 class="mb-1">Client Name</h5>
                <small>Profession</small>
              </div>
            </div>
          </div>
          <div class="testimonial-item bg-transparent border rounded p-4">
            <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
            <p>
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam
            </p>
            <div class="d-flex align-items-center">
              <img
                class="img-fluid flex-shrink-0 rounded-circle"
                src="img/testimonial-2.jpg"
                style="width: 50px; height: 50px"
              />
              <div class="ps-3">
                <h5 class="mb-1">Client Name</h5>
                <small>Profession</small>
              </div>
            </div>
          </div>
          <div class="testimonial-item bg-transparent border rounded p-4">
            <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
            <p>
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam
            </p>
            <div class="d-flex align-items-center">
              <img
                class="img-fluid flex-shrink-0 rounded-circle"
                src="img/testimonial-3.jpg"
                style="width: 50px; height: 50px"
              />
              <div class="ps-3">
                <h5 class="mb-1">Client Name</h5>
                <small>Profession</small>
              </div>
            </div>
          </div>
          <div class="testimonial-item bg-transparent border rounded p-4">
            <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
            <p>
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam
            </p>
            <div class="d-flex align-items-center">
              <img
                class="img-fluid flex-shrink-0 rounded-circle"
                src="img/testimonial-4.jpg"
                style="width: 50px; height: 50px"
              />
              <div class="ps-3">
                <h5 class="mb-1">Client Name</h5>
                <small>Profession</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BookDataService from "../services/BookDataService";
import main from "../assets/js/main.js";
/* eslint-disable */
export default {
  name: "HomeView",
  mounted() {
    main();
  },
  data() {
      return {
        book: [],
        searchKeyword: "",
        searchSelect: "question",
  
        page: 1,
        count: 0,
        pageSize: 3,
  
        pageSizes: [3, 6, 9],
      };
    },
    methods: {
        retrieveBook() {
            BookDataService.getAll(
          this.searchSelect,
          this.searchKeyword,
          this.page - 1,
          this.pageSize
        )
          .then((response) => {
            const { book, totalItems } = response.data;
            this.book = book;
            this.count = totalItems;
  
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      },
  
      //  페이지 번호 변경시 실행되는 함수
      //  부트스트랩-페이지 양식에 페이지번호만 매개변수로 전달하면 됨
      // 페이지번호를 변경한 숫자가 매개변수(value)로 전달됨
      handlePageChange(value) {
        this.page = value;
        this.retrieveBook();
      },
  
      // 셀렉트 박스 값 변경시 (페이지 크기 변경) 실행되는 함수
      // event.target.value : 셀렉트 박스에서 선택된 값
      handlePageSizeChange(event) {
        this.pageSize = event.target.value;
        this.page = 1;
        this.retrieveBook();
      },
    },
    mounted() {
      this.retrieveBook();
    },
};
</script>
