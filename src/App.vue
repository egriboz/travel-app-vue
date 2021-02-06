<template>
  <div id="app">
    <TheNavigation />
    <!-- :key="$route.path" | TheNavigation.vue for destination object | > Network file name 01.js to name.js -->
    <!-- <transition name="slide" mode="out-in"> -->
    <!-- <transition name="moveUp"> -->
    <div class="wrapper">
      <transition name="fade" mode="out-in">
        <router-view :key="$route.path" />
      </transition>
    </div>
  </div>
</template>
<script>
import TheNavigation from "@/components/TheNavigation";
export default {
  components: {
    TheNavigation
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.wrapper {
  position: relative;
  max-width: 80%;
  left: 50%;
  transform: translate(-50%, 0);
}
/* Transition : mode="out-in" */
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.8s, transform 0.4s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
/* Transition moveUp custom */

.moveUp-enter-active {
  animation: fadeIn 1sn ease-in;
}
@keyfranes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.moveUp-leave-active {
  animation: moveUp 0.3sn ease-in;
}
@keyfranes moveUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
}
/* Transition : mode="fade" */
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-active {
  transition: opacity 0.5s ease-in;
}
/* 1-fade-enter-active fade-enter-to */
.form .input {
  border: 1px solid #42b983;
  padding: 10px;
  margin-bottom: 20px;
}
.form .btn {
  background-color: #42b983;
  color: white;
  padding: 10px;
}
</style>
