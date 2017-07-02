<template>
    <div class="product-page page">
        <product-detail
            v-if='commodity'
            :pic='image'
            :name='commodity.product.name'
            :price='commodity.price'
            :intro='commodity.product.desc'
        ></product-detail>

        <buy-win
            v-show='$store.state.shopCart.db'
            :price='price'
            v-on:buy='onBuy'
            v-on:addToCart='onAddToCart'
        ></buy-win>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                commodity: null,
            };
        },

        computed: {
            image() {
                let vm = this;

                let commodity = vm.commodity;
                if (!commodity) {
                    return '';
                }

                return vm.waterApi.cdn.upload_img(commodity.product.images[0]);
            },
        },

        created() {
            let vm = this;

            vm.$store.dispatch('shopCart/init');

            vm.$store.commit('framework/setTitle', '加载中...');
            vm.$store.commit('framework/hideActionBar');

            vm.waterApi.commodity.retrieve(vm.$route.params.id).then((commodity) => {
                vm.commodity = commodity;
                vm.$store.commit('framework/setTitle', commodity.product.name);
            });
        },

        methods: {
            onBuy(quantity) {

            },

            onAddToCart(quantity) {
                let vm = this;
                let record = {
                    id: vm.commodity._id.$oid,
                    name: vm.commodity.product.name,
                    imageUrl: vm.image,
                    price: vm.commodity.price,
                    quantity: quantity,
                    merchant: {
                        id: vm.commodity.merchant._id.$oid,
                        name: vm.commodity.merchant.name,
                    },
                };

                vm.$store.dispatch('shopCart/push', record);
            },
        },
    };
</script>
