<template>
    <div class="call-water-list">
        <p class="title"><span class="iconfont icon-fenlei1"></span>水单状态</p>
        <ul class="water-list">
            <li class="product" v-for='i in list'>
                <div class="product-pic" :style='{backgroundImage:"url("+i.pic+")"}'></div>
                <div class="info">
                    <p class="product-name">
                        {{ i.product_name }}
                    </p>
                    <p class="left-num num">
                        <span>剩余数量：</span>{{ i.left_num }}桶
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import './main.scss';

    export default {
        props: [
            'list'
        ]

    }
</script>