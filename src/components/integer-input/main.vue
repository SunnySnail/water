<template>
    <div class="integer-input">
        <i id='minus' :class='{disabled:floorReached}' @click='decrease'>-</i>
        <input type="number" v-model.number='iValue' placeholder="1">
        <i id="add" :class='{disabled:ceilingReached}'@click='increase'>+</i>
    </div>
</template>

<script>

    export default {
        data() {
            let vm = this;
            return {
                iValue: vm.value,
            };
        },

        props: {
            value: {
                type: Number,
                require: true,
            },

            ceiling: {
                type: Number,
                default: null,
            },

            floor: {
                type: Number,
                default: null,
            },
        },

        watch: {
            iValue(newValue, oldValue) {
                let vm = this;

                vm.$emit('input', +vm.iValue);
                vm.$emit('change');
            },
        },

        computed: {
            ceilingReached() {
                let vm = this;
                return vm.ceiling !== null && vm.iValue >= vm.ceiling;
            },

            floorReached() {
                let vm = this;
                return vm.floor !== null && vm.iValue <= vm.floor;
            }
        },

        methods: {
            increase() {
                let vm = this;

                if (!vm.ceilingReached) {
                    vm.iValue++;
                }
            },

            decrease() {
                let vm = this;

                if (!vm.floorReached) {
                    vm.iValue--;
                }
            },
        },
    };

</script>
