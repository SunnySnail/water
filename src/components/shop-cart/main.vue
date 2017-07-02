<template>
    <div class="shop-cart">
        <shop-section
            v-for='section in store.state.shopCart.sections'
            :section='section'
            :store='store'
        ></shop-section>

        <div class="close-account">
            <span class="iconfont icon-iconfontweibiaoti20 selected"></span>
            <span>全选</span>
            <span class="total-price">合计：<i>{{ totalPrice }}</i></span>

            <span
                class="close-account-btn"
                v-on:click.stop='checkoutButtonClicked'
            >结算</span>

        </div>

    </div>
</template>

<script>
    import './main.scss';
    export default {
        data() {
            return {
            };
        },

        props: {
            'store': {
                type: Object,
                required: true,
            },
        },

        computed: {
            totalPrice() {
                let vm = this;

                let totalPrice = 0;
                let sections = vm.store.state.shopCart.sections;

                for (var i=0; i<sections.length; i++) {
                    let records = sections[i].records;
                    for (var j=0; j<sections.length; j++) {
                        let record = records[j];
                        if (!record.excluded) {
                            totalPrice += record.price * record.quantity;
                        }
                    }
                }

                return totalPrice;
            },
        },

        created() {
            let vm = this;
            vm.$store.commit('framework/setTitle', '购物车');
            vm.$store.commit('framework/setActiveActionName', '购物车');

            vm.store.dispatch('init').then(() => {
            });
        },

        methods: {
            map(callback) {
                let vm = this;

                let result = [];
                let sections = vm.store.state.shopCart.sections;

                for (var i=0; i<sections.length; i++) {
                    let records = sections[i].records;
                    for (var j=0; j<sections.length; j++) {
                        result.push(callback(records[j]));
                    }
                }

                return result;
            },

            checkoutButtonClicked() {
                let vm = this;

                let order_items = vm.map((record) => {
                    return {
                        item_id: {
                            $oid: record.id,
                        },
                        quantity: record.quantity,
                    };
                });

                console.log(order_items);
            },
        },
    }
</script>
