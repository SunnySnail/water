<template>
    <div :class="['select-address',{'has-bottom-navbar':hasBottom}]">
        <navbar
            title='填写地址'
            :backward='canceled'
         >
        </navbar>

        <select-bar v-for="(level, index) in iValue.levels"
            v-model='level.selected'
            :options='level.siblings || []'
            :activate='index === iValue.levels.length-1 && !level.selected'
            :emit-change='true'
            :context='index'
            placeholder='请选择地址'
            v-on:change='barChanged'
        >
        </select-bar>

        <textarea
            v-show="levelsFilled"
            class="input-detail"
            type="text"
            v-model="iValue.details"
            placeholder="请填写详细地址（不必重复前面地址）"
        >
        </textarea>

        <div
            class="confirm-btn"
            v-show="levelsFilled"
            v-on:click="confirmed"
        >
            {{ confirm_btn_name }}
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'

    import './main.scss';

    export default {
        data() {
            return {
            }
        },

        props: {
            // 双向绑定数据
            value: {
                type: Object,
                required: true
            },

            // 输入数据(工作集)
            iValue: {
                type: Object,
                required: true
            },

            // 刷新触发
            refreshTrigger: {
                type: Boolean,
                default: null
            },

            // 按钮显示文案
            confirm_btn_name: {
                type: String,
                default: '确定'
            },

            // 地址接口
            address_api: {
                type: Object,
                required: true
            },

            // 是否有底部
            hasBottom: {
                type: Boolean,
                default: false
            }
        },

        computed: {
            levelsFilled() {
                let vm = this;

                let levels = vm.iValue.levels;
                let last_level = null;

                for (var i=0; i < levels.length; i++) {
                    last_level = levels[i];

                    if (!last_level.selected) {
                        return false;
                    }
                }

                if (!last_level) {
                    return false;
                }

                return last_level.noMore;
            }
        },

        watch: {
            refreshTrigger(newValue, oldValue) {
                console.log('address selector refresh trigger');

                let vm = this;
                vm.initLevels();
            },
        },

        created() {
            let vm = this;
        },

        methods: {
            initLevels() {
                let vm = this;

                if (vm.iValue.levels.length) {
                    return;
                }

                if (!vm.iValue.gcs) {
                    vm.address_api.retrieveGCS().then((gcs) => {
                        vm.iValue.gcs = gcs;
                        vm.initLevels();
                    });

                    return;
                }

                vm.address_api.retrieveLocation(vm.iValue.gcs).then((levels) => {
                    console.log(levels);
                    vm.iValue.levels = levels;
                });
            },

            pushNewLevel() {
                let vm = this;

                let levels = vm.iValue.levels;
                let index = levels.length;
                let parent_index = index - 1;

                // 父节点
                let _parent = null;
                if (levels.length) {
                    _parent = levels[parent_index];
                }

                // 父节点ID
                let parent_id = null;
                if (_parent) {
                    if(_parent.selected) {
                        parent_id = _parent.selected.id;
                    }
                    else {
                        return;
                    }
                }

                vm.address_api.retrieveChildren(parent_id).then((children) => {
                    if (children.length) {
                        levels.splice(index, 1, {
                            selected: null,
                            siblings: children
                        })
                    }
                    else {
                        Vue.set(_parent, 'noMore', true);
                    }
                });
            },

            barChanged({context}) {
                let vm = this;

                let index = context;

                let levels = vm.iValue.levels;
                let level = levels[index];

                // 清理后续层次
                vm.iValue.levels.length = index + 1;
                vm.iValue.details = '';

                vm.pushNewLevel();
            },

            confirmed() {
                let vm = this;

                vm.value.levels = $.extend(true, [], vm.iValue.levels);
                vm.value.details = vm.iValue.details;

                vm.$emit('confirm');
            },

            canceled() {
                let vm = this;
                vm.$emit('cancel');
            }
        }
    }
</script>
