<template>
    <ul class="bottom-navbar">
        <li
            v-for='(action, i) in actions'
            :class='[{active:action.name===active_name},"navbar-item"]'
            @click='act(action)'
        >
            <span :class='[action.icon,"iconfont"]'></span>
            <p>{{action.name}}</p>
        </li>
    </ul>
</template>
<script>
    import './main.scss';

    export default {
        data() {
            return {
                actions: [
                    {
                        name: '首页',
                        icon: 'icon-home',
                        active: false,
                        route: {
                            name: 'Home',
                        },
                    },
                    {
                        name: '订水',
                        icon: 'icon-ink14',
                        active: false,
                        route: {
                            name: 'MerchantList',
                        },
                    },
                    {
                        name: '送水',
                        icon: 'icon-ds',
                        active: false,
                        route: {
                            name: 'WaterCall',
                        },
                    },
                    {
                        name: '购物车',
                        icon: 'icon-gouwuche',
                        active: false,
                        route: {
                            name: 'ShopCart',
                        },
                    },
                    {
                        name: '我的',
                        icon: 'icon-wo',
                        active: false,
                        route: {
                            name: 'UserCenter',
                        },
                    },
                ],
            };
        },

        props: {
            active_name: {
                type: String,
                required: true
            },

            urlDiffOnly: {
                type: Boolean,
                default: true,
            }
        },

        methods: {
            act(action) {
                let vm = this;
                if (!vm.urlDiffOnly && action.name === vm.active_name) {
                    return;
                }

                vm.$router.push(action.route);
            }

        }
    }
</script>
