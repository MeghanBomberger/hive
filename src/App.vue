<template>
  <div
    id="app"
    class="app"
  >
    <Header/>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from '@/components/header'

export default {
  name: 'App',
  components: {
    Header
  }
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
  flex-direction: column;
  max-width: 100vw;
  min-height: 100vh;
  background: linear-gradient(rgba(30, 30, 30, 0.95), rgba(30, 30, 30, 0.85)), url('./assets/hexstairs.jpeg');
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
}
</style>