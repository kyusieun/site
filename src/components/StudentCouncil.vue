<template>
  <div class="row gx-2">
    <div class="col-sm-4 p-1" v-for="item in items" :key="item.id">
      <div class="card">
        <p class="card-text insta-container">
          <a :href="item.url">{{ item.img }}</a>
          <img :src="item.img" />
        </p>
      </div>
    </div>
  </div>
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
        "http://ec2-3-39-206-176.ap-northeast-2.compute.amazonaws.com:8080/list/insta?page=0&size=20"
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
