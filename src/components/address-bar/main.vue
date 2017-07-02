<template>
    <div class="address-bar">
        <click-bar
            :value='addressReadable || "请选择地址"'
            @click='enable'
        >
        </click-bar>

        <address-selector
            v-show='active'
            v-model='value'
            :i-value='iAddress'
            :refresh-trigger='asRefreshTrigger'
            :address_api='address_api'
            v-on:confirm='disable'
            v-on:cancel='disable'
        >
        </address-selector>
    </div>
</template>

<script>
    import Vue from 'vue'

    import address_api from '../../api/address';

    import './main.scss';

    export default {
        data() {
            return {
                //
                iAddress: {
                    'levels': [],
                    'details': ''
                },

                // 地址选择触发器
                asRefreshTrigger: false,

                address_api: {
                    retrieveLocation: address_api.retrieveLocation4AS.bind(address_api),
                    retrieveChildren: address_api.retrieveChildren4AS.bind(address_api),
                    retrieveGCS: address_api.retrieveGCS.bind(address_api)
                },

                // 地址选择可见性
                active: false
            }
        },

        props: {
            // 双向绑定数据
            value: {
                type: Object,
                required: true
            },

            emitActivate: {
                type: Boolean,
                default: false,
            },

            emitRest: {
                type: Boolean,
                default: false,
            },
        },

        computed: {
            addressReadable() {
                let vm = this;

                if (!vm.value) {
                    return '';
                }

                let texts = new Array();

                for (var level of vm.value.levels) {
                    if (level.selected) {
                        texts.push(level.selected.name);
                    }
                }

                if (vm.value.details) {
                    texts.push(vm.value.details);
                }

                return texts.join(' ');
            }
        },

        created() {
            let vm = this;
        },

        watch: {
            refreshTrigger(newValue, oldValue) {
                let vm = this;
                vm.initLevels();
            },
        },

        methods: {
            enable() {
                console.log('address bar enabled');

                let vm = this;

                if (vm.value) {
                    vm.iAddress.levels = $.extend(true, [], vm.value.levels);
                    vm.iAddress.details = vm.value.details;
                }

                vm.asRefreshTrigger = !vm.asRefreshTrigger;
                vm.active = true;

                if (vm.emitActivate) {
                    vm.$emit('activate');
                }
            },

            disable() {
                let vm = this;
                vm.active = false;

                if (vm.emitRest) {
                    vm.$emit('rest');
                }
            },
        }
    }
</script>
