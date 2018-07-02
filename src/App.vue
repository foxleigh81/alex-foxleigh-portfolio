<template>
  <div id="app">
    <MiniMe />
    <Greeting />
    <Status status="unavailable" availableOn="2019-01-21" />
  </div>
</template>

<script>

// Import child components
import Greeting from './components/Greeting.vue'
import MiniMe from './components/MiniMe.vue'
import Status from './components/Status.vue'

export default {
  name: 'app',
  components: {
    Greeting,
    MiniMe,
    Status
  }
}
</script>

<style lang="stylus">
@import url("https://use.typekit.net/ocu6iqo.css");

*
  box-sizing: border-box;

body
  padding: 0;
  margin: 0;
  height: 100vh
  width: 100%
  background-color #9B9B9B
  font-family 'azo-sans-web', Helvetica, Arial, sans-serif

#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #fff
</style>
