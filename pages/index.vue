<template>
  <!-- <Test /> -->
  <div>
    <h1>Välkommen till kramkalas!</h1>
    <h3>Här är alla välkomna!</h3>
    <h5>{{ mountains }}</h5>
  </div>
</template>

<script>
// export default {
//   name: "IndexPage",
// };

export default {
  async asyncData({ $axios }) {
    let mountains = [];
    const { result } = await $axios.$get("/api/v1/people/");
    console.log(result);
    mountains = result;
    return { mountains };
  },
};
</script>
