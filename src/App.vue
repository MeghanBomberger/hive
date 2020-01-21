<template>
  <div
    id="app"
    class="app"
  >
    <Header/>
    <main>
      <router-view />
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import './variables.scss';

* {
  margin: 0;
  box-sizing: border-box;
}

body {
  background: linear-gradient(rgba(30, 30, 30, 0.95), rgba(30, 30, 30, 0.85)), url('./assets/hexstairs.jpeg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
}

.app {
  @include centered;
  flex-direction: column;
  max-width: 100vw;
  min-height: 100vh;
}

@media screen and (max-width: 900px) {
  .app {
    padding-bottom: 20vh;
  }
}
</style>