<template>
  <table class="table">
    <thead>
      <tr>
        <th @click="sortTable('category')" scope="col">카테고리</th>
        <th @click="sortTable('title')" scope="col">제목</th>
        <th @click="sortTable('date')" scope="col">날짜</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in sortedItems" :key="data.url">
        <th scope="row">{{ data.category }}</th>
        <td>
          <a :href="data.link">{{ data.title }}</a>
        </td>
        <td>{{ data.date }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
import univJson from "../json/homepage_univ.json";
export default {
  name: "SchoolNotice",
  data() {
    return {
      sortKey: "", // 사용자 클릭에 의해 변경되는 정렬 기준
      sortDesc: false, // 정렬 순서 (오름차순: false, 내림차순: true)
      univJson: univJson,
      items: [],
    };
  },
  mounted() {
    axios
      .get(
        "http://ec2-3-39-206-176.ap-northeast-2.compute.amazonaws.com:8080/list/univ?page=0&size=20&sort=writeDate,ASC"
      )
      .then((response) => {
        this.items = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  computed: {
    sortedItems() {
      const key = this.sortKey;
      const order = this.sortDesc ? -1 : 1;

      return this.items.slice().sort((a, b) => {
        if (a[key] < b[key]) return -order;
        if (a[key] > b[key]) return order;
        return 0;
      });
    },
  },
  methods: {
    sortTable(key) {
      if (this.sortKey === key) {
        this.sortDesc = !this.sortDesc;
      } else {
        this.sortKey = key;
        this.sortDesc = false;
      }
    },
  },
};
</script>

<style></style>
