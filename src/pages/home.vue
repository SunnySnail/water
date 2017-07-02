<template>
    <div>
    </div>
</template>

<script>

    export default {
        created() {
            let vm = this;

            vm.$store.commit('framework/setTitle', '首页');
            vm.$store.commit('framework/setActiveActionName', '首页');
        },
    }

</script>
