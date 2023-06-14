<template>
  <table class="table">
    <thead>
      <tr>
        <th @click="sortTable('admin')" scope="col">학과</th>
        <th @click="sortTable('title')" scope="col">제목</th>
        <th @click="sortTable('date')" scope="col">날짜</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in sortedItems" :key="data.url">
        <th scope="row">{{ data.major }}</th>
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
  name: "DepartmentNotice",
  data() {
    return {
      sortKey: "", // 사용자 클릭에 의해 변경되는 정렬 기준
      sortDesc: false, // 정렬 순서 (오름차순: false, 내림차순: true)
      items: [],
    };
  },
  mounted() {
    axios
      .get(
        "https://moassu.com:443/list/department?page=0&size=15&sort=writeDate,DESC"
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

<style>
a {
  color: black;
}
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}
</style>
