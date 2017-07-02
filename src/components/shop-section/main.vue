<template>
    <div class="shop-section">
        <jump-bar
            :value="iSection.name"
            :path='"/Merchant/show/" + iSection.id'
        ></jump-bar>

        <ul class="product-list">
            <li class="product" v-for='v in iSection.records'>
                <span class="iconfont icon-iconfontweibiaoti20"></span>
                <div class="product-pic" :style='{backgroundImage:"url("+v.imageUrl+")"}'></div>
                <div class="info">
                    <p class="product-name">
                        {{v.name}}
                    </p>
                    <p class="product-price">
                        总价：￥{{v.price * v.quantity}}
                    </p>
                </div>
                <div class="num">
                    <integer-input
                        v-model='v.quantity'
                        v-on:change='recordChange(v)'
                        floor=0
                    >
                    </integer-input>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import './main.scss';

    export default {
        data() {
            let vm = this;
            return {
                iSection: $.extend({}, vm.section),
            };
        },

        props: {
            section: Object,

            store: {
                type: Object,
                required: true,
            },
        },

        computed: {
            totalPrice() {
                return 0;
            }
        },

        watch: {
            section(newValue, oldValue) {
                let vm = this;
                vm.iSection = $.extend({}, newValue);
            },

            totalPrice() {
            }
        },

        methods: {
            recordChange(record) {
                let vm = this;
                vm.store.dispatch('set', record);
            },
        },

        created() {
            let vm = this;
        },
    }
</script>
