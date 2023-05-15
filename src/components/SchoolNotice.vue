<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">카테고리</th>
        <th scope="col">제목</th>
        <th scope="col">날짜</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in 6" :key="i">
        <th scope="row">{{ i }}</th>
        <td>비교과-행사</td>
        <td>
          <a
            href="https://scatch.ssu.ac.kr/%ea%b3%b5%ec%a7%80%ec%82%ac%ed%95%ad/?f&category&slug=65139&keyword"
            >[대학일자리플러스사업단] 코나아이 채용상담회 안내</a
          >
        </td>
        <td>2023.05.11</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "SchoolNotice",
};
</script>

<style></style>
