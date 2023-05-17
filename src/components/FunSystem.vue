<template>
  <div class="row">
    <div class="col-sm-3 p-1" v-for="data in Fun" :key="data.title">
      <div class="card" style="width: 18rem">
        <img :src="data.cover" class="card-img-top" />
        <div class="card-body">
          <p class="card-text">
            {{ data.title }}
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
</template>

<script>
import Fun from "../json/fun_system.json";
export default {
  name: "FunSystem",
  data() {
    return {
      Fun: Fun,
    };
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
