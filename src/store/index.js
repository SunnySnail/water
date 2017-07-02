import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import * as types from './mutation-types'

import user from './modules/user';
import address from './modules/address';
import framework from './modules/framework'
import groupAccount from './modules/groupAccount'
import shopCart from './modules/shopCart'

import waterApi from '../api/main'


const state = {
}

const mutations = {
}

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules: {
        user,
        address,
        framework,
        groupAccount,
        shopCart,
    },
});
