<template>
    <div class="user-section">
        <router-link to='/User/self'>
            <div class="avatar" :style='"backgroundImage: url("+headImg+")"'></div>
            <div class="user-info">
                <p class="username">{{selfUser.wechat.user_info.nickname}}</p>
                <p class="cellphone">{{selfUser.cellphone}}</p>
            </div>
            <span class="iconfont icon-fa-angle-right"></span>
        </router-link>
    </div>
</template>

<script>

    import './main.scss';

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

            headImg() {
                let vm = this;
                return vm.selfUser.wechat.user_info.headimgurl || '';
            }
        },

        created() {
            let vm = this;

            vm.userInfo = this.$store.state.user.selfUser;
        }
    }

</script>
