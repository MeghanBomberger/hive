<template>
  <div id="app">
    <Header/>
    <NavBar/>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
  import Header from "@/components/header"
  import NavBar from "@/components/navbar"

  export default {
    name: 'App',
    components: {
      Header,
      NavBar
    }
  }
</script>
