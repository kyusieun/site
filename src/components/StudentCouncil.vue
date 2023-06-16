<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">학과</th>
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
