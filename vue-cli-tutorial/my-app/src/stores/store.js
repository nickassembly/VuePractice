import Vue from "vue";
import Vuex from "vuex";

import profiles from './modules/profiles';
import popup from './modules/popup';

Vue.use(Vuex);

export const store = new Vuex.Store({
   modules: {
      profiles,
      popup
   }
})
