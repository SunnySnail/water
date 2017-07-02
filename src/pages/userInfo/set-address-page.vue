<template>
    <div class="set-address-page page">
        <select-address
            v-on:confirmed="addressConfirmed"
        >
        </select-address>
    </div>
</template>

<script>
    export default {

        methods: {
            addressConfirmed(addressInfo) {
                let vm = this;

                // 地址层次ID列表
                let address_ids = addressInfo.addresses.map(function (x) {
                    return x.id;
                });

                // 待提交地址信息
                let address = {
                    'ids': address_ids,
                    'details': addressInfo.details
                }

                vm.$store.dispatch(
                    'updateUserInfo',
                    {
                        'address': address
                    }
                ).then(()=>{
                    vm.$router.push({
                        path: '/UserInfo/setAddress'
                    });
                }).catch(function(error){
                    vm.showTips('提交失败', 'tips');
                })
            }
        }
    }
</script>
