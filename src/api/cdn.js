/**
 * @author: huangxiaoyan
 * @email: hxysnail@gmail.com
 * @name: user.js
 * @description: 用户信息
 */

import {api_post, api_get, api_put} from '../lib/api';

const cdnDomain = 'tx.cdn.water.icampus.us';
const cdnURI = 'http://' + cdnDomain;
const waterURI = cdnURI + '/water'

export default {
    upload_img(filename) {
        return waterURI + '/upload/img/' + filename;
    },
}
