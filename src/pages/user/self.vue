<template>
    <div class="user-info-page">
        <show-bar
            name="头像"
            :pic="headImgUrl"
        ></show-bar>

        <show-bar
            name="姓名"
            :value="selfUser.self_info.real_name"
        ></show-bar>

        <show-bar
            name="手机"
            :value="selfUser.cellphone"
        ></show-bar>

        <show-bar
            name="地址"
            :value='$store.getters["user/address"] || "请填写"'
        ></show-bar>

    </div>
</template>

<script>
   export default {
        data() {
            return {
                fakeUser: {
                    wechat: {
                        'user_info': {},
                    },
                    self_info: {},
                    cellphone: '',
                },
            }
        },

        computed: {
            selfUser() {
                let vm = this;
                return vm.$store.state.user.selfUser || vm.fakeUser;
            },

            headImgUrl() {
                let vm = this;
                return vm.selfUser.wechat.user_info.headimgurl || '';
            }
        },

        created() {
            let vm = this;

            vm.$store.commit('framework/setTitle', '个人信息');
            vm.$store.commit('framework/setActiveActionName', '我的');
        }

    }
</script>
