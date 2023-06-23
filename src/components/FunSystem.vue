<template>
  <div class="row">
    <div class="col-sm-3 p-1" v-for="data in items" :key="data.title">
      <div class="card" style="width: 18rem">
        <img :src="data.thumbnail" class="card-img-top" />
        <div class="card-body">
          <p class="card-text">
            <a :href="data.url">{{ data.title }}</a>
          </p>
        </div>
      </div>
      <!-- <div class="card">
        <p class="card-img-top insta-container">
          <a :href="data.url">
            <img :src="data.cover" />
          </a>
        </p>
      </div> -->
    </div>
  </div>
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
import Fun from "../json/fun_system.json";
export default {
  name: "FunSystem",
  data() {
    return {
      Fun: Fun,
      items: [],
    };
  },
  mounted() {
    axios
      .get(
        "http://ec2-3-39-206-176.ap-northeast-2.compute.amazonaws.com:8080/list/fun?page=0&size=12&sort=applyStartDate,ASC"
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

<style>
.card {
  height: 250px;
}
img {
  max-width: 100%;
  max-height: 100%;
}
</style>
