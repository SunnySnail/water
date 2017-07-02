<template>
    <div class="send-order-detail-page page">
        <navbar header-name="订单详情"></navbar>
        <send-order-detail
            :send_status='send_status'
            :product_name='product_name'
            :has_get='false'
        ></send-order-detail>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1925040274,390833368&fm=23&gp=0.jpg',
                product_name: '大峡谷',
                product_price: 10,
                send_status: 2,
                has_get: false
            }
        }
    }
</script>