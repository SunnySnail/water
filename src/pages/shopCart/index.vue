<template>
    <div class="shop-cart-page">
        <shop-cart
            v-if='store'
            :store='store'
        ></shop-cart>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                store: null,
            };
        },

        created() {
            let vm = this;

            vm.$store.dispatch('shopCart/getContext').then((context) => {
                vm.store = context;
            });
        },
    };

</script>
