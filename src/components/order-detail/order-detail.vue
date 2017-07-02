<template>
    <div class="order-detail">
        <div class="order-info order-detail-section">
            <div class="order-status">
                <span class="order-num">订单号：<i>3334343423432434</i></span>
                <span :class='[{unpay:!pay_status},"pay-status"]'>[{{ pay_status?"已支付":"待支付"}}]</span>
            </div>
            <div class="order-user-info">
                <p class="connect-info">
                    <span>预订人：<i>Huangxiaoyan</i></span>
                    <span>1357***446</span>
                </p>
                <p class="user-address">
                    配送地址：<span>华南理工大学南校区C5-433</span>
                </p>
            </div>
        </div>
        <div class="company-info order-detail-section">
            <p class="company-name">A送水点</p>
            <p class="company-address">华工xxxx地点</p>
            <p class="connect-phone">联系方式：<i>020-998888888</i></p>
            <div class="product">
                <div class="product-pic" :style='{backgroundImage:"url("+pic+")"}'></div>
                <div class="info">
                    <p class="product-name">
                        {{product_name}}
                    </p>
                    <p class="product-price">
                        ¥{{product_price}}/桶
                    </p>
                </div>
            </div>
        </div>
        <ul class="buy-info">
            <li v-for='i in list'>
                <span class="title">{{i.title}}</span>
                <span :class='[{stress:i.stress},"desc"]'>{{i.desc}}</span>
            </li>
        </ul>
        <div class="btn">
            <div class="cancel-btn" v-if='!pay_status'>取消订单</div>
            <div class="pay-btn" v-if='!pay_status'>微信支付</div>
            <div class="buy-btn" v-if='pay_status'>再次购买</div>
        </div>
    </div>
</template>
<script>
    import './order-detail.scss';

    export default {
        props: {
            pay_status: {
                type: Boolean,
                default: false
            },
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
            }
        },

        data() {
            return {
                list: [{
                    title: '购买时间',
                    desc: '2017-05-04'
                },{
                    title: '购买人',
                    desc: '黄晓燕'
                },{
                    title: '购买数量',
                    desc: '10桶'
                },{
                    title: '总价',
                    desc: '¥60',
                    stress: true
                }]
            }
        }
    }
</script>