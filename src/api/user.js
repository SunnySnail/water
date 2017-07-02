import {api_get, api_put} from '../lib/api';

/**
 * 未登录处理
 * @param {[JSON]} json [description ]
 * @return {[]}
 */
function notLoginHandler() {
    console.log('not login');
    //没有登录，重定向登录
    window.location.href = location.protocol + '//test.wx.ilive.icampus.us/api/v1/auth/init?scope=snsapi_userinfo';
}

/**
 * 微信登录后的处理
 * @param {[JSON]} json [description ]
 * @return {[]}
 */
function wxLoginHandler(user) {
    if(user) return;

    let location = window.location.origin + window.location.pathname;

    // 未登记个人信息
    if(!user.username) {
        window.location.href = location + '#/UserInfo/setContact';
        return;
    }

    // 未登记地址
    if(!user.address) {
        window.location.href = location + '#/UserInfo/setAddress';
        return;
    }
}

// 错误状态处理
let errorHandlers = {
    401: notLoginHandler,
    404: 'not found',
    502: 'bad gateway'
}

export default {
    retrieve(_id, query) {
        if (!_id) {
            _id = '000000000000000000000000'
        }
        else if (_id.$oid) {
            _id = _id.$oid;
        }

        return new Promise((resolve, reject) => {
            api_get({
                path: '/user/' + _id,
                params: query,
            }).done((user) => {
                wxLoginHandler(user);
                resolve(user);
            }).fail((err) => {
                console.log(err);

                let errorHandler = errorHandlers[err.status];
                if( errorHandler && typeof errorHandler == 'function')
                {
                    errorHandler.call();
                }
                else {
                    console.log(errorHandler);
                }

            });
        });
    },

    retrieveSelf() {
        return this.retrieve();
    },

    update(diff, query) {
        return new Promise((resolve, reject) => {
            api_put({
                path: '/user/000000000000000000000000',
                data: diff,
                params: query,
            }).done((data) => {
                resolve(data);
            });
        });
    },
}
