<template>
    <div class="get-pos-name-page">
        <ul class="pos-list">
            <li class="pos" v-for='i in list'>
                <p>{{i.long}}</p>
            </li>
        </ul>
        <p class="time">{{time}}</p>
        <div class="btn" @click='getpos'>重新获取地址</div>
    </div>
</template>
<style scoped>
    .pos-list {
        margin-top: 50px;
    }
    li {
        margin: 10px;
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
    import {api_get} from '../../lib/api';
    import {getLocation} from '../../lib/wx';

    export default {
        data() {
            return {
                time: new Date(),
                list: []
            }
        },
        created() {
            this.getpos();
        },
        methods: {
            getpos() {
                let vm = this;
                wx.ready(function() {
                    getLocation().then((res)=>{
                        let longitude = res.longitude;
                        let latitude = res.latitude;
                        let pos = [longitude, latitude];
                        api_get({
                            path: 'address',
                            params: {
                                near: JSON.stringify(pos)
                            }
                        }).done(function(json){
                            vm.list = json;
                            vm.time = new Date();
                        })
                    })
                })
            }
        }
    }
</script>