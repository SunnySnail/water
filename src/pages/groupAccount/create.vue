<template>
    <div class="create-account-page page">
        <select-bar
            v-model="accountOption"
            :options="accountOptions"
            placeholder='请选择账号类型'
        >
        </select-bar>

        <address-bar
            v-model='address'
        >
        </address-bar>

        <input-box
            v-model='accountName'
            placeholder='请填写账号名称'
        >
        </input-box>

        <div class="account-explain">
            <p>此账号可以供多人共享，<span>切勿重复创建账号。</span></p>
            <p>账号创建成功，可邀请小伙伴加入。</p>
            <p>默认初建的人为账号管理员。</p>
        </div>

        <div
            class="create-btn"
            v-on:click="buttonClicked"
        >创建账号</div>
    </div>
</template>

<style lang='scss' scoped>

    @import '../../sass/_common.scss';

    .account-explain {
        padding: px2rem(5px);
        font-size: px2rem(10px);
        color: $fontGrey3;

        span {
            color: $red;
        }
    }

    .create-btn {
        @include button();
    }

</style>

<script>

    export default {

        data() {

            return {
                // 地址
                address: {
                    'levels': [],
                    'details': ''
                },

                activate: true,

                // 账号类型
                accountOptions: [
                    {
                        name: '家庭'
                    },
                    {
                        name: '宿舍'
                    },
                    {
                        name: '企业'
                    }
                ],
                accountOption: null,

                // 账号名
                accountName: '',
            }
        },

        watch: {
            accountOption(val) {
                let vm = this;

                if (!vm.accountName) {
                    vm.accountName = '我的' + val.name;
                }
            }
        },

        beforeCreate() {
            let vm = this;

        },

        created() {
            let vm = this;

            vm.$store.commit('framework/setTitle', '群账号');
            vm.$store.commit('framework/setActiveActionName', '我的');


            let user = vm.$store.state.user.selfUser;
            if (user) {
                let address = user.address;
                if (address && address.levels && address.levels.length) {
                    vm.address = $.extend({}, address);
                }
            }
        },

        methods: {

            buttonClicked() {
                let vm = this;

                let accountInfo = {
                    type: vm.accountOption.name,
                    name: vm.accountName,
                    address: {
                        ids: vm.address.levels.map(function(x) {
                            return x.selected.id
                        }),
                        details: vm.address.details
                    }
                };

                console.log(accountInfo);

                vm.$store.dispatch(
                    'groupAccount/create',
                    accountInfo,
                ).then((account) => {
                    vm.$router.push({
                        path: '/GroupAccount/show/' + account._id.$oid,
                    });
                });
            },
        }
    }
</script>
