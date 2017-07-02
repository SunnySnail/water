/**
 * @author: huangxiaoyan
 * @email: hxysnail@gmail.com
 * @name: api.js
 * @description: 包装ajax请求
 */

/**
 * 包装ajax请求
 * @param {[JSON]} json [description ]
 * @return {[]}
 */
const API_PREFIX = '/api/v1';

function get_api_url(path, params) {
    if(params) {
        return API_PREFIX + path + '?' + $.param(params);
    }
    else {
        return API_PREFIX + path;
    }
}

function api(request) {
    let path = request.path;
    let params = request.params || {};

    delete request.path;
    delete request.params;

    request.url = get_api_url(path, params);
    request.contentType = 'application/json;charset=utf8';
    request.dataType = 'json';

    return request;
}


/**
 * ajax get
 * @param {[JSON]} json [description ]
 * @return {[]}
 */
export function api_get(request) {
    request = api(request);

    request.type = 'GET';

    if(request.data) {
        for (let key in request.data) {
            request.data[key] = JSON.stringify(request.data[key]);
        }
    }

    return $.ajax(request);

}

/**
 * ajax post
 * @param {[JSON]} json [description ]
 * @return {[]}
 */
export function api_post(request) {
    request = api(request);

    request.type = 'POST';

    if(request.data) {
        request.data = JSON.stringify(request.data);
    }

    return $.ajax(request);
}

/**
 * ajax put
 * @param {[JSON]} json [description ]
 * @return {[]}
 */
export function api_put(request) {
    request = api(request);

    request.type = 'PUT';

    if(request.data) {
        request.data = JSON.stringify(request.data);
    }

    return $.ajax(request);
}
