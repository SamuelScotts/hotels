<template>
  <div>

    <!-- HEADER -->
    <v-row>
        <v-col>
            <h1 class="text-center">Login</h1>
        </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-container>
      <!-- IMAGE -->
      <v-row class="mt-1">
        <v-col>
          <v-img contain height="14rem" src="../assets/login-logo.png"></v-img>
        </v-col>
      </v-row>

      <!-- INPUT FIELDS -->
      <v-row class="mt-1">
        <v-col>
          <h2>Welcome Back!</h2>
          <v-text-field v-model="email" solo class="mt-4 mb-n6" color="#EF5350" outlined label="Email" prepend-inner-icon="mdi-email"></v-text-field>
          <v-text-field v-model="password" solo class="mt-2" color="#EF5350" outlined :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'" label="Password" prepend-inner-icon="mdi-lock" @click:append="show1 = !show1"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-btn small text class="mt-n6 mb-6">Forgot Password?</v-btn>
      </v-row>

      <v-row align="center" justify="center">
        <p>Don't have an account? <router-link to="/register">Register</router-link> here.</p>
      </v-row>

      <v-row align="center" justify="center">
        <v-btn color="#EF5450" dark class="pl-16 pr-16 mt-6 mb-6" @click="login()">Login</v-btn>
      </v-row>
      
    </v-container>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Login',
  components: {
    //
  },
  data() {
    return {
      show1: false,
      email: null,
      password: null,
    }
  },
  methods:{
    login(){
         firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(user => {
               user;
               this.$router.replace('/');
            })
            .catch(err => {
               this.errorMessage = err.message
            }); 
      }
  },
}
</script>