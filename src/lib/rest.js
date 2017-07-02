/**
 * FileName:   rest.js
 * Author:     Fasion Chan
 * @contact:   fasionchan@gmail.com
 * @version:   $Id$
 *
 * Description:
 *
 * Changelog:
 *
 **/

import {api_get, api_post} from './api'


export function create(resourcePath, data) {
    return new Promise((resolve, reject) => {
        api_post({
            path: resourcePath,
            data: data
        }).done((data) => {
            resolve(data);
        }).fail(() => {
            reject();
        })
    });

}


export function retrieve(resourcePath, id, query) {
    if (id.$oid) {
        id = id.$oid;
    }

    return new Promise((resolve, reject) => {
        api_get({
            path: resourcePath + '/' + id,
        }).done((data) => {
            resolve(data);
        }).fail(() => {
            reject();
        });
    });
}
