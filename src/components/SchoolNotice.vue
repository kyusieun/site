<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">카테고리</th>
        <th scope="col">제목</th>
        <th scope="col">날짜</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="university in universities" :key="university.id">
        <th scope="row">{{ university.category }}</th>
        <td>
          <a :href="university.link">{{ university.title }}</a>
        </td>
        <td>{{ university.date }}</td>
      </tr>
    </tbody>
  </table>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li v-for="i in 9" :key="i" class="page-item">
        <a class="page-link" href="#">{{ i }}</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  name: "SchoolNotice",
  data() {
    return {
      universities: [],
      currentPage: 0,
      pageSize: 15,
      sort: "writeDate,ASC",
    };
  },
  mounted() {
    axios
      .get(
        "http://ec2-3-39-206-176.ap-northeast-2.compute.amazonaws.com:8080/list/univ?page=0&size=15&sort=writeDate,ASC"
      )
      .then((response) => {
        this.items = response.data;
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  },
  created() {
    this.fetchUniversities();
  },
  methods: {
    fetchUniversities() {
      const apiUrl =
        "http://ec2-3-39-206-176.ap-northeast-2.compute.amazonaws.com:8080/list/univ";
      const params = {
        page: this.currentPage,
        size: this.pageSize,
        sort: this.sort,
      };

      axios
        .get(apiUrl, { params })
        .then((response) => {
          this.universities = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    // 페이지 변경 시 데이터 업데이트
    onPageChange(page) {
      this.currentPage = page;
      this.fetchUniversities();
    },
  },
};
</script>

<style></style>
