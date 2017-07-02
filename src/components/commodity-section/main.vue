<template>
    <div class="product-section">
        <p class="title"><span class="iconfont icon-fenlei1"></span>{{title}}</p>
        <ul class="product-list">
            <li class="product" v-for='i in list' v-on:click.stop='jumpCommodity(i)'>
                <div class="product-pic" :style='{backgroundImage:"url("+waterApi.cdn.upload_img(i.product.images[0])+")"}'></div>
                <div class="info">
                    <p class="product-name">
                        {{i.product.name}}
                    </p>
                    <p class="product-intro">
                        {{i.product.desc}}
                    </p>
                    <p class="product-price">
                        ¥{{i.price}}/桶
                    </p>
                </div>
                <!-- <div class="buy-btn">购买</div> -->
            </li>
        </ul>
    </div>
</template>

<script>
    import './main.scss';

    export default {
        props:[
            'title',
            'list'
        ],

        methods: {
            jumpCommodity(commodity) {
                let vm = this;
                vm.$router.push({
                    path: '/Commodity/show/' + commodity._id.$oid,
                });
            },
        },
    }
</script>
