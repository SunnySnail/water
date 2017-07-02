/**
 * @author: huangxiaoyan
 * @email: hxysnail@gmail.com
 * @name: address.js
 * @description: 地址信息
 */

import {api_get} from '../lib/api';

export default {

    address2option(address) {
        return {
            id: address._id,
            name: address.long
        }
    },

    retrieveGCS(gcs) {
        return new Promise((resolve, reject) => {
            // 经纬度
            let gcs = {
                longitude: 113.3958,
                latitude: 23.05385
            };

            resolve(gcs);
        });
    },

    /**
     * 根据经纬度获取位置信息
     * @param {[JSON]} json [description ]
     * @return {[]}
     */
    retrieveLocation({gcs, query}) {
        return api_get({
            path: '/address/' + gcs.longitude + ',' + gcs.latitude,
            params: query
        });
    },

    retrieveLocation4AS(gcs) {
        console.log('gcs', gcs, this);
        return new Promise((resolve, reject) => {
            this.retrieveLocation({
                gcs: gcs,
                query: {
                    with_children: 1
                }
            }).done((data) => {
                let levels = new Array();
                let last_level = null;

                for (var level of data) {
                    levels.push({
                        selected: this.address2option(level),
                        siblings: last_level ? last_level.children.map(this.address2option) : null
                    })

                    last_level = level;
                }

                if (last_level.children.length > 0) {
                    levels.push({
                        selected: null,
                        siblings: last_level.children.map(this.address2option)
                    })
                }

                resolve(levels);
            })
            .fail((err) => {
                reject();
            })
        });
    },

    /**
     * 获取地址列表
     * @param {[JSON]} json [description ]
     * @return {[]}
     */
    retrieve({_id, query}) {
        let path = '/address';

        if (_id) {
            if (_id.$oid) {
                _id = _id.$oid;
            }

            path += '/' + _id;
        }

        return api_get({
            path: path,
            params: query
        });
    },

    echo() {
        console.log('hello world');
    },

    retrieveChildren4AS(parent_id) {
        if (parent_id && parent_id.$oid) {
            parent_id = parent_id.$oid;
        }

        return new Promise((resolve, reject) => {
            this.retrieve({
                query: {
                    parent_id: parent_id,
                    with_children: 1
                }
            }).done((data) => {
                let children = data.map(this.address2option);

                resolve(children);
            })
            .fail((err) => {
                reject();
            })
        });
    }
}
