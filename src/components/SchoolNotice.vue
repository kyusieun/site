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
      <tr v-for="data in univJson" :key="data.title">
        <th scope="row">{{ data.category }}</th>
        <td>
          <a :href="data.url">{{ data.title }}</a>
        </td>
        <td>{{ data.date }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import univJson from "../json/homepage_univ.json";
export default {
  name: "SchoolNotice",
  data() {
    return {
      univJson: univJson,
    };
  },
};
</script>

<style></style>
