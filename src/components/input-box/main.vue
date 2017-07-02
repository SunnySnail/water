<template>
    <div class="input-box">
        <input
            type='text'
            class="input-text"
            v-model.change='iValue'
            :placeholder="placeholder"
        />
    </div>
</template>

<script>
    import './main.scss';

    export default {
        data() {
            let vm = this;
            return {
                iValue: vm.value,
            };
        },

        props: {
            value: {
                type: String,
                required: true,
            },

            placeholder: {
                type: String,
                default: '请输入',
            },
        },

        watch: {
            iValue(newValue, oldValue) {
                let vm = this;
                vm.$emit('input', vm.iValue);
            },

            value(newValue, oldValue) {
                let vm = this;
                vm.iValue = newValue;
            },
        },
    };
</script>
