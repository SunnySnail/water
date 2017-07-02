<template>
    <div class="merchant-list-page page">
        <merchant-section v-for='ml in merchantLists'
            :title='ml.title'
            :list='ml.merchants'
        ></merchant-section>
    </div>
</template>

<script>
    import merchant_api from '../../api/merchant.js';

    export default {
        data() {
            return {
                merchantLists: [],
            };
        },

        created() {
            let vm = this;

            vm.$store.commit('framework/setActiveActionName', '订水');
            vm.$store.commit('framework/setTitle', '加载中...');

            merchant_api.index().then((data) => {
                vm.merchantLists = [
                    {
                        title: '推荐',
                        merchants: data,
                    },
                ];

                vm.$store.commit('framework/setTitle', '供水商');
            });
        },
    }
</script>
