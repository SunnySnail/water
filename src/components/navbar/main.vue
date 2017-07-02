<template>
    <header>
        <a @click="backwardClicked" class="back"><i class="iconfont icon-back"></i></a>
        <p class="header-name">{{ title }}</p>
    </header>
</template>

<script>
    import './main.scss';

    export default {

        props: {
            // 头部名称
            'title': {
                type: String,
                required: true
            },

            // 返回按钮回调函数
            'backward': {
                type: Function,
                default: null,
            }
        },

        methods: {
            // 返回按钮回调
            backwardClicked() {
                let vm = this;

                // 自定义对调函数
                if (vm.backward) {
                    return vm.backward();
                }
                else {
                    // 默认按路由回退
                    vm.$router.go(-1);
                }
            }
        }
    }
</script>
