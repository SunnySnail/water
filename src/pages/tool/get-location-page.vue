<template>
    <div class="get-location-page">
        <div class="con">
            <p v-for='(value,key) in res'>
                <span>{{key}}</span>: <span>{{value}}</span>
            </p>
            <p>time: {{time}}</p>
        </div>
        <div class="btn" @click='getData'>重新获取位置</div>
    </div>
</template>
<style lang='scss' scoped>
    .con {
        margin-top: 100px;
        padding: 20px;
    }
    p{
        line-height: 30px;
    }

    .btn {
        width: 200px;
        color: #fff;
        background-color: #48a4ff;
        text-align: center;
        margin: 20px auto;
        border-radius: 10px;
        padding: 10px;
        font-size: 18px;
    }
</style>
<script>
    import {getLocation} from '../../lib/wx';


    export default {
        data() {
            return {
                res: {},
                time: new Date()
            }
        },
        created() {
            this.getData();
        },
        methods: {
            getData() {
                let vm = this;
                wx.ready(function(){
                    getLocation().then((res)=>{
                        vm.res = res;
                        vm.time = new Date();
                    })
                })
            }
        }
    }
</script>