<template>
    <div class="invite-page">
        <invitation-letter
        ></invitation-letter>
    </div>
</template>

<script>
    export default {
        created() {
            let vm = this;
            vm.$store.commit('framework/setTitle', '邀请伙伴');
        }
    }
</script>
