<template>
  <v-main>
    <!-- IMAGE SECTION -->
        <v-card style="border-radius:0px;">
            <v-img height="200" src="../assets/hotel.jpg">
                <v-card-title>
                    <v-btn id="no-background-hover" @click="$router.go(-1)" class="mt-6 ml-n4" text dark>
                        <v-icon large>mdi-chevron-left</v-icon>
                    </v-btn>
                </v-card-title>
            </v-img>
        </v-card>
    <v-container>

        <!-- NAME / LOCATION / DESCRIPTION -->
        <v-card flat>
            <v-card-title>{{ hotelInfo[passedIndex].name }}</v-card-title>
            <v-card-subtitle>{{ hotelInfo[passedIndex].location }} |<v-btn class="ml-n1" x-small text>Show on Map</v-btn></v-card-subtitle>
            <v-card-text class="mt-n2">This is information about the hotel. In this section you would describe the hotel and 
                its surroundings.  You would also discribe its proximity to other places within the area that it is situated,
                while also going on to talk about its amenities.
            </v-card-text>  
        </v-card>

        <!-- CONTACT INFORMATION -->
        <v-card flat>
            <v-card-actions class="mt-n2">
                <v-icon color="#EF5350" class="mr-2">mdi-email</v-icon> info@hotel.com
                <v-spacer></v-spacer>
                <v-icon color="#EF5350" class="mr-2">mdi-phone</v-icon> +44-1356456723
            </v-card-actions>
        </v-card>

        <!-- PRICE / RATINGS / REVIEWS -->
        <v-card flat>
            <v-card-actions class="mt-n2">
                <v-card flat>
                    <v-card-subtitle>Price</v-card-subtitle>
                    <v-card-subtitle class="mt-n8 mb-n6">£{{ hotelInfo[passedIndex].price }}</v-card-subtitle>
                </v-card>
                <v-spacer></v-spacer>
                <v-card flat>
                    <v-card-subtitle class="ml-2">Rating</v-card-subtitle>
                    <v-card-subtitle class="mt-n8 mb-n6">
                        <v-rating v-model="hotelInfo[passedIndex].rating" background-color="#EF5350" color="#EF5350" x-small></v-rating>
                    </v-card-subtitle>
                </v-card>
                <v-spacer></v-spacer>
                <v-card flat><router-link to="/review" style="text-decoration: none;">
                    <v-card-subtitle>Reviews</v-card-subtitle>
                    <v-card-subtitle class="mt-n8 mb-n6 ml-4">
                        72
                    </v-card-subtitle>
                    </router-link>
                </v-card>
            </v-card-actions>
        </v-card>

        <!-- AMENITIES SECTION -->
        <v-card flat>
            <v-card-subtitle class="mb-n3 ml-n2">
                <strong>Amenities</strong>
            </v-card-subtitle>
            <v-card-actions>
                <v-card flat>
                    <v-btn v-if="hotelInfo[passedIndex].amenities.wifi"><v-icon color="#EF5350">mdi-wifi</v-icon></v-btn>
                    <v-btn v-else disabled><v-icon color="#EF5350">mdi-wifi</v-icon></v-btn>
                    <v-card-subtitle class="mt-n2 text-center">Wifi</v-card-subtitle>
                </v-card>
                <v-spacer></v-spacer>
                <v-card flat>
                    <v-btn v-if="hotelInfo[passedIndex].amenities.food"><v-icon color="#EF5350">mdi-coffee</v-icon></v-btn>
                    <v-btn v-else disabled><v-icon color="#EF5350">mdi-coffee</v-icon></v-btn>
                    <v-card-subtitle class="mt-n2 text-center">Food</v-card-subtitle>
                </v-card>
                <v-spacer></v-spacer>
                <v-card flat>
                    <v-btn v-if="hotelInfo[passedIndex].amenities.pets"><v-icon color="#EF5350">mdi-paw</v-icon></v-btn>
                    <v-btn v-else disabled><v-icon color="#EF5350">mdi-paw</v-icon></v-btn>
                    <v-card-subtitle class="mt-n2 text-center">Pets</v-card-subtitle>
                </v-card>
                <v-spacer></v-spacer>
                <v-card flat>
                    <v-btn v-if="hotelInfo[passedIndex].amenities.bar"><v-icon color="#EF5350">mdi-glass-cocktail</v-icon></v-btn>
                    <v-btn v-else disabled><v-icon color="#EF5350">mdi-glass-cocktail</v-icon></v-btn>
                    <v-card-subtitle class="mt-n2 text-center">Bar</v-card-subtitle>
                </v-card>
                <v-spacer></v-spacer>
                <v-card flat>
                    <v-btn v-if="hotelInfo[passedIndex].amenities.pool"><v-icon color="#EF5350">mdi-swim</v-icon></v-btn>
                    <v-btn v-else disabled><v-icon color="#EF5350">mdi-swim</v-icon></v-btn>
                    <v-card-subtitle class="mt-n2 text-center">Pool</v-card-subtitle>
                </v-card>
                <v-spacer></v-spacer>
                <v-card flat>
                    <v-btn v-if="hotelInfo[passedIndex].amenities.more"><v-icon color="#EF5350">mdi-dots-horizontal</v-icon></v-btn>
                    <v-btn v-else disabled><v-icon color="#EF5350">mdi-dots-horizontal</v-icon></v-btn>
                    <v-card-subtitle class="mt-n2 text-center">More</v-card-subtitle>
                </v-card>
            </v-card-actions>
        </v-card>

         <!-- BOOK / SAVE BUTTONS -->
        <v-card flat>
            <v-card-actions>
                <router-link to="/booking" style="text-decoration: none;"><v-btn color="#EF5350" width="28rem" dark>Book Now</v-btn></router-link>
                <v-spacer></v-spacer>
                <v-btn color="#EF5350" dark outlined><v-icon>mdi-bookmark</v-icon></v-btn>
            </v-card-actions>
        </v-card>

    </v-container>
    <FooterBar/>
  </v-main>
</template>

<script>
//import firebase from 'firebase';
//import db from '../firestore'
import FooterBar from '../components/FooterBar'

export default {
  name: 'Hotel',
  components: {
    FooterBar,
  },
  data: () => ({
      //
  }),
  computed:{
      passedIndex(){
        return this.$store.state.index
      },
      hotelInfo(){
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
