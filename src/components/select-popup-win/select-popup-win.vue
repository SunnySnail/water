<template>
    <div class="select-popup-win">
        <div class="select-win-wrap" v-show="show" @click.stop="close(null, null)"></div>
        <div class="select-win" :class="show ? 'active' : ''">
            <div class="select-list">
                <ul class="item-box">
                    <li
                       :class="{'item-active':option.name == active_item}"
                       v-for="(option, index) in options"
                       @click.stop='selectItem(option, index)'
                    ><span>{{option.name}}</span></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import './select-popup-win.scss';

    export default {
        data() {
            return {
                show: this.value,
                active_item: ''
            }
        },

        props: {
            options: Array,
            value: {
                type: Boolean,
                default: false
            },
            done: Function
        },

        watch: {
            value(val) {
                this.show = val;
            }
        },

        methods: {
            close(option, index) {
                this.show = false;
                this.done(option, index);
            },

            selectItem(option, index) {
                let vm = this;
                vm.active_item = option;
                vm.close(option, index);
            }
        }
    }
</script>
