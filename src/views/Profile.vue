<template>
  <div>
      <v-row>
        <v-col>
          <v-card flat>
            <v-card-title>
              <v-btn id="no-background-hover" @click="$router.go(-1)" text class="mr-n16"><v-icon large>mdi-chevron-left</v-icon></v-btn>
                <v-spacer></v-spacer>
                  <h1>Profile</h1>
                <v-spacer></v-spacer>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    <v-divider></v-divider>
    <v-container>
        <!-- USER IMAGE / NAME -->
        <v-row>
            <v-col>
                <v-row>
                    <v-avatar class="mt-6 ml-6 mb-4" color="#EF5350" size="90">
                        <v-img src="../assets/avatar.png" alt="Avatar"></v-img>
                    </v-avatar>
                    <p class="mt-14 ml-4">{{ name }}</p>
                </v-row>
            </v-col>
        </v-row>

        <!-- EXPANSION PANELS -->
        <v-row>
            <v-expansion-panels flat>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        My Account
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        To be filled in.
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header>
                        Payments & Refunds
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        To be filled in.
                    </v-expansion-panel-content>
                </v-expansion-panel>


                <v-expansion-panel>
                    <v-expansion-panel-header>
                        Past Bookings
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        To be filled in.
                    </v-expansion-panel-content>
                </v-expansion-panel>


                <v-expansion-panel>
                    <v-expansion-panel-header>
                        Help & Support
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        To be filled in.
                    </v-expansion-panel-content>
                </v-expansion-panel>


                <v-expansion-panel>
                    <v-expansion-panel-header>
                        Privacy Policy
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        To be filled in.
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-col>
                <v-btn color="#EF5350" dark block @click="logout()">Logout</v-btn>
                </v-col>

            </v-expansion-panels>
        </v-row>

    </v-container>
    <FooterBar/>
  </div>
</template>

<script>
import firebase from 'firebase';
import db from '../firestore'
import FooterBar from '../components/FooterBar'

export default {
  name: 'Profile',
  components: {
    FooterBar,
  },
  data: () => ({
      name: '',
  }),
  methods:{
    logout(){
        firebase.auth().signOut().then(() => {
            this.$router.replace('login');
        });
    }
  },
  mounted: function(){
    let user = firebase.auth().currentUser;

    let docRef = db.collection("users").doc(user.uid);

    docRef.get().then((doc) => {
        if (doc.exists) {
            this.name = doc.data().name
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  }
}
</script>
