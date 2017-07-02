<template>
    <div class="order-section">
        <div class="order-status">
            <span class="order-num">订单号：<i>3334343423432434</i></span>
            <span :class='[{unpay:!pay_status},"pay-status"]'>[{{ pay_status?"已支付":"待支付"}}]</span>
        </div>
        <div class="product">
            <div class="product-pic" :style='{backgroundImage:"url("+pic+")"}'></div>
            <div class="info">
                <p class="product-name">
                    {{product_name}}
                </p>
                <p class="product-price">
                    ¥{{product_price}}/桶
                </p>
                <p class="product-num">
                    数量： {{product_num}}桶
                </p>
            </div>
            <div class="total-price">
                总价：<span>￥{{ product_price*product_num }}</span>
            </div>
        </div>
        <div class="buy-date">
            <span class="date">2017-09-30</span>
            <span v-if="!pay_status" class="cancel-btn">取消订单</span>
        </div>
    </div>
</template>
<script>
    import './order-section.scss';

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
            pay_status: {
                type: Boolean,
                default: true
            }
        }

    }
</script>