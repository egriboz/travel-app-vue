<template>
  <div>
    <GoBack />
    <section class="destination">
      <h1
        v-on:click="
          say(
            'name: ' +
              destination.name +
              ' | slug: ' +
              destination.slug +
              ' | id: ' +
              destination.id
          )
        "
      >
        {{ destination.name }}
      </h1>
      <div class="destination-details">
        <img
          :src="require(`@/assets/${destination.image}`)"
          :alt="destination.name"
        />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="experiences">
      <h2>Top experiences in {{ destination.name }}</h2>
      <div class="cards" id="experience">
        <div
          class="card"
          v-for="experience in destination.experiences"
          :key="experience.slug"
        >
          <!-- ExperienceDetails components set (router-link) -->
          <router-link
            :to="{
              name: 'experienceDetails',
              params: { experienceSlug: experience.slug },
              hash: '#experience'
            }"
          >
            <img
              :src="require(`@/assets/${experience.image}`)"
              :alt="experience.name"
            />
            <span class="card__text">{{ experience.name }}</span>
          </router-link>
          <!-- -->
        </div>
      </div>
      <!-- ExperienceDetails components set -->
      <router-view :key="$route.path" />
      <!-- ExperienceDetails components set (router-view) -->
    </section>
  </div>
</template>
<script>
import store from "@/store.js";
import GoBack from "@/components/GoBack";
export default {
  components: {
    GoBack
  },
  data() {
    return {
      /*
        This definition to props...
        slug: this.$route.params.slug
      */
    };
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.slug === this.slug
      );
    }
  },
  methods: {
    say: function(message) {
      alert(message);
    }
  }
};
</script>

<style lang="scss" scoped>
.experiences {
  .cards {
    display: flex;
    justify-content: space-between;
    .card {
      margin: 0 15px;
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border: 2px solid #ffffff;
        padding: 2px;
        &.custom-active-link {
          border: 2px solid #42b983;
        }
      }
      img {
        width: 100%;
      }
      span {
        display: block;
      }
      &__text {
        position: absolute;
        z-index: 2;
        color: #fff;
        font-size: 1.4rem;
      }
    }
  }
}
</style>
