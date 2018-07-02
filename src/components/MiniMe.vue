<template>
  <div class="mini-me">
    <img src="../assets/alex-at-desk.svg" alt="An illustration of Alex, sat at a desk"/>
  </div>
</template>

<script>

export default {
  name: 'MiniMe'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .mini-me
    position: relative
    text-align: center;
    z-index: 100
    @media screen and (min-width: 800px)
      float: right
    img
      width: 60vw
      margin: 2vw
      @media screen and (min-width: 800px)
        width: 32vw
</style>
