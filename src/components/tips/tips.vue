<template>
    <transition name='fade'>
        <div class="tips-toast" v-show='show'>

            <!-- loading toast -->
            <div id="loadingToast" v-show='show && type=="loading"'>
                <div class="weui-mask_transparent"></div>
                <div class="weui-toast">
                    <i class="weui-loading weui-icon_toast"></i>
                </div>
            </div>

            <!-- tips toast -->
            <p class='tips' v-show='show && type=="tips"'>{{tips}}</p>
        </div>
    </transition>
</template>
<script>
    import './tips.scss';
    export default {
        props: {
            tips: {
                type: String,
                default: '这是提示语'
            },
            show: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: 'loading'
            }
        }
    }
</script>