<template>
    <div class="call-water-page page">
        <call-water-list
            :list='list'
        >
        </call-water-list>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [{
                    product_name: '大峡谷桶装水',
                    pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1925040274,390833368&fm=23&gp=0.jpg',
                    total_num: 20,
                    left_num: 3
                },{
                    product_name: '大峡谷桶装水',
                    pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1925040274,390833368&fm=23&gp=0.jpg',
                    total_num: 20,
                    left_num: 3
                },{
                    product_name: '大峡谷桶装水',
                    pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1925040274,390833368&fm=23&gp=0.jpg',
                    total_num: 20,
                    left_num: 3
                }]
            }
        },

        created() {
            let vm = this;

            vm.$store.commit('framework/setTitle', '可用水单');
            vm.$store.commit('framework/setActiveActionName', '送水');
        },
    }
</script>
