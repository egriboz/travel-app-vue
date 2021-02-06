<template>
  <div>
    <h1 v-on:click="say('name: ' + getPath)">Not Found Page</h1>
    <div>
      <h4>"{{ getPath }}" Oppssss!</h4>
      <router-link :to="{ name: 'home' }">got to home</router-link>
    </div>
    <hr />
    <GoBack />
  </div>
</template>
<script>
import GoBack from "@/components/GoBack";
export default {
  data() {
    return {
      getPath: this.$route.path.substr(1)
    };
  },
  components: {
    GoBack
  },
  methods: {
    say: function(message) {
      alert(message);
    }
  }
};
</script>
