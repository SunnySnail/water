<template>
    <div class="select-address">
        <div class="select-zone" v-for="(level,index) in address_levels">
            <span
                class="level-name"
                type="text"
                @click.stop="levelSelected(index)"
            >{{ level.name || "请选择地址"}}</span>
            <span class="iconfont icon-fa-angle-right"></span>
        </div>

        <textarea
            v-show="textarea_visible"
            class="input-detail"
            type="text"
            v-model="address_details"
            placeholder="请填写详细地址（不必重复前面地址）"
        >
        </textarea>

        <div
            class="confirm-btn"
            v-show="confirm_btn_visible"
            v-on:click="addressConfirmed"
        >
            {{ confirm_btn_name }}
        </div>

        <select-popup-win
            v-model="popup_visible"
            :done="optionSelected"
            :options="popup_options"
        >
        </select-popup-win>
    </div>
</template>

<script>
    import './select-address.scss';
    import { mapGetters } from 'vuex';

    function AddressLevel(_parent, id, name, siblings) {
        this._parent = _parent;

        this.id = id;
        this.name = name;

        this.siblings = siblings;
    }

    AddressLevel.prototype = {
        constructor: AddressLevel
    }

    export default {
        computed: {
            ...mapGetters({
                select_addr: 'init_addr'
            })
        },

        data() {
            return {
                // 地址层级列表
                address_levels: [
                    new AddressLevel(
                        null,
                    )
                ],
                // 选中层下标
                index_selected: 0,

                // 弹窗选项及可见性
                popup_options: [],
                popup_visible: false,

                // 输入框内容及可见性
                address_details: '',
                textarea_visible: false,

                // 确定按钮可见性
                confirm_btn_visible: false
            }
        },

        props: {
            confirm_btn_name: {
                type: String,
                default: '确定'
            }
        },

        created() {
            let pos = {
                longtitude: 113.3958,
                latitude: 23.05385
            };
            let vm = this;

            //vm.$store.dispatch('get_init_location',pos);
        },

        watch: {
            select_addr(val) {

            }
        },

        methods: {

            levelSelected(index) {

                let vm = this;

                // 记录当前层次
                vm.index_selected = index;

                // 本层及父层
                let level = vm.address_levels[index];
                let parent_level = level._parent;

                // 父节点ID
                let parent_id = parent_level ? parent_level.id.$oid : '';

                // 选项已存在直接展示
                if (level.siblings) {
                    vm.popup_options = level.siblings;
                    vm.popup_visible = true;
                    return;
                }

                let options = {
                    parent_id: parent_id,
                    with_children: 0
                }

                vm.$store.dispatch('get_location_list', options).then(()=>{

                    let location_list = vm.$store.getters.location_list;

                    let addresses = new Array();

                    for (var index in location_list) {
                        var address = location_list[index];
                        addresses.push({
                            id: address._id,
                            name: address.long,
                        })
                    }

                    level.siblings = addresses;

                    vm.popup_options = level.siblings;
                    vm.popup_visible = true;
                })
            },

            optionSelected(option, index) {
                let vm = this;

                // 隐藏弹窗选项
                vm.popup_visible = false;

                // 未做选择
                if (!option) {
                    return;
                }

                // 当前层
                let level = vm.address_levels[vm.index_selected];

                // 选择无变更
                if (option.id === level.id) {
                    return;
                }

                // 更新当前层
                level.id = option.id;
                level.name = option.name;

                // 清理后续层次
                vm.address_levels.length = vm.index_selected + 1;

                // 输入框重置
                vm.textarea_visible = false;
                vm.address_details = '';

                // 隐藏确定按钮
                vm.confirm_btn_visible = false;

                // 获取下一层选项
                let options = {
                    parent_id: level.id.$oid,
                    with_children: 0
                }

                vm.$store.dispatch('get_location_list', options).then(()=>{
                    let location_list = vm.$store.getters.location_list;

                    let addresses = new Array();

                    for (var index in location_list) {
                        var address = location_list[index];
                        addresses.push({
                            id: address._id,
                            name: address.long,
                        })
                    }

                    vm.appendLevel(addresses);
                })
            },

            appendLevel(addresses) {
                let vm = this;

                if (addresses.length > 0) {
                    // 最后一层
                    let level = vm.address_levels[-1];

                    // 子层
                    let sub_level = new AddressLevel(
                        level,
                        null,
                        null,
                        addresses,
                    );

                    // 追加子层次并选中
                    vm.address_levels.push(sub_level);
                    vm.levelSelected(vm.address_levels.length-1);
                }
                else {
                    // 显示输入框
                    vm.textarea_visible = true;
                    // 显示确定按钮
                    vm.confirm_btn_visible = true;
                }
            },

            addressConfirmed() {
                let vm = this;

                vm.$emit('confirmed', {
                    addresses: vm.address_levels,
                    details: vm.address_details
                });
            }
        }
    }
</script>
