/**
 * FileName:   shopCart.js
 * Author:     Fasion Chan
 * @contact:   fasionchan@gmail.com
 * @version:   $Id$
 *
 * Description:
 *
 * Changelog:
 *
 **/

import Vue from 'vue'
import {ShopCart} from '../../lib/shopCart'


export default {
    namespaced: true,

    state: {
        shopCart: new ShopCart(),
        db: null,
        version: null,
    },

    mutations: {
        setShopCart(state, shopCart) {
            state.shopCart = shopCart;
        },

        setDB(state, db) {
            state.db = db;
        },
    },

    actions: {
        init({dispatch, commit, state}) {
            if (state.db) {
                return;
            }

            return dispatch('setup').then(() => {
                return dispatch('reload');
            });
        },

        setup({dispatch, commit}) {
            let db = new Dexie('ShopCart');
            commit('setDB', db);

            return db.version(1).stores({
                record: '++id'
            });
        },

        reload({dispatch, commit, state}) {
            let shopCart = new ShopCart();

            return state.db.record.toArray().then((records) => {
                for (var i=0; i < records.length; i++) {
                    shopCart.push(records[i]);
                }

                commit('setShopCart', shopCart);
            });
        },

        push({dispatch, commit, state}, record) {
            let cachedRecord = state.shopCart.push(record);
            console.log(cachedRecord);
            return state.db.record.put(cachedRecord).catch((e) => {
            });
        },

        set({dispatch, commit, state}, record) {
            let cachedRecord = state.shopCart.set(record);
            return state.db.record.put(cachedRecord).catch((e) => {
            });
        },

        pop({dispatch, commit, state}, record) {
            state.db.record.delete(record.id);
            state.shopCart.pop(record);
        },

        getContext(context) {
            return context;
        },

    },
};
