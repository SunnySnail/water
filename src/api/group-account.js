/**
 * @author: huangxiaoyan
 * @email: hxysnail@gmail.com
 * @name: user.js
 * @description: 用户信息
 */

import {api_post, api_get, api_put} from '../lib/api';

import {create, retrieve} from '../lib/rest';

export default {
    index(query) {
        return api_get({
            path: '/group_account',
            params: query,
        });
    },

    create(data) {
        return create('/group_account', data);
    },

    retrieve(_id) {
        return retrieve('/group_account', _id);
    },
}
