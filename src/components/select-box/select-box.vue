<template>
    <div class="select-box">
        <div class="select-box-con">
            <span class="input-title">{{ title }}</span>
            <div class="select-input" @click='showPopwin'>{{ selected_address || placeholder }}</div>
        </div>
        <transition name='fade'>
            <div class="select-win-wrap" v-show='show' @click='hidePopwin'>
                <transition name='slide'>
                <div class="select-win" v-show='show'>
                    <ul class="select-list">
                        <li :class='[{active:addr == selected_address},"select-item"]' v-for='addr in addressList'
                            @click='selected()'
                        ><i class="iconfont icon-duigou"></i>{{ addr }}</li>
                    </ul>
                </div>
                </transition>
            </div>
        </transition>
    </div>
</template>
<script>
    import './select-box.scss';

    export default {
        data() {
            return {
                selected_address: this.placeholder,
                show: false

            }
        },
        props: [
            'title',
            'index',
            'placeholder',
            'addressList'
        ],
        methods: {
            selected() {
                this.selected_address = event.target.innerText;
                this.show = false;

                this.$emit('select',this.selected_address, this.index);
            },
            showPopwin() {
                this.show = true;
            },
            hidePopwin() {
                this.show = false;
            },
        }
    }
</script>