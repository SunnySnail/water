<template>
    <div class="next-step" @click='jump'>下一步</div>
</template>
<script>
    import './next-step.scss';
    export default {
        props: [
            'router'
        ],
        methods: {
            jump() {
                this.$emit('jumpto');
            }
        }
    }
</script>