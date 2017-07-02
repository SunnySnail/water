<template>
    <div class="buy-win-container">
        <div class="buy-product">
            <div class="buy-product-btn" @click.stop='showWin'>购买</div>
        </div>

        <div class="buy-win-wrap" @click.stop.self='hideWin' v-show='active'>
            <div class="buy-win">
                <div class="num">
                    <span>数量：</span>
                    <integer-input
                        v-model='quantity'
                        :floor='1'
                    >
                    </integer-input>
                </div>

                <div class="total-price">总价：<i>￥{{price*quantity}}</i></div>
                <div class="buy-btn">
                    <span
                        class="buy"
                        v-on:click.stop='buyClicked'
                    >一键购买</span>

                    <span
                          class="add-to-cart"
                          v-on:click.stop='addToCartClicked'
                    >加入购物车</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import './main.scss';

    export default {
        data() {
            return {
                quantity: 1,
                active: false,
            };
        },

        props: {
            'price': {
                type: Number,
                default: 10
            },
        },

        methods: {

            showWin() {
                let vm = this;
                vm.active = true;
            },

            hideWin() {
                let vm = this;
                this.active = false;
            },

            buyClicked() {
                let vm = this;
                vm.$emit('buy', vm.quantity);
            },

            addToCartClicked() {
                let vm = this;
                vm.$emit('addToCart', vm.quantity);
            },
        },
    }
</script>
