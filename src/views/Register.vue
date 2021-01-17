<template>
  <div>

    <!-- HEADER -->
    <v-row>
        <v-col>
            <h1 class="text-center">Register</h1>
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
            <v-text-field v-model="name" solo class="mb-n8" color="#EF5350" outlined label="Name" prepend-inner-icon="mdi-account"></v-text-field>
            <v-text-field v-model="email" solo class="mt-4 mb-n6" color="#EF5350" outlined label="Email" prepend-inner-icon="mdi-email"></v-text-field>
            <v-text-field v-model="password" solo class="mt-2" color="#EF5350" outlined :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'" label="Password" prepend-inner-icon="mdi-lock" @click:append="show1 = !show1"></v-text-field>
            <v-checkbox class="mt-n4" label="I hereby agreed to the terms and conditions"></v-checkbox>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <p  class="mt-n2">Already got an account. <router-link to="/login">Login</router-link>  here.</p>
      </v-row>

      <v-row align="center" justify="center">
        <v-btn color="#EF5450" dark class="pl-16 pr-16 mt-4 mb-6" @click="register()">Register</v-btn>
      </v-row>


    </v-container>
  </div>
</template>

<script>
import firebase from 'firebase'
import db from '../firestore'

export default {
  name: 'Register',
  components: {
    //
  },
  data() {
    return {
      show1: false,
      name: '',
      email: '',
      password: '',
      successMessage: '',
      errorMessage: ''
    }
  },
  methods:{
    register(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            firebase.auth().currentUser.updateProfile({
                //displayName: this.userData.username
            }).then(() => {
                let user = firebase.auth().currentUser
                db.collection('users').doc(user.uid).set({
                  name: this.name,
                  email: this.email,
                }).then(() => {
                  this.$router.replace('explore');
                }).catch(err => {
                  this.errorMessage = err.message;
                });
            }).catch(err => {
                this.errorMessage = err.message;
            });
          }).catch(err => {
            this.errorMessage = err.message
          });
    }, 
  },
}
</script>