<template>
  <v-bottom-navigation fixed color="#EF5350">

    <router-link to="/" style="text-decoration: none;">
      <v-btn class="mr-14 mt-2" plain color="#EF5350">
        <span>Explore</span>
        <v-icon>mdi-compass</v-icon>
      </v-btn>
    </router-link> 

    <v-btn class="ml-7 mr-7 mt-2" plain>
      <span>Wish List</span>
      <v-icon>mdi-bookmark</v-icon>
    </v-btn>

    <router-link to="/profile" style="text-decoration: none;">
      <v-btn class ="ml-14 mt-2" plain  color="#EF5350">
        <span>Profile</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </router-link> 

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