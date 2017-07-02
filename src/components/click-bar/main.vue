<template>
    <div class="click-bar" @click.stop="clicked">
        <span
            class="text-value"
        >{{ value }}</span>
        <span class="iconfont icon-fa-angle-right"></span>
    </div>
</template>

<script>
    import './main.scss';

    export default {
        props: {
            // 文本值
            value: String
        },

        methods: {
            clicked() {
                let vm = this;
                vm.$emit('click');
            }
        }
    }
</script>
