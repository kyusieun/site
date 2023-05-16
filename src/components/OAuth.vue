<template>
  <div>
    <p>Received authorization code: {{ code }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    code() {
      return this.$route.query.code;
    },
  },
};
</script>
