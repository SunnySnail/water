/**
 * @author: huangxiaoyan
 * @email: hxysnail@gmail.com
 * @name: user.js
 * @description: 用户信息
 */

import {api_post, api_get, api_put} from '../lib/api';

export default {
    index(query) {
        query.with_product = true;

        if (query.merchant_id) {
            if (query.merchant_id.$oid) {
                query.merchant_id = query.merchant_id.$oid;
            }
        }

        return new Promise((resolve, reject) => {
            api_get({
                path: '/commodity',
                params: query,
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
                path: '/commodity' + '/' + _id,
                params: {
                    with_product: true,
                    with_merchant: true,
                },
            }).done((data) => {
                resolve(data);
            });
        });
    },
}
