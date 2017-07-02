<template>
    <div class="merchant-page page">
        <commodity-section
            v-if='commodities.length'
            title='商品'
            :list='commodities'
        ></commodity-section>

        <combo-section
            v-if='combos.length'
            title='套餐'
            :list='combos'
        >
        </combo-section>
    </div>
</template>

<script>
    import merchant_api from '../../api/merchant.js';

    export default {
        data() {
            return {
                commodities: [
                ],

                combos: [
                ],
            }
        },

        created() {
            let vm = this;

            vm.merchant_id = vm.$route.params.id;

            vm.$store.commit('framework/setTitle', '加载中...');
            vm.$store.commit('framework/setActiveActionName', '订水');

            merchant_api.retrieve(vm.merchant_id).then((merchant) => {
                vm.merchant = merchant;
                vm.$store.commit('framework/setTitle', merchant.name);
            });

            vm.waterApi.commodity.index({
                merchant_id: vm.merchant_id,
                with_product: true,
            }).then((commodities) => {
                vm.commodities = commodities;
            });

            vm.waterApi.combo.index({
                merchant_id: vm.merchant_id,
            }).then((combos) => {
                vm.combos = combos;
            });
        },
    };
</script>
