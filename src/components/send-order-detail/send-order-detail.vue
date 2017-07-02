<template>
    <div class="send-order-detail">
        <div class="order-info order-detail-section">
            <div class="order-status">
                <span class="order-num">订单号：<i>3334343423432434</i></span>
                <span :class='[{unsend:send_status!=3},"send-status"]'>[{{ send_status==1?"待配送":(send_status==2?"配送中":"已送达")}}]</span>
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
                    <!-- <p class="product-price">
                        ¥{{product_price}}/桶
                    </p> -->
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
            <div class="cancel-btn" v-if='send_status==1'>取消配送订单</div>
            <div class="confirm-btn" v-if='send_status==3&&!has_get'>确认收货</div>
            <div class="tips-btn" v-if='send_status==3&&has_get'>已收货</div>
        </div>
    </div>
</template>
<script>
    import './send-order-detail.scss';

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
            send_status: {
                type: Number,
                default: 1
            },
            has_get: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
                list: [{
                    title: '叫水时间',
                    desc: '2017-05-04'
                },{
                    title: '配送人',
                    desc: '程师傅'
                },{
                    title: '联系方式',
                    desc: '14567877676'
                },{
                    title: '配送数量',
                    desc: '2桶'
                },{
                    title: '回收空桶数量',
                    desc: '2桶',
                }]
            }
        }
    }
</script>