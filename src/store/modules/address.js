import address_api from '../../api/address';
import * as types from '../mutation-types';

const state = {
    // 定位时的初始位置
    init_location: [],
    // 地址列表
    location_list: []
}

const getters = {
    init_location: state => state.init_location,
    location_list: state => state.location_list
}

const actions = {
    /**
     * 获取初始化位置
     * @param {[JSON]} json [description ]
     * @return {[]}
     */
    get_init_location({commit, state}, pos) {

        return new Promise((resolve, reject)=>{

            address_api.get_init_location(pos).done((json)=>{
                let location = json;

                commit(types.GET_INIT_LOCATION, {location});

                resolve(location);
            })
            .fail((err)=>{
                reject();
            })
        })
    },

    /**
     * 获取位置列表
     * @param {[JSON]} json [description ]
     * @return {[]}
     */
    get_location_list({commit, state}, options) {

        return new Promise((resolve, reject) => {

            address_api.get_location_list(options).done((json)=>{
                let location_list = json;

                commit(types.GET_LOCATION_LIST, {location_list});

                resolve();
            })
            .fail((err)=>{
                reject();
            })
        });
    }

}

const mutations = {

    [types.GET_INIT_LOCATION](state, {location}) {

        if(location) {
            state.init_location = location;
        }

    },

    [types.GET_LOCATION_LIST](state, {location_list}) {

        if(location_list) {
            state.location_list = location_list;
        }

    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
