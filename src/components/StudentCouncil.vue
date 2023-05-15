<template>
  <div class="row gx-2">
    <div class="col-sm-4 p-1" v-for="a in 3" :key="a">
      <div class="card">
        <p class="card-text insta-container">
          <img src="../assets/insta_sample_thumbnail.jpg" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentCouncil",
};
</script>

<style></style>
