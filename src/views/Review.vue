<template>
  <v-content>
      <v-row>
        <v-col>
          <v-card flat>
            <v-card-title>
              <v-btn id="no-background-hover" @click="$router.go(-1)" text class="mr-n16"><v-icon large>mdi-chevron-left</v-icon></v-btn>
                <v-spacer></v-spacer>
                  <h1>Reviews</h1>
                <v-spacer></v-spacer>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    <v-divider></v-divider>
    <v-container>

        <!-- WRITE REVIEW -->
        <v-card flat class="mt-n2">
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text>Write a review<v-icon>mdi-chevron-right</v-icon></v-btn>
            </v-card-actions>
        </v-card>


        <!-- EACH REVIEW -->
        <v-card flat v-for="(review, index) in reviews" :key="index">
            <v-card-title>
                <v-avatar class="mr-4" color="#EF5350" size="25"></v-avatar>{{ review.name }}
                <v-spacer></v-spacer>
                <v-rating v-model="review.rating" background-color="#EF5350" color="#EF5350" small></v-rating>
            </v-card-title>
            <v-card-subtitle class="ml-10 mb-n2 mt-n6" style="font-size: 12px;">
                {{ review.date }}
            </v-card-subtitle>
            <v-card-text>
                {{ review.text }}
            </v-card-text>
        </v-card>


    </v-container>
    <FooterBar/>
  </v-content>
</template>

<script>
//import firebase from 'firebase';
//import db from '../firestore'
import FooterBar from '../components/FooterBar'

export default {
  name: 'Review',
  components: {
    FooterBar,
  },
  data: () => ({
      
  }),
    computed:{
    reviews(){
      return this.$store.state.reviews
    }
  }
}
</script>
