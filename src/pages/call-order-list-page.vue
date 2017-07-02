<!--
 * @author: huangxiaoyan
 * @email: hxysnail@gmail.com
 * @name: /orderlist
 * @description: 用户订水订单列表
 -->
<template>
    <div class="call-order-list-page page">
        <navbar header-name="配送订单列表"></navbar>
        <call-order-section
            v-for='i in list'
            :pic='i.pic'
            :product_name='i.product_name'
            :product_price='i.product_price'
            :product_num='i.product_num'
            :send_status='i.send_status'
            :has_get='i.has_get'
        ></call-order-section>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                list: [{
                    pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1925040274,390833368&fm=23&gp=0.jpg',
                    product_name: '大峡谷大峡谷',
                    product_price: 20,
                    product_num: 10,
                    send_status: 1,
                    has_get: false,
                },{
                    pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1925040274,390833368&fm=23&gp=0.jpg',
                    product_name: '大峡谷大峡谷',
                    product_price: 20,
                    product_num: 10,
                    send_status: 2,
                    has_get: false
                },{
                    pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1925040274,390833368&fm=23&gp=0.jpg',
                    product_name: '大峡谷大峡谷',
                    product_price: 10,
                    product_num: 4,
                    send_status: 3,
                    has_get: false
                },{
                    pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1925040274,390833368&fm=23&gp=0.jpg',
                    product_name: '大峡谷大峡谷',
                    product_price: 20,
                    product_num: 10,
                    send_status: 3,
                    has_get: false
                },{
                    pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1925040274,390833368&fm=23&gp=0.jpg',
                    product_name: '大峡谷大峡谷',
                    product_price: 10,
                    product_num: 4,
                    send_status: 3,
                    has_get: true
                }]
            }
        }
    }
</script>