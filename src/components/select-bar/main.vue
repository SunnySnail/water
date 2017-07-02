<template>
    <div>
        <div class="select-bar" v-on:click="barClicked">
            <span
                class="select-value"
            >{{ value ? value.name : placeholder }}</span>
            <span class="iconfont icon-fa-angle-right"></span>
        </div>

        <div class="select-popup-win">
            <div class="select-win-wrap" v-show="active" @click.stop="wrapClicked"></div>

            <div class="select-win" :class="active ? 'active' : ''">
                <div class="select-list">
                    <ul class="item-box">
                        <li
                           :class="{'item-active':index == active_index}"
                           v-for="(option, index) in options"
                           @click.stop='itemSelected(option, index)'
                        ><span>{{option.name}}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import './main.scss';

    export default {

        data() {
            return {
                active: false
            }
        },

        props: {
            // 选项
            options: {
                type: Array,
                required: true
            },

            // 选择值
            value: {
                type: Object,
                default: null
            },

            // 占位符
            placeholder: {
                type: String,
                default: '请选择'
            },

            // 是否激活
            activate: {
                type: Boolean,
                default: false
            },

            // 发射选择事件
            emitSelect: {
                type: Boolean,
                default: false
            },

            // 发射变更事件
            emitChange: {
                type: Boolean,
                default: false
            },

            // 发射关闭事件
            emitClose: {
                type: Boolean,
                default: false
            },

            // 上下文
            context: {
                required: false
            }
        },

        watch: {
            activate(newValue, oldValue) {
                let vm = this;

                if (newValue !== null) {
                    vm.active = newValue;
                }
            }
        },

        created() {
            let vm = this;

            vm.active = vm.activate;
        },

        methods: {
            barClicked() {
                let vm = this;

                vm.active = true;
            },

            wrapClicked() {
                let vm = this;

                vm.active = false;

                // 关闭事件
                if (vm.emitClose) {
                    vm.$emit('close', {
                        context: context
                    });
                }
            },

            itemSelected(option, index) {
                let vm = this;

                let changed = option !== vm.value;

                // 输入事件
                vm.$emit('input', option);

                // 选择事件
                if (vm.emitSelect) {
                    vm.$emit('select', {
                        context: vm.context,
                        option: option,
                        changed: changed
                    });
                }

                // 变更事件
                if (vm.emitChange) {
                    if (changed) {
                        vm.$emit('change', {
                            context: vm.context,
                            option: option
                        });
                    }
                }

                vm.active = false;
            }
        }

    }
</script>
