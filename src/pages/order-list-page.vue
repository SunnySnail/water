<!--
 * @author: huangxiaoyan
 * @email: hxysnail@gmail.com
 * @name: /orderlist
 * @description: 用户订水订单列表
 -->
<template>
    <div class="order-list-page page">
        <navbar header-name="订水订单列表"></navbar>
        <order-section
            v-for='i in list'
            :pic='i.pic'
            :product_name='i.product_name'
            :product_price='i.product_price'
            :product_num='i.product_num'
            :pay_status='i.pay_status'
        ></order-section>
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
                    pay_status: false
                },{
                    pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1925040274,390833368&fm=23&gp=0.jpg',
                    product_name: '大峡谷大峡谷',
                    product_price: 20,
                    product_num: 10,
                    pay_status: false
                },{
                    pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1925040274,390833368&fm=23&gp=0.jpg',
                    product_name: '大峡谷大峡谷',
                    product_price: 10,
                    product_num: 4,
                    pay_status: true
                },{
                    pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1925040274,390833368&fm=23&gp=0.jpg',
                    product_name: '大峡谷大峡谷',
                    product_price: 20,
                    product_num: 10,
                    pay_status: true
                },{
                    pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1925040274,390833368&fm=23&gp=0.jpg',
                    product_name: '大峡谷大峡谷',
                    product_price: 10,
                    product_num: 4,
                    pay_status: true
                }]
            }
        }
    }
</script>