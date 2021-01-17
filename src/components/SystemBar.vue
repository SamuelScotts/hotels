<template>
  <div>
    <v-system-bar color="#FFFFFF"> 
        <v-icon class="ml-1 mr-1">mdi-signal-cellular-outline</v-icon>
        <p class="mt-4 mr-2">False</p>
        <v-icon>mdi-wifi-strength-4</v-icon>
        <v-spacer></v-spacer>
        <span class="text-center">12:30 AM</span>
        <span class="ml-2">100%</span>
        <v-icon class="ml-1">mdi-battery</v-icon>
    </v-system-bar>
  </div>
</template>

<script>

export default {
  name: 'SystemBar',
  components: {
    //
  }
}
</script>
