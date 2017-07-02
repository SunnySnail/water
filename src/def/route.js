/**
 * FileName:   route.js
 * Author:     Fasion Chan
 * @contact:   fasionchan@gmail.com
 * @version:   $Id$
 *
 * Description:
 *
 * Changelog:
 *
 **/

import Vue from 'vue';
import VueRouter from 'vue-router';


/****************** 用户填写登记信息 start ******************/

// 用户信息设置父页面
const set_info_page = r => require.ensure([], () => r(require('../pages/userInfo/set-info-page.vue')), 'setInfo');

// 设置地址信息
const set_address_page = r => require.ensure([], () => r(require('../pages/userInfo/set-address-page.vue')), 'setAddress');

/****************** 用户填写登记信息 end ******************/



/****************** 群账号 start ******************/

// 群账号父页面
const group_account_page = r => require.ensure([], () => r(require('../pages/groupAccount/group-account-page.vue')), 'groupAccount');


/****************** 群账号 end ******************/


/****************** 商家 start ******************/

// 商家页面
const merchant_page = r => require.ensure([], () => r(require('../pages/merchant/show.vue')), 'merchant');

/****************** 商家 end ******************/

// 产品具体购买页面
const product_page = (function() {return r => require.ensure([], () => r(require('../pages/product/show.vue')), 'product');})()


// 确认订单页面
const confirm_order_page = r => require.ensure([], () => r(require('../pages/confirm-order-page.vue')), 'confirmorder');


// 用户买水订单列表
const order_list_page = r => require.ensure([], () => r(require('../pages/order-list-page.vue')), 'orderlist');


// 用户订水订单详情页
const order_detail_page = r => require.ensure([], () => r(require('../pages/order-detail-page.vue')), 'orderdetail');

// 用户送水页面
const call_water_page = r => require.ensure([], () => r(require('../pages/call-water-page.vue')), 'callwater');

// 用户选择送水详情页
const call_order_page = r => require.ensure([], () => r(require('../pages/call-order-page.vue')), 'callorder');

// 配送订单列表页
const call_order_list_page = r => require.ensure([], () => r(require('../pages/call-order-list-page.vue')), 'callorderlist');

// 配送订单详情
const send_order_detail_page = r => require.ensure([], () => r(require('../pages/send-order-detail-page.vue')), 'sendorderdetail');


/****************** 工具页面 start ******************/

// 获取位置页面
const get_location_page = r => require.ensure([], () => r(require('../pages/tool/get-location-page.vue')), 'getlocation');
// 显示位置页面
const show_pos_page = r => require.ensure([], () => r(require('../pages/tool/show-pos-page.vue')), 'showpos');
// 显示位置页面
const get_pos_name_page = r => require.ensure([], () => r(require('../pages/tool/get-pos-name-page.vue')), 'getpos');

/****************** 工具页面 end ******************/


Vue.use(VueRouter);

export default new VueRouter({
    routes: [

        //
        {
            path: '/',
            name: 'Framework',
            component:  r => require.ensure([], () => r(require('../pages/framework.vue')), 'Framework'),
            children: [
                // 首页
                {
                    path: '',
                    name: 'Home',
                    component: r => require.ensure([], () => r(require('../pages/home.vue')), 'Home'),
                },

                // 商家列表
                {
                    path: 'Merchant/list',
                    name: 'MerchantList',
                    component: r => require.ensure([], () => r(require('../pages/merchant/list.vue')), 'merchantlist'),
                },

                // 商家首页
                {
                    path: '/Merchant/show/:id',
                    name: 'merchant',
                    component: merchant_page
                },

                // 商品首页
                {
                    path: '/Commodity/show/:id',
                    name: 'showCommodity',
                    component: r => require.ensure([], () => r(require('../pages/commodity/show.vue')), 'showCommodity'),
                },

                {
                    path: 'UserCenter/index',
                    name: 'UserCenter',
                    component: r => require.ensure([], () => r(require('../pages/userCenter/index.vue')), 'user'),
                },

                {
                    path: 'User/self',
                    name: 'UserSelf',
                    component: r => require.ensure([], () => r(require('../pages/user/self.vue')), 'UserSelf'),
                },

                // 创建群账号
                {
                    path: 'GroupAccount/create',
                    name: 'CreateGroupAccount',
                    component: r => require.ensure([], () => r(require('../pages/groupAccount/create.vue')), 'CreateGroupAccount'),
                },

                {
                    path: 'GroupAccount/show/:id?',
                    name: 'ShowGroupAccount',
                    component: r => require.ensure([], () => r(require('../pages/groupAccount/show.vue')), 'ShowGroupAccount'),
                },

                {
                    path: 'GroupAccount/invite/:id?',
                    name: 'invite',
                    component: r => require.ensure([], () => r(require('../pages/groupAccount/invite.vue')), 'invite'),
                },

                {
                    path: 'GroupAccount/switch',
                    name: 'SwitchGroupAccount',
                    component: r => require.ensure([], () => r(require('../pages/groupAccount/switch.vue')), 'SwitchGroupAccount'),
                },

                {
                    path: 'UserCenter/accountInfo',
                    name: 'accountInfo',
                    component: r => require.ensure([], () => r(require('../pages/groupAccount/show.vue')), 'accountInfo'),
                },

                // 联系信息
                {
                    path: 'User/editContact',
                    name: 'UserEditContact',
                    component:  r => require.ensure([], () => r(require('../pages/user/set-contact.vue')), 'UserEditContact')
                },

                {
                    path: 'WaterCall/index',
                    name: 'WaterCall',
                    component: r => require.ensure([], () => r(require('../pages/call-water-page.vue')), 'callwater'),
                },

                {
                    path: 'ShopCart/index',
                    name: 'ShopCart',
                    component: r => require.ensure([], () => r(require('../pages/shopCart/index.vue')), 'ShopCart'),
                },

                {
                    path: 'Orders/list',
                    name: 'OrderList',
                    component: r => require.ensure([], () => r(require('../pages/orders/list.vue')), 'OrderList'),
                },
            ],
        },

        // 用户信息
        {
            path: '/UserInfo',
            name: 'UserInfo',
            component: set_info_page,
            children: [
                // 地址
                {
                    path: 'setAddress',
                    component: set_address_page
                }
            ]
        },

        // 群账号
        {
            path: '/GroupAccount',
            name: 'GroupAccount',
            component: group_account_page
        },

        {
            path: '/Product/show/:id',
            name: 'product',
            component: product_page
        },

        {
        path: '/confirmorder/:id',
        name: 'confirmorder',
        component: confirm_order_page
    },{
        path: '/orderlist',
        name: 'orderlist',
        component: order_list_page
    },{
        path: '/order/:id',
        name: 'order',
        component: order_detail_page
    },{
        path: '/callwater',
        name: 'callwater',
        component: call_water_page
    },{
        path: '/callorder/:id',
        component: call_order_page
    },{
        path: '/callorderlist',
        component: call_order_list_page
    },{
        path: '/sendorderdetail/:id',
        component: send_order_detail_page
    },{
        path: '/getpos',
        component: get_location_page
    },{
        path: '/showpos/:id',
        component: show_pos_page
    },{
        path: '/getposname',
        component: get_pos_name_page
    },{
        path: '*',
        name: '*',
        component: merchant_page
    }]
});
