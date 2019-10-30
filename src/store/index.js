import Vue from 'vue'
import Vuex from 'vuex'

import cats from '@/data/cats'
import dogs from '@/data/dogs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cats,
    dogs,
    pets: [...cats, ...dogs]
  },
  mutations: {
    appendPet (state, { pet, species }) {
      state[species].push(pet)
      state.pets = [...cats, ...dogs]
    }
  },
  actions: {
    addPet ({ commit }, payload) {
      commit('appendPet', payload)
    }
  },
  getters: {
    animalsCount (state) {
      return state.cats.length + state.dogs.length
    },
    getAllCats (state) {
      return state.pets.filter((pets) => {
        return pets.species ? pets.species.indexOf('cat') !== -1 : false
      })
    }
  },
  modules: {
  }
})
