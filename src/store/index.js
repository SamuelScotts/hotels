import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    index: null,
    topHotels:[
      {
        name: "Malcassa",
        location: "Abefoni",
        rating: 4,
        price: 239,
        amenities:{
          wifi: true,
          food: true,
          pets: false,
          bar: true,
          pool: false,
          more: false
        }
      },
      {
        name: "Flaton",
        location: "Abefoni",
        rating: 4,
        price: 210,
        amenities:{
          wifi: true,
          food: true,
          pets: true,
          bar: true,
          pool: true,
          more: false
        }
      },
      {
        name: "Judenelo",
        location: "Abefoni",
        rating: 4,
        price: 200,
        amenities:{
          wifi: true,
          food: true,
          pets: false,
          bar: true,
          pool: true,
          more: false
        }
      },
      {
        name: "Tredura",
        location: "Bagessa",
        rating: 3,
        price: 160,
        amenities:{
          wifi: true,
          food: false,
          pets: true,
          bar: true,
          pool: false,
          more: false
        }
      },
      {
        name: "Malcassa",
        location: "Bagessa",
        rating: 4,
        price: 175,
        amenities:{
          wifi: true,
          food: true,
          pets: false,
          bar: true,
          pool: true,
          more: false
        }
      },
      {
        name: "Sarja Shemol",
        location: "Caratow",
        rating: 3,
        price: 149,
        amenities:{
          wifi: true,
          food: false,
          pets: false,
          bar: false,
          pool: false,
          more: false
        }
      },
    ],
    reviews:[
      {
        name: "John Barrow",
        rating: 5,
        date: "Jan 2021",
        text: "Awesome hotel.  Stayed for a week, and loved it.  Good food, fun atmosphere, and friendly staff!"
      },
      {
        name: "Sara Longs",
        rating: 5,
        date: "Jan 2021",
        text: "Relaxing, chilled, refreshed.  Brilliant weekend! Clean, simple and modern hotel.  Would return again."
      },
      {
        name: "Karen Chambers",
        rating: 4,
        date: "Dec 2020",
        text: "Generally, a great hotel.  This time, just wasn't up to standard hence the one star down.  Needs a good scrub."
      },
      {
        name: "Grant Fathers",
        rating: 3,
        date: "Dec 2020",
        text: "Didn't really enjoy my time here.  Place was clean and fresh, but noisy and warm.  Hard to sleep!"
      },
      {
        name: "Aaron Quinn",
        rating: 5,
        date: "Nov 2020",
        text: "I'm coming back, I'll tell you that.  Really enjoyed the hotel and the food blew me away.  Cheap beer too!"
      },
      {
        name: "Jodie Spacer",
        rating: 5,
        date: "Oct 2020",
        text: "Treated like we were family.  Was a great hotel, one I would love to revisit. Cost effective and great food!"
      },
    ],
  },
  mutations: {
    setIndex(state, index) {
      state.index = index;
    },
  },
  actions: {
    setIndex({ commit }, index){
      commit('setIndex', index)
    },
  },
  modules: {
    //
  }
})
