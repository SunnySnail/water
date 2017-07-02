<template>
    <div class="order-confirm">
        <div class="address">
            <p class="a-title">订水地址：</p>
            <p><span class="iconfont icon-site-copy"></span>华南理工大学南校区C5-311</p>
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
                <p class="product-intro">
                    {{product_intro}}
                </p>
            </div>
        </div>
        <ul class="buy-info">
            <li v-for='i in list'>
                <span class="title">{{i.title}}</span>
                <span :class='[{stress:i.stress},"desc"]'>{{i.desc}}</span>
            </li>
        </ul>
        <div class="pay-btn">微信支付</div>
    </div>
</template>
<script>
    import './order-confirm.scss';

    export default {
        data() {
            return {
                pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1925040274,390833368&fm=23&gp=0.jpg',
                product_name: '大峡谷',
                product_price: 10,
                product_intro: '大峡谷简介',
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