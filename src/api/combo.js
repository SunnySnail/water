/**
 * FileName:   combo.js
 * Author:     Fasion Chan
 * @contact:   fasionchan@gmail.com
 * @version:   $Id$
 *
 * Description:
 *
 * Changelog:
 *
 **/

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
                path: '/combo',
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
                path: '/combo' + '/' + _id,
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
