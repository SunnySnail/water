<template>
    <div class="merchant-section">
        <p class="title"><span class="iconfont icon-fenlei1"></span>{{title}}</p>
        <ul class="list">
            <li class="item" v-for="i in list" v-on:click='jumpMerchant(i)'>
                <p class="company-name">{{i.name}}</p>
                <p class="address">地址：{{i.address.readable.slice(-3).join(' ')}}</p>
                <p class="telephone">电话：{{i.telephone}}</p>
                <span class="iconfont icon-next-s"></span>
            </li>
        </ul>
    </div>
</template>

<script>
    import './merchant-section.scss';

    export default {
        props: [
            'list',
            'title'
        ],

        methods: {
            jumpMerchant(merchant) {
                let vm = this;

                vm.$router.push({
                    path: '/Merchant/show/' + merchant._id.$oid
                });
            }
        }
    }
</script>
