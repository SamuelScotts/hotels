<template>
  <v-content>
      <v-row>
        <v-col>
          <v-card flat>
            <v-card-title>
              <v-btn id="no-background-hover" @click="$router.go(-1)" text class="mr-n16"><v-icon large>mdi-chevron-left</v-icon></v-btn>
                <v-spacer></v-spacer>
                  <h1>Top Hotels</h1>
                <v-spacer></v-spacer>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    <v-divider></v-divider>
    <v-container>

      <!-- LOCATION / FILTER -->

      <v-row>
        <v-col>
          <v-card flat class="mb-n2">
            <v-card-actions>
              <v-text-field class="mb-n8 ml-n6" label="Location" flat solo prepend-inner-icon="mdi-map-marker" color="#EF5350"></v-text-field>
                <v-spacer></v-spacer>
              <v-btn text small color="#EF5350"><v-icon>mdi-filter</v-icon>Filter</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- TOP HOTELS CARDS -->
      <v-row>
        <router-link to="/hotel" style="text-decoration: none;">
          <v-card v-for="(topHotel, index) in topHotels" :key="index" elevation="6" width="34rem" class="ml-3 mt-5">
            <span @click="storeIndex(index)">
              <v-img height="150" src="../assets/hotel.jpg">
                <v-card-title style="color: white;">{{ topHotel.name }}</v-card-title>
                <v-card-text class="mt-n4" style="color: white;">
                  {{ topHotel.location }} <br/>
                  {{ topHotel.rating }} stars <br/>
                  £{{topHotel.price}} per night
                </v-card-text>
              </v-img>
              <v-card-actions>
                <v-btn text color="#EF5350" dark><v-icon>mdi-bookmark</v-icon>Save</v-btn>
                  <v-spacer></v-spacer>
                <v-btn color="#ED5350" dark outlined>Book Now</v-btn>
              </v-card-actions>
            </span>
          </v-card>
        </router-link>
      </v-row>
    </v-container>
    <FooterBar/>
  </v-content>
</template>

<script>
//import firebase from 'firebase';
//import db from '../firestore'
import FooterBar from '../components/FooterBar'

export default {
  name: 'TopHotels',
  components: {
    FooterBar,
  },
  data: () => ({
    menu1: false,
    menu2: false,
  }),
  methods:{
    storeIndex(index){
      this.$store.dispatch('setIndex', index);
    }
  },
  computed:{
    topHotels(){
      return this.$store.state.topHotels
    }
  }
}
</script>

<style>
#no-background-hover::before {
   background-color: transparent !important;
}
</style>
