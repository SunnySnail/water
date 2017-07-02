<template>
    <div class="popup-win-wrap">
        <div class="popup-win">
            <div class="win-title">{{winTitle}}</div>
            <div class="win-body">
                <p>{{winCon}}</p>
            </div>
            <div class="win-footer">
                <div class="single-btn btn" v-if='!double'>
                    <div class="sure-btn">确定</div>
                </div>
                <div class="double-btn btn" v-if='double'>
                    <div class="cancel-btn">取消</div>
                    <div class="sure-btn">确定</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import './popup-win.scss';

    export default {
        props: {
            'winTitle': String,
            'winCon': String,
            'double': {
                type: Boolean,
                default: false
            }
        }
    }
</script>