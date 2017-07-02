/**
 * @author: huangxiaoyan
 * @email: hxysnail@gmail.com
 * @name: user.js
 * @description: 用户信息
 */

import {api_post, api_get, api_put} from '../lib/api';

export default {
    index() {
        return new Promise((resolve, reject) => {
            api_get({
                path: '/merchant',
            }).done((data) => {
                resolve(data);
            });
        });
    },

    retrieve(_id) {
        if (_id.$oid) {
            _id = _id.$oid;
        }

        return new Promise((resolve, reject) => {
            api_get({
                path: '/merchant' + '/' + _id,
            }).done((data) => {
                resolve(data);
            });
        });
    },

    create(data) {
    },
}
