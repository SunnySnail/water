<template>
    <div class="product-page page">
        <navbar :title='title'></navbar>
        <product-detail
            v-if='product'
            :pic='pic'
            :name='product.name'
            :price='price'
            :intro='product.desc'
        ></product-detail>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                product: null,
                title: '',

                pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1925040274,390833368&fm=23&gp=0.jpg',
                price: 10,
            }
        },
        created() {
            let vm = this;
            vm.pic = 'http://www.gz-daxiagu.com/upfiles/product/1325623745.jpg';

            vm.title = '加载中...';
            vm.waterApi.product.retrieve(vm.$route.params.id).then((product) => {
                vm.product = product;
                vm.title = product.name;
            });
        }
    }
</script>
