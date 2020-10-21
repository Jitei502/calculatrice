import Vue from "vue";
import Vuex from "vuex";
import state from './state.js';
import mutations from './mutations.js';
import * as actions from './action.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions,
    modules: {},
    strict: true,
});