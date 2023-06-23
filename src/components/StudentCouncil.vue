<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">
          <select class="form-select" aria-label="Default select example">
            <option selected>학생회</option>
            <option value="1">총학생회</option>
            <option value="2">전자정보공학부</option>
            <option value="3">컴퓨터학부</option>
          </select>
        </th>
        <th scope="col">제목</th>
        <th scope="col">날짜</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in items" :key="data.url">
        <th scope="row">{{ data.admin }}</th>
        <td>
          <a :href="data.url">{{ data.title }}</a>
        </td>
        <td>{{ data.date }}</td>
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
  name: "StudentCouncil",
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    axios
      .get(
        "http://ec2-3-39-206-176.ap-northeast-2.compute.amazonaws.com:8080/list/insta?page=0&size=14&sort=writeDate,DESC"
      )
      .then((response) => {
        this.items = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style></style>
