<template>
  <div>
    <h1>Välkommen till kramkalas!</h1>
    <h3>Här är alla välkomna!</h3>
    <h5>{{ mountains }}</h5>
  </div>
</template>

<script>
// export default {
//   async fetch() {
//     const api = "api/v1/people";
//     this.mountains = await this.$axios.$get(api);
//   },
//   data() {
//     return {
//       mountains: {},
//     };
//   },
// };

export default {
  async asyncData({ $axios }) {
    const result = await $axios.$get("https://api.nuxtjs.dev/mountains/1");
    console.log(result);
    return { result };
  },
};
</script>
