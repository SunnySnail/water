<template>
    <div class="switch-container">
        <select-bar
            v-model="selected"
            :options="accounts"
        ></select-bar>

        <div
            v-if='selected'
            class="account-info"
        >
            <p class="title">账号信息</p>

            <show-bar
                v-for="m in selected.members"
                :name="m.roles[0]=='owner'?'创建人':'成员'"
                :value="m.wechat.nickname"
            ></show-bar>

            <show-bar
                name="地址"
                :value='selected.address.readable.slice(-3).join(" ")'
            ></show-bar>
        </div>

        <div
            class="switch-btn"
            v-on:click.stop='switchButtonClicked'
        >切换</div>
    </div>
</template>

<style lang='scss' scoped>
    @import '../../sass/_common.scss';
    .account-info {
        width: 95%;
        margin: px2rem(30px) auto;
        color: $black1;
        text-align: center;
        background-color: $white;
        border: 1px solid $orange1;
        .title {
            font-size: px2rem(16px);
            padding: px2rem(5px);
            color: $orange1;
        }

        .show-bar {
            background-color: $white;
            margin-top: 0;
            border-bottom: 0;
        }
    }

    .switch-btn {
        @extend %btn;
        width: px2rem(100px);
        margin: 0 auto;
        padding: px2rem(5px);
    }

</style>

<script>
    export default {
        data() {
            let vm = this;

            return {
                selected: null,
            };
        },

        created() {
            let vm = this;

            vm.$store.commit('framework/setTitle', '切换群账号');
            vm.$store.commit('framework/setActiveActionName', '我的');

            vm.$store.dispatch('groupAccount/index');

            vm.selected = vm.current;
        },

        computed: {
            accounts() {
                let vm = this;
                return vm.$store.state.groupAccount.accounts || [];
            },

            current() {
                let vm = this;
                return vm.$store.state.groupAccount.current;
            },
        },

        watch: {
            accounts(newValue, oldValue) {
                console.log('accounts', newValue);
            },

            current(newValue, oldValue) {
                let vm = this;
                vm.selected = newValue;
            },
        },

        methods: {
            switchButtonClicked() {
                let vm = this;
                vm.$store.commit('groupAccount/setCurrent', vm.selected);

                vm.$router.go(-1);
            },
        },
    }
</script>
