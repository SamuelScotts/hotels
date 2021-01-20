<template>
  <v-main>
      <v-row>
        <v-col>
          <v-card flat>
            <v-card-title>
              <v-btn id="no-background-hover" @click="$router.go(-1)" text class="mr-n16"><v-icon large>mdi-chevron-left</v-icon></v-btn>
                <v-spacer></v-spacer>
                  <h1>Booking</h1>
                <v-spacer></v-spacer>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    <v-divider></v-divider>
    <v-container>

      <!-- BOOKING DETAILS TITLE -->
      <v-row>
        <h2 class="mt-4 ml-3 mb-4">Booking Details</h2>
        <v-spacer></v-spacer>
      </v-row>

      <!-- INPUT FIELDS -->
      <v-row class="mt-1">
        <v-col>
          <v-text-field class="mb-n6" color="#EF5350" outlined label="Name" prepend-inner-icon="mdi-account"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field class="mb-n6" color="#EF5350" outlined label="Contact Number" prepend-inner-icon="mdi-phone"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-menu v-model="menu1" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field class="mb-n6"  color="#EF5350" outlined label="Check In" prepend-inner-icon="mdi-calendar-month" readonly v-bind="attrs" v-on="on"></v-text-field>
            </template>
            <v-date-picker no-title color="#EF5350" @input="menu1 = false"></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field class="mb-n6"  color="#EF5350" outlined label="Check Out" prepend-inner-icon="mdi-calendar-month" readonly v-bind="attrs" v-on="on"></v-text-field>
            </template>
            <v-date-picker no-title color="#EF5350" @input="menu2 = false"></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field class="mb-n6" color="#EF5350" outlined label="People" prepend-inner-icon="mdi-account-group"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field class="mb-n4" color="#EF5350" outlined label="Rooms" prepend-inner-icon="mdi-bed"></v-text-field>
        </v-col>
      </v-row>

      <!-- BUTTONS -->
      <v-row>
          <v-btn width="33.5rem" large class="ml-3" color="#EF5350" dark><strong>Book Now</strong></v-btn>
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
  name: 'Booking',
  components: {
    FooterBar,
  },
  data: () => ({
    menu1: false,
    menu2: false,
  }),
  methods:{
      //
  },
  computed:{
      //
  }
}
</script>
