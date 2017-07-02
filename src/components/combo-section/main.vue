<template>
    <div class="product-section">
        <p class="title"><span class="iconfont icon-fenlei1"></span>{{title}}</p>
        <ul class="product-list">
            <li class="product" v-for='i in list' v-on:click.stop='jumpCommodity(i)'>
                <div class="product-pic" :style='{backgroundImage:"url("+waterApi.cdn.upload_img(i.images[0])+")"}'></div>
                <div class="info">
                    <p class="product-name">
                        {{i.name}}
                    </p>
                    <p class="product-intro">
                    </p>
                    <p class="product-price">
                        ¥{{i.price}}
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
            jumpCommodity(combo) {
                let vm = this;
                vm.$router.push({
                    path: '/Combo/show/' + combo._id.$oid,
                });
            },
        },
    }
</script>
