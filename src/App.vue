<template>
  <div
    id="app"
    class="app"
  >
    <!-- <Header/> -->
    <!-- <NavBar/> -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
  // import Header from "@/components/header"
  // import NavBar from "@/components/navbar"

  export default {
    name: 'App',
    // components: {
    //   Header,
    //   NavBar
    // }
  }
</script>

<style lang="scss">
@import './variables.scss';

* {
  margin: 0;
  box-sizing: border-box;
}

.app {
  @include centered;
  max-width: 100vw;
  min-height: 100vh;
  background: linear-gradient(rgba(30, 30, 30, 0.95), rgba(30, 30, 30, 0.85)), url('./assets/hexstairs.jpeg');
  background-size: cover;
}
</style>