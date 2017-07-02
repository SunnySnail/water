/**
 * @author: huangxiaoyan
 * @email: hxysnail@gmail.com
 * @name: wx.js
 * @description: 与微信有关的公共操作
 */

import {api_get} from './api';

/**
 * 获取微信签名信息
 * @param {[JSON]} json [description ]
 * @return {[]}
 */
export function getWxSign() {
    api_get({
        path: "/wechat/sign_url/sign",
        data: {
            url: window.location.href,
        },
        type: "POST",
        dataType: "json"
    }).done(function(json){

        wx.config({
            debug: false,
            appId: 'wx012c14f69bf463a9', // 必填，公众号的唯一标识
            timestamp: json.timestamp, // 必填，生成签名的时间戳
            nonceStr: json.noncestr, // 必填，生成签名的随机串
            signature: json.signature,// 必填，签名
            jsApiList: [
                'wxShare',
                'getLocation',
                'openLocation'
            ]
        });

    })
}

/**
 * 微信获取地理经纬度
 * @param {[JSON]} json [description ]
 * @return {[]}
 */
export function getLocation() {
    return new Promise((resolve, reject) => {
        wx.getLocation({
            type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            success: function (res) {
                console.log('getLocation');
                var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                var speed = res.speed; // 速度，以米/每秒计
                var accuracy = res.accuracy; // 位置精度
                resolve(res)
            }
        });
    });
}


/**
 * 微信分享内容
 * @param {[JSON]} json [description ]
 * @return {[]}
 */
function wxShare(options) {

    options = options || {
        title: '邀请加入',
        desc: '小伙伴，来加入',
        link: '//'+window.location.hostname+'/html/index.html',
        imgUrl: 'http://tx.cdn.icampus.us/rp/images/hongbao.png',
        successCb: function() {
            showToast('分享成功');
        },
        cancelCb: function() {
            showToast('分享失败');
        }
    };

    let config = options;


    wx.onMenuShareTimeline(config);

    wx.onMenuShareAppMessage(config);

    wx.onMenuShareQQ(config);

    wx.onMenuShareWeibo(config);

    wx.onMenuShareWeibo(config);

    wx.onMenuShareQZone(config);
}