<template>
  <v-content>
      <v-row>
        <v-col>
          <h1 class="text-center">Top Hotels</h1>
        </v-col>
      </v-row>
    <v-divider></v-divider>
    <v-container>

      <!-- TOP HOTELS CARDS -->
      <v-row>
        <v-card v-for="(topHotel, index) in topHotels" :key="index" width="16rem" class="ml-3 mt-5 pa-2">
          <v-img height="150" src="../assets/hotel.jpg"></v-img>
          <v-card-title>{{ topHotel.name }}</v-card-title>
          <v-card-text class="mt-n4">
            Location: {{ topHotel.location }} <br/>
            Rating: {{ topHotel.rating }}
          </v-card-text>
        </v-card>
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
    topHotels:[
      {
        name: "Malmasion",
        location: "Aberdeen",
        rating: 4.7
      },
      {
        name: "Hilton",
        location: "Aberdeen",
        rating: 4.6
      },
      {
        name: "Jurys Inn",
        location: "Aberdeen",
        rating: 4.1
      },
      {
        name: "Travel Lodge",
        location: "Dundee",
        rating: 3.9
      },
      {
        name: "Malmasion",
        location: "Dundee",
        rating: 4.6
      },
      {
        name: "Station Hotel",
        location: "Perth",
        rating: 3.1
      },
    ],
  }),
}
</script>
