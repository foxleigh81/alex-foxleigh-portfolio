<template>
  <div class="status" v-html=displayStatus() />
</template>

<script>
// Import dependencies
import moment from 'moment'

export default {
  name: 'Status',
  props: {
    status: String,
    availableOn: String
  },
  methods: {
    // Converts the 'availableIn' value to a friendly string
    convertDate: function () {
      return moment(this.availableOn).fromNow()
    },
    // Returns the correct status message in HTML format
    // TODO: For now this is a placeholder and only shows an unavailable status
    displayStatus: function () {
      if (this.status === 'unavailable') {
        return `
          <p>Unfortunately I am not currently available.</p>
          <p class="larger">I should be available again <strong>${this.convertDate()}</strong></p>

        `
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.status
  width: 100%
  padding: 1rem
  background-color: #424242
  text-align: center
  @media screen and (min-width: 800px)
    position: fixed
    bottom: 0
    left: 0
    z-index: 10
    text-align: left
  p
    font-size: 1.8rem
    margin: 0;
    padding: 0;
    &.larger {
      font-size: 2.5rem;
    }
</style>
