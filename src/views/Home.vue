<template>
  <div class="home">
    <div class="destinations">
      <div v-for="destination in destinations" :key="destination.name">
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug }
          }"
        >
          <h2>{{ destination.name }}</h2>
        </router-link>
        <!-- <router-link :to="destination.name">
          <h2>{{ destination.name }}</h2>
        </router-link>-->
        <figure>
          <router-link
            :to="{
              name: 'DestinationDetails',
              params: { slug: destination.slug }
            }"
          >
            <img
              :src="require(`@/assets/${destination.image}`)"
              :alt="destination.name"
            />
          </router-link>
          <!-- <router-link :to="destination.name">
            <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name" />
          </router-link>-->
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js";
export default {
  name: "home",
  components: {},
  data() {
    return {
      destinations: store.destinations
    };
  }
};
</script>
