<template>
  <div>
      <v-row>
        <v-col>
          <h1 class="text-center">Explore</h1>
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
          <v-text-field class="mb-n6" color="#EF5350"  outlined label="Outbound Date" prepend-inner-icon="mdi-calendar-month"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field class="mb-n6" color="#EF5350"  outlined label="Return Date" prepend-inner-icon="mdi-calendar-month"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field class="mb-n4" color="#EF5350" outlined label="No. of Adults" prepend-inner-icon="mdi-map-marker"></v-text-field>
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
        <span class="mt-11 mr-4">View All</span>
      </v-row>

      <!-- TOP HOTELS CARDS -->
      <v-row>
        <v-card class="ml-3 mt-5 pa-2">
          <v-card-title>Hotel 1</v-card-title>
          <v-card-text>This is hotel 1.</v-card-text>
        </v-card>
        <v-card class="ml-3 mt-5 pa-2">
          <v-card-title>Hotel 2</v-card-title>
          <v-card-text>This is hotel 2.</v-card-text>
        </v-card>
      </v-row>

    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    //
  }
}
</script>
