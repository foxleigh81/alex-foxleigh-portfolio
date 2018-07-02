<template>
  <div class="greeting">
    <h1>{{ getGreeting() }}</h1>
    <span>I'm Alex, I like to make things</span>
  </div>
</template>

<script>
// Import dependencies
import moment from 'moment'

export default {
  name: 'Greeting',
  methods: {
    // Determines time of day using 'momentjs' and returns the appropriate greeting
    getGreeting: () => {
      let currentHour = moment().hour()

      return (currentHour < 12)
        ? 'Good morning!'
        : (currentHour > 12 && currentHour < 19)
          ? 'Good afternoon!'
          : 'Good evening!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .greeting
    padding: 1rem
    font-family 'azo-sans-uber', sans-serif
    text-align: center
    @media screen and (min-width: 800px)
      text-align: left
    h1
      font-size: 7vw
      text-transform uppercase
      margin: 0

    span
      font-size: 3vw
</style>
