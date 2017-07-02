<template>
    <div class="product-detail">
        <div class="pic" :style='{backgroundImage: "url("+pic+")"}'></div>
        <div class="product-info">
            <p class="p-name">{{ name }}</p>
            <p class="p-price">零售价：¥{{ price }}/桶</p>
        </div>
        <div class="product-intro">
            <p class="title">商品详情</p>
            <p class="intro">{{ intro }}</p>
        </div>
    </div>
</template>
<script>
    import './main.scss';

    export default {
        data() {
            return {
                num: 1,
                disabled: true,
                active: false
            }
        },

        props: {
            'pic': {
                type: String,
                default: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1925040274,390833368&fm=23&gp=0.jpg",
            },
            'price': {
                type: Number,
                default: 10
            },
            'intro': {
                type: String
            },
            'name': {
                type: String,
                default: '大峡谷'
            }
        },

        methods: {
        },
    }
</script>
