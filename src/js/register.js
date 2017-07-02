import Vue from 'vue'

// 注册组件

/*************** 选择模块组件 start ******************/

import integer_input from '../components/integer-input/main.vue';
Vue.component('integer-input', integer_input);

// 选择框
import select_box from '../components/select-box/select-box.vue';
Vue.component('select-box', select_box);

// 选择框弹窗
import select_popup_win from '../components/select-popup-win/select-popup-win.vue';
Vue.component('select-popup-win', select_popup_win);

// 地址选择框
import address_selector from '../components/address-selector/main.vue';
Vue.component('address-selector', address_selector);

import address_bar from '../components/address-bar/main.vue';
Vue.component('address-bar', address_bar);

// 地址选择框
import select_address from '../components/select-address/select-address.vue';
Vue.component('select-address', select_address);

// 选择条
import select_bar from '../components/select-bar/main.vue';
Vue.component('select-bar', select_bar);

/*************** 选择模块组件 end ******************/

/**************** 导航模块组件 start ***************/

// 头部导航
import navbar from '../components/navbar/main.vue';
Vue.component('navbar', navbar);

// 底部导航
import bottom_navbar from '../components/bottom-navbar/main.vue';
Vue.component('bottom-navbar', bottom_navbar);

/**************** 导航模块组件 end **************/

/****************** 点击模块组件 ***************/

// 点击条
import click_bar from '../components/click-bar/main.vue';
Vue.component('click-bar', click_bar);

/********************************************/

/************* 用户中心模块组件 ****************/

// 用户信息
import user_section from '../components/user-section/main.vue';
Vue.component('user-section', user_section);

// 账号成员
import member_section from '../components/member-section/main.vue';
Vue.component('member-section', member_section);

/*******************************************/


/****************** 跳转模块组件 ****************/

// 跳转组件
import jump_bar from '../components/jump-bar/main.vue';
Vue.component('jump-bar', jump_bar);

/*********************************************/


/****************** 展示条模块组件 ****************/

// 展示条组件
import show_bar from '../components/show-bar/main.vue';
Vue.component('show-bar', show_bar);

/*********************************************/

/***************** 订水模块 ********************/

// 产品购买详情
import product_detail from '../components/product-detail/main.vue';
Vue.component('product-detail', product_detail);

// 购买弹窗模块
import buy_win from '../components/buy-win/main.vue';
Vue.component('buy-win', buy_win);

// 商家列表section
import merchant_section from '../components/merchant-section/merchant-section.vue';
Vue.component('merchant-section', merchant_section);

// 商家产品列表section
import commodity_section from '../components/commodity-section/main.vue';
Vue.component('commodity-section', commodity_section);

import combo_section from '../components/combo-section/main.vue';
Vue.component('combo-section', combo_section);

/*********************************************/

/***************** 预约送水模块 ****************/

// 预约送水列表
import call_water_list from '../components/call-water-list/main.vue';
Vue.component('call-water-list', call_water_list);

// 预约送水详情页
import call_order from '../components/call-order/call-order.vue';
Vue.component('call-order', call_order);

/********************************************/


/****************** 购物车 ******************/

// 购物商品
import shop_section from '../components/shop-section/main.vue';
Vue.component('shop-section', shop_section);

// 购物车
import shop_cart from '../components/shop-cart/main.vue';
Vue.component('shop-cart', shop_cart);

/******************************************/


/***************** 邀请模块 ******************/

// 邀请函
import invitation_letter from '../components/invitation-letter/main.vue';
Vue.component('invitation-letter', invitation_letter);

/******************************************/



// 输入框
import input_box from '../components/input-box/main.vue';
Vue.component('input-box', input_box);

// 下一步按钮
import next_step from '../components/next-step/next-step.vue';
Vue.component('next-step', next_step);

// 弹窗
import popup_win from '../components/popup-win/popup-win.vue';
Vue.component('popup-win', popup_win);


// 确认订单
import order_confirm from '../components/order-confirm/order-confirm.vue';
Vue.component('order-confirm', order_confirm);

// 订单列表section
import order_section from '../components/order-section/order-section.vue';
Vue.component('order-section', order_section);

// 订单详情
import order_detail from '../components/order-detail/order-detail.vue';
Vue.component('order-detail', order_detail);


// 配送订单列表
import call_order_section from '../components/call-order-section/call-order-section.vue';
Vue.component('call-order-section', call_order_section);

// 配送订单详情
import send_order_detail from '../components/send-order-detail/send-order-detail.vue';
Vue.component('send-order-detail', send_order_detail);

// 提示组件
import tips from '../components/tips/tips.vue';
Vue.component('tips', tips);

