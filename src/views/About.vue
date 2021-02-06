<template>
  <div class="about">
    <h1>{{ about.name }}</h1>
    <p>
      {{ about.description }}
    </p>
    <p>
      <img :src="require(`@/assets/${about.image}`)" :alt="about.name" />
    </p>
  </div>
</template>
<script>
import store from "@/store.js";
export default {
  data() {
    return {
      about: store.about
    };
  }
};
</script>
