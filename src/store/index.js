import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topHotels:[
      {
        name: "Malcassa",
        location: "Abefoni",
        rating: 4,
        price: 239
      },
      {
        name: "Flaton",
        location: "Abefoni",
        rating: 4,
        price: 210
      },
      {
        name: "Judges Cottage",
        location: "Abefoni",
        rating: 4,
        price: 200
      },
      {
        name: "Trekking Bothy",
        location: "Bagessa",
        rating: 3,
        price: 160
      },
      {
        name: "Malcassa",
        location: "Bagessa",
        rating: 4,
        price: 175
      },
      {
        name: "Stop Smotel",
        location: "Caratow",
        rating: 3,
        price: 149
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
    //
  },
  actions: {
    //
  },
  modules: {
    //
  }
})
