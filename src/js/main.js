import Vue from 'vue';

import api from '../api/main.js';
import router from '../def/route.js';

import store from '../store';

// 一开始进入页面，配置微信jssdk
import {getWxSign} from '../lib/wx.js';
getWxSign();
Vue.prototype.waterApi = api;

window.app = new Vue({
    el: '#app',
    store,
    router: router
});


app.$store.dispatch('user/retrieve').then((user) => {
    let selfInfo = user.self_info;
    if (!selfInfo ||
            !selfInfo.real_name ||
            !user.cellphone ||
            !user.address) {

        app.$router.push({
            name: 'UserEditContact',
        });

        return user;
    }

    app.$store.dispatch('groupAccount/retrieve', user._id).catch(() => {
        app.$router.push({
            name: 'CreateGroupAccount',
        });
    });

    return user;
});
