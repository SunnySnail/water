<template>
    <div class="user-center-page">
        <user-section></user-section>

        <jump-bar
            v-if='currentAccount'
            :path='"/GroupAccount/show/" + currentAccount._id.$oid'
            :value='"当前账号：" + currentAccount.name'
        ></jump-bar>

        <jump-bar
            v-for='o in operationList'
            :path='o.path'
            :value='o.value'
        ></jump-bar>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                operationList: [
                    {
                        path: '/GroupAccount/switch/',
                        value: '切换账号'
                    },

                    {
                        path: '/GroupAccount/create',
                        value: '新增账号'
                    },
                ],
            };
        },

        computed: {
            currentAccount() {
                let vm = this;
                return vm.$store.state.groupAccount.current;
            },
        },

        created() {
            let vm = this;

            vm.$store.commit('framework/setTitle', '个人中心');
            vm.$store.commit('framework/setActiveActionName', '我的');

        },
    };
</script>
