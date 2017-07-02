<template>
    <div class="jump-bar">
        <router-link :to='path'>
            <span
            class="text-value"
            >{{ value }}</span>
            <span class="iconfont icon-fa-angle-right"></span>
        </router-link>
    </div>
</template>
<script>

    import './main.scss';

    export default {
        props: {
            value: String,
            path: {
                type: String,
                require: true
            }
        }
    }

</script>