<template>
    <div class="call-order">
        <div class="product-pic" :style='{backgroundImage:"url("+pic+")"}'></div>
        <div class="product-info">
            <p class="product-name">大峡谷桶装水</p>
            <p class="product-intro">大峡谷简介大峡谷简介大峡谷简介大峡谷简介大峡谷简介大峡谷简介大峡谷简介大峡谷简介</p>
        </div>
        <div class="send-info">
            <div class="title">选择配送</div>
            <div class="fill-order">
                <div class="water-num">
                    <span class="total-num">总数量：<i>{{total_num}}桶</i></span>
                    <span class="left-num">剩余数量：<i>{{left_num - num}}桶</i></span>
                </div>
                <div class="order-num">
                    <span>配送数量：</span><i id='minus' :class='{disabled:disabled}' @click='minus'>-</i><input type="number" v-model.number='num' placeholder="1"><i id="add" @click='add' :class='{disabled:overnum}'>+</i>
                </div>
                <div class="send-address">
                    配送至：<span>华南理工大学南校区C5-311</span>
                </div>
            </div>
        </div>
        <div class="submit-order">提交配送单</div>
    </div>
</template>
<script>
    import './call-order.scss';

    export default {
        data() {
            return {
                disabled: true,
                num: 1,
                left_num: 10,
                total_num: 20,
                pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1925040274,390833368&fm=23&gp=0.jpg'
            }
        },
        watch: {
            num: function() {
                this.num = Number(this.num)<=0?'':Number(this.num);
                if(this.num > 1) {
                    this.disabled = false;
                }else {
                    this.disabled = true;
                }
                if(this.num >= this.left_num){
                    this.overnum = true;
                    this.num = this.left_num;
                }else{
                    this.overnum = false;
                }
            }
        },
        methods: {
            add() {
                this.num++;
                this.disabled = false;
                if(this.num > this.left_num){
                    this.overnum = true;
                }
            },
            minus() {
                this.num = this.num<=1?1:--this.num;

                if(this.num <= 1) {
                    this.disabled = true;
                }
            }
        }
    }
</script>