<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>

        <th scope="col">제목</th>
        <th scope="col">날짜</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in CompSci" :key="data.title">
        <th scope="row">{{ data.num }}</th>
        <td>
          <a :href="data.url">{{ data.title }}</a>
        </td>
        <td>{{ data.date }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import CompSci from "../json/CompSci.json";
export default {
  name: "DepartmentNotice",
  data() {
    return {
      CompSci: CompSci,
    };
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
