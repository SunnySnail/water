<template>
    <div class="show-pos-page">
    </div>
</template>
<script>
    import {api_get} from '../../lib/api';
    import {getLocation} from '../../lib/wx';

    export default {
        data() {
            return {
            }
        },
        created() {
            console.log(this.$route.params.id);

            api_get({
                path: 'address/'+this.$route.params.id
            }).done(function(json){
                console.log(json);

                let latitude = json.gcs[1];
                let longitude = json.gcs[0];
                let name = json.short;
                let address = json.long;
                wx.ready(function() {
                    getLocation().then((res)=>{
                        wx.openLocation({
                            latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
                            longitude: longitude, // 经度，浮点数，范围为180 ~ -180。
                            name: name, // 位置名
                            address: address, // 地址详情说明
                            scale: 15, // 地图缩放级别,整形值,范围从1~28。默认为最大
                            infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
                        });
                    })
                })
            })
        }
    }
</script>