<template>
    <div class="set-contact-page page">
        <input-box
            placeholder='请填写姓名'
            v-model='realName'
        >
        </input-box>

        <input-box
            placeholder='请填写手机号码'
            v-model='cellphone'
        >
        </input-box>

        <address-bar
            v-model='address'
        >
        </address-bar>

        <div
            class="confirm-btn"
            v-on:click="confirmed"
        >
            确定
        </div>

        <tips :tips='tips' :show='show' :type='type'></tips>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                realName: '',
                cellphone: '',

                address: {
                    levels: [],
                    details: ''
                },

                next_step_router: {

                },

                router: '',
                tips: '提示语',
                type: 'loading',
                show: false
            }
        },

        created() {
            let vm = this;

            vm.$store.commit('framework/setActiveActionName', '我的');

            let user = vm.$store.state.user.selfUser;
            if (user) {
                vm.updateFromUser(user);

                vm.$store.commit('framework/setTitle', '联系信息');
            }
            else {
                vm.$store.dispatch('user/retrieve').then((user) => {
                    vm.updateFromUser(user);

                    vm.$store.commit('framework/setTitle', '联系信息');
                });
            }
        },

        methods: {
            updateFromUser(user) {
                let vm = this;

                let selfInfo = user.self_info;
                if (selfInfo) {
                    vm.realName = selfInfo.real_name || '';
                }


                vm.cellphone = user.cellphone || '';

                let address = user.address;
                if (address) {
                    vm.setAddress(user.address);
                }
            },

            setAddress(address) {
                let vm = this;

                vm.address = $.extend({}, address);

                let levels = vm.address.levels;
                if (!levels.length) {
                    return;
                }

                let last_level = levels[levels.length-1];
                if (last_level.selected) {
                    last_level.noMore = true;
                }
            },

            showTips(tips, type) {
                let vm = this;
                let t;

                vm.show = true;
                vm.tips = tips || null;
                vm.type = type;

                if(type=='tips') {
                    if(t) clearTimeout(t);
                    t = setTimeout(function(){
                        vm.show = false;
                    }, 2000);
                }
            },

            checkPhone(tel) {
                let phoneReg = /^1(([3,5,8]\d{9})|(4[5,7]\d{8})|(7[0,6-8]\d{8}))$/;
                return (tel&&phoneReg.test(tel));
            },

            check() {
                let vm = this;

                let realName = vm.realName;
                if(!realName) {
                    vm.showTips('请填写姓名','tips');
                    return false;
                }

                let cellphone = vm.cellphone;
                if(!cellphone) {
                    vm.showTips('请填写手机号码','tips');
                    return false;
                }

                if(!vm.checkPhone(cellphone)) {
                    vm.showTips('请填写有效号码','tips');
                    return false;
                }

                return true;
            },

            confirmed() {
                let vm = this;

                if(!vm.check()) {
                    return;
                }

                vm.showTips(null, 'loading');

                vm.$store.dispatch(
                    'user/update',
                    {
                        'self_info.real_name': vm.realName,
                        'cellphone': vm.cellphone,
                        'address': {
                            ids: vm.address.levels.map(function (level) {
                                return level.selected.id;
                            }),
                            details: vm.address.details,
                        },
                    }
                ).then(()=>{
                    vm.jump();
                }).catch(function(error){
                    vm.showTips('提交失败', 'tips');
                })
            },

            jump() {
                let vm = this;

                if (vm.$store.state.groupAccount.current) {
                    vm.$router.push({
                        path: '/User/self',
                    });

                    console.log('current', vm.$store.state.groupAccount.current)
                    return;
                }
                else {
                    vm.$store.dispatch('groupAccount/retrieve').then((account) => {
                    console.log('current', vm.$store.state.groupAccount.current)
                        if (account) {
                            vm.$router.push({
                                path: '/User/self',
                            });
                        }
                        else {
                            vm.$router.push({
                                name: 'CreateGroupAccount',
                            });
                        }
                    }).catch(() => {
                        vm.$router.push({
                            name: 'CreateGroupAccount',
                        });
                    });

                    return;
                }

            },

            addressBarActivated() {
                let vm = this;
                vm.$store.commit('framework/hideActionBar');
            },

            addressBarRested() {
                let vm = this;
                vm.$store.commit('framework/showActionBar');
            },
        }
    }
</script>
