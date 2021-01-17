<template>
  <v-bottom-navigation fixed color="#EF5350">
    <v-btn class="mr-14 mt-2" plain>
      <span>Explore</span>

      <v-icon>mdi-compass</v-icon>
    </v-btn>

    <v-btn class="ml-7 mr-7 mt-2" plain>
      <span>Wish List</span>

      <v-icon>mdi-bookmark</v-icon>
    </v-btn>

    <v-btn class ="ml-14 mt-2" plain>
      <span>Profile</span>

      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>

export default {
  name: 'FooterBar',
  components: {
    //
  },
}
</script>