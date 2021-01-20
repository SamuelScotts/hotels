<template>
  <v-main>
      <v-row>
        <v-col>
          <v-card flat>
            <v-card-title>
                <v-spacer></v-spacer>
                  <h1>Explore</h1>
                <v-spacer></v-spacer>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    <v-divider></v-divider>
    <v-container>

      <!-- INPUT FIELDS -->
      <v-row class="mt-1">
        <v-col>
          <v-text-field class="mb-n6" color="#EF5350" outlined label="Destination" prepend-inner-icon="mdi-map-marker"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-menu v-model="menu1" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field class="mb-n6"  color="#EF5350" outlined label="Trip Begins" prepend-inner-icon="mdi-calendar-month" readonly v-bind="attrs" v-on="on"></v-text-field>
            </template>
            <v-date-picker no-title color="#EF5350" @input="menu1 = false"></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field class="mb-n6"  color="#EF5350" outlined label="Trip Ends" prepend-inner-icon="mdi-calendar-month" readonly v-bind="attrs" v-on="on"></v-text-field>
            </template>
            <v-date-picker no-title color="#EF5350" @input="menu2 = false"></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field class="mb-n4" color="#EF5350" outlined label="No. of Adults" prepend-inner-icon="mdi-account"></v-text-field>
        </v-col>
      </v-row>

      <!-- BUTTONS -->
      <v-row>
          <v-btn width="27.5rem" large class="ml-3" color="#EF5350" dark>Search</v-btn>
          <v-btn class="ml-4" large outlined color="#EF5350"><v-icon large>mdi-map-marker</v-icon></v-btn>
      </v-row>

      <!-- TOP HOTELS TITLE -->
      <v-row>
        <h2 class="mt-8 ml-3">Top Hotels</h2>
        <v-spacer></v-spacer>
        <span class="mt-10 mr-4"><router-link to="/top" style="text-decoration: none;"><v-btn small text>View All</v-btn></router-link></span>
      </v-row>

      <!-- TOP HOTELS CARDS -->
      <v-row>
        <v-card v-for="(hotel, index) in hotels.slice(0,4)" :key="index" width="16rem" class="ml-3 mt-5 pa-2">
          <v-img height="150" src="../assets/hotel.jpg"></v-img>
          <v-card-title>{{ hotel.name }}</v-card-title>
          <v-card-text class="mt-n4">
            Location: {{ hotel.location }} <br/>
            Rating: {{ hotel.rating }}
          </v-card-text>
          <v-card-actions class="mt-n12">
            <v-spacer></v-spacer>
            <router-link to="/hotel" style="text-decoration: none;"><v-btn @click="storeIndex(index)" small outlined color="#EF5350">View</v-btn></router-link>
          </v-card-actions>
        </v-card>
      </v-row>

    </v-container>
    <FooterBar/>
  </v-main>
</template>

<script>
//import firebase from 'firebase';
//import db from '../firestore'
import FooterBar from '../components/FooterBar'

export default {
  name: 'Explore',
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
    hotels(){
      return this.$store.state.topHotels
    }
  }
/*   mounted(){
    db.collection("hotels").where("rating", "==", 4)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            this.topHotels.push(doc.Data())
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  } */
}
</script>
