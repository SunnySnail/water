<template>
    <div class="show-bar">
        <span
            class="text-key"
        >{{ name }}</span>
        <span
            class="text-value"
        >{{ value }}</span>
        <span
            v-show='pic'
            class="pic"
            :style='"backgroundImage: url("+pic+")"'
        ></span>
    </div>
</template>
<script>
    import './main.scss';

    export default {
        props: {
            name: String,
            value: String,
            pic: {
                type: String,
                default: ""
            }
        }
    }
</script>