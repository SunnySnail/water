<template>
    <div class="call-order-section">
        <div class="call-order-status">
            <span class="order-num">订单号：<i>3334343423432434</i></span>
            <span :class='[{unsend:send_status!=3},"send-status"]'>[{{ send_status==1?"待配送":(send_status==2?"配送中":"已送达")}}]</span>
        </div>
        <div class="product">
            <div class="product-pic" :style='{backgroundImage:"url("+pic+")"}'></div>
            <div class="info">
                <p class="product-name">
                    {{product_name}}
                </p>
                <p class="product-num">
                    配送数量： {{product_num}}桶
                </p>
                <p class="product-num" v-if='send_status==3'>
                    回收空桶数量： {{product_num}}桶
                </p>
            </div>
        </div>
        <div class="buy-date">
            <span class="date">2017-09-30</span>
            <span v-if="send_status==1" class="cancel-btn btn">取消订单</span>
            <span v-if="send_status==3 && !has_get" class="confirm-btn btn">确认收货</span>
            <span v-if="send_status==3 && has_get" class="tips-btn btn">已收货</span>
        </div>
    </div>
</template>
<script>
    import './call-order-section.scss';

    export default {
        props: {
            pic: {
                type: String,
                default: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1925040274,390833368&fm=23&gp=0.jpg'
            },
            product_name: {
                type: String,
                default: '大峡谷'
            },
            product_price: {
                type: Number,
                default: 10
            },
            product_num: {
                type: Number,
                default: 10
            },
            send_status: {
                type: Number,
                default: 1
            },
            has_get: {
                type: Boolean,
                default: false
            }
        }

    }
</script>