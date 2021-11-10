import Vue from "vue";
import Vuex from "vuex";
// state
// state of the module

// getters
// returns some particular data from the store

// mutations
// write data to the store or mutate state

// actions
// any functionality before mutating

Vue.use(Vuex);

export default {
    namespaced: true,
    state: {
        profiles: []
    },
    getters: {
       GET_PROFILE: state => name =>
        state.profiles.filter(profile => profile.firstName == name)[0]
    },
    mutations: {
        SET_PROFILES(state, profiles) {
            state.profiles = profiles;
        },
        ADD_PROFILE(state, profile) {
            state.profiles.push(profile);
        }
    },
    actions: {
        LOAD_PROFILES({commit}, api) {
            api.get("Profile").then((res) => {
                commit("SET_PROFILES", res.data);
            });
        }
    }
}
