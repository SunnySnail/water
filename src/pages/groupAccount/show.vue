<template>
    <div class="account-info-page">
        <member-section
            :members="members"
        >
        </member-section>

        <show-bar
            name="地址"
            :value='address'
        ></show-bar>

        <jump-bar
            value="订单"
            path="/User"
        ></jump-bar>

        <jump-bar
            value="空桶押金"
            path="/User"
        ></jump-bar>

        <div class="delete-account">注销账号</div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../../sass/_common.scss';
    .delete-account {
        width: px2rem(200px);
        text-align: center;
        margin: px2rem(20px) auto px2rem(80px);
        border: 1px solid $fontGrey3;
        color: $fontGrey3;
        border-radius: px2rem(20px);
        font-size: px2rem(16px);
        padding: px2rem(5px) 0;
    }
</style>

<script>

export default {
    data() {
        return {
            account: null,
            members: [],
        };
    },

    computed: {
        address() {
            let vm = this;

            let account = vm.account;
            if (!account) {
                return '';
            }

            return account.address.readable.slice(-3).join(' ');
        },
    },

    created() {
        let vm = this;

        vm.$store.commit('framework/setActiveActionName', '我的');

        let accountId = vm.$route.params['id'];
        if (!accountId) {
            return;
        }

        let current = vm.$store.state.groupAccount.current;
        if (current && current._id.$oid === accountId) {
            vm.setAccount(current);
            return;
        }

        vm.waterApi.groupAccount.retrieve(accountId).then((account) => {
            vm.setAccount(account);
        });
    },

    methods: {
        setAccount(account) {
            let vm = this;

            vm.account = account;
            vm.members = account.members || [];

            vm.$store.commit('framework/setTitle', account.name);
        }
    },
}
</script>
