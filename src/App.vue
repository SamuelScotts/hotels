<template>
  <v-app>
    <div id="app">
      <SystemBar/>
      <router-view/>
      <!-- <FooterBar/> -->
    </div>
  </v-app>
</template>

<script>
import SystemBar from './components/SystemBar'
//import FooterBar from './components/FooterBar'

export default {
  components: {
    SystemBar,
    //FooterBar,
  }
}
</script>

<style lang="scss">
#app{
  width: 560px;
  font-family: Avenir, Helvetica, Arial, sans-serif;

}

</style>
