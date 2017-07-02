<template>
    <div class="invitation-letter">
        <div class="invite-con">
            <p></p>
            <div class="invite-btn" @click.stop="show=true">邀请加入</div>
        </div>
        <div class="invitation-wrap" v-show="show">
            <div class="wrap-con">
                <img src="../../images/share-arrow.png">
                <p>分享该页面,即可邀请小伙伴加入哦！</p>
                <div class="close-btn" @click.stop="show=false">我知道了</div>
            </div>
        </div>
    </div>
</template>
<script>
    import './main.scss';

    export default {
        data() {
            return {
                show: true
            }
        }
    }
</script>