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
              <h1 class="mb-0">Check Reservation</h1>
              <p class="text-white">Checking your booking and editing.  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <!-- search 관련 div 시작 -->
      <br>
      <div class="col-md-8">
        <div class="input-group mb-3">
          <div class="col-2">
            <select class="form-select" v-model="searchSelect">
              <option>name</option>
              <option>phone</option>
            </select>
          </div>
  
          <div class="col-9">
            <input
              type="text"
              class="form-control"
              placeholder="Search by name or phone"
              v-model="searchKeyword"
            />
          </div>
  
          <div class="input-group-append col-1">
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="
                page = 1;
                retrieveBooker();
              "
            >
              Search
            </button>
          </div>
          <!--            Todo : 수정 끝 -->
        </div>
      </div>
      <!-- search 관련 div 끝 -->
  
      <!--    Todo : page 바 시작 -->
      <div class="col-md-12">
        <div class="mb-3">
          Items per Page:
          <select v-model="pageSize" @change="handlePageSizeChange($event)">
            <option v-for="size in pageSizes" :key="size" :value="size">
              <!--            size : 3, 6, 9 -->
              {{ size }}
            </option>
          </select>
        </div>
  
        <b-pagination
          v-model="page"
          :total-rows="count"
          :per-page="pageSize"
          prev-text="Prev"
          next-text="Next"
          @change="handlePageChange"
        ></b-pagination>
      </div>
      <!--    Todo : page 바 끝 -->
  
      <table class="table">
        <thead>
          <tr>
            <th scope="col">destination</th>
            <th scope="col">schedule</th>
            <th scope="col">price</th>
            <th scope="col">manager</th>
            <th scope="col">name</th>
            <th scope="col">phone</th>
            <th scope="col">email</th>
            <th scope="col">edit</th>
          </tr>
        </thead>
        <tbody v-for="(data, index) in booker" :key="index">
          <tr>
            <td>{{ data.destination }}</td>
            <td>{{ data.schedule }}</td>
            <td>{{ data.price }}</td>
            <td>{{ data.manager }}</td>
            <td>{{ data.name }}</td>
            <td>{{ data.phone }}</td>
            <td>{{ data.email }}</td>
            <td>
              <router-link :to="'/booker/' + data.bkno"
                ><span class="badge bg-success">Edit</span></router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
      <br>
    </div>
  </template>
  
  <script>
  import BookerDataService from "../../services/BookerDataService";
  /* eslint-disable */
  export default {
    data() {
      return {
        booker: [],
        searchKeyword: "",
        searchSelect: "name",
  
        page: 1,
        count: 0,
        pageSize: 3,
  
        pageSizes: [3, 6, 9],
      };
    },
    methods: {
      retrieveBooker() {
        BookerDataService.getAll(
          this.searchSelect,
          this.searchKeyword,
          this.page - 1,
          this.pageSize
        )
          .then((response) => {
            const { booker, totalItems } = response.data;
            this.booker = booker;
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
        this.retrieveBooker();
      },
  
      // 셀렉트 박스 값 변경시 (페이지 크기 변경) 실행되는 함수
      // event.target.value : 셀렉트 박스에서 선택된 값
      handlePageSizeChange(event) {
        this.pageSize = event.target.value;
        this.page = 1;
        this.retrieveBooker();
      },
    }
    
  };
  </script>