<template>
  <nav id="nav">
    <!-- <p class="logo">TRAVELGO v2</p> -->
    <router-link to="/" active-class="active" exact>
      <span class="logo">TRAVELGO v2</span>
    </router-link>
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/brazil">Brazil</router-link>
    <router-link to="/panama">Panama</router-link>
    <router-link to="/hawaii">Hawaii</router-link>
    <router-link to="/jamaica">jamaica</router-link>-->
    <ul class="nav-links">
      <!-- <li class="links">
        <router-link to="/" active-class="active" exact>Home</router-link>
      </li>-->
      <li class="links">
        <router-link to="/about" active-class="active" exact>About</router-link>
      </li>
      <li
        class="links"
        v-for="destination in destinations"
        :key="destination.name"
      >
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug }
          }"
          active-class="active"
          >{{ destination.name }}</router-link
        >
      </li>
    </ul>
    <router-link to="/user">Dashboard</router-link>
  </nav>
</template>
<script>
import store from "@/store";
export default {
  data() {
    return {
      destinations: store.destinations
    };
  }
};
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
}
#nav {
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 1;
  background: lightgray;
  padding: 0 30px;
  border-bottom: 1px solid #666;
}
#nav > a,
#nav > a .logo {
  font-weight: bold;
  /*color: red !important;*/
  padding: 15px 10px;
  text-decoration: none;
}
#nav ul a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}
.nav-links {
  display: flex;
  justify-content: center;
  list-style-type: none;
}
/* default active class name */
/* #nav a.router-link-exact-active {
  color: #42b983;
} */
#nav a.active,
#nav a.custom-active-link.active {
  color: #42b983;
}
#nav a.custom-active-link.active .logo {
  color: black;
}
</style>
