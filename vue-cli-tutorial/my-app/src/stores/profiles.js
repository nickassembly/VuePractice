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

export const store = new Vuex.Store({
    state: {
        profiles: []
    },
    getters: {
        GET_PROFILES: state => {
            return state.profiles;
        }
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
})
