<template>
    <div class="member-section">
        <ul class="member-list" v-for='m in members'>
            <li class="member">
                <span class="avatar" :style='"backgroundImage: url("+m.wechat.headimgurl+")"'></span>
                <span class="username">{{m.wechat.nickname}}</span>
                <span class="tag">{{m.roles.join(' ')}}</span>
                <transition name="slide-left">
                <div class="edit-con" v-show="edit">
                    <span class="iconfont icon-iconfontcolor93"></span>
                </div>
                </transition>
            </li>
        </ul>
        <div class="member-btn">
            <router-link
                class="invite-btn btn"
                :to="'/GroupAccount/invite/'+$route.params.id">邀请伙伴</router-link>
            <div class="edit-btn btn" @click.stop="edit=!edit">{{edit?'保存':'编辑'}}</div>
        </div>
    </div>
</template>
<script>
    import './main.scss';

    export default {
        data() {

            return {
                memberList: [
                    {
                        headImg: 'http://wx.qlogo.cn/mmopen/icuaHEJoy4EUq9q3pfal5ojlxAyDnbpxOcj0zog7OUiaRqibSJ9weFEZNtOjiaBQ7xyumWAibjsWTu3AyDibNcOdWxJoDKibzgibP8D6/0',
                        username: '小燕子',
                        tag: '管理员'
                    },

                    {
                        headImg: 'http://wx.qlogo.cn/mmopen/icuaHEJoy4EUq9q3pfal5ojlxAyDnbpxOcj0zog7OUiaRqibSJ9weFEZNtOjiaBQ7xyumWAibjsWTu3AyDibNcOdWxJoDKibzgibP8D6/0',
                        username: '成员B',
                        tag: '成员'
                    },

                    {
                        headImg: 'http://wx.qlogo.cn/mmopen/icuaHEJoy4EUq9q3pfal5ojlxAyDnbpxOcj0zog7OUiaRqibSJ9weFEZNtOjiaBQ7xyumWAibjsWTu3AyDibNcOdWxJoDKibzgibP8D6/0',
                        username: '成员C',
                        tag: '成员'
                    },

                    {
                        headImg: 'http://wx.qlogo.cn/mmopen/icuaHEJoy4EUq9q3pfal5ojlxAyDnbpxOcj0zog7OUiaRqibSJ9weFEZNtOjiaBQ7xyumWAibjsWTu3AyDibNcOdWxJoDKibzgibP8D6/0',
                        username: '成员D',
                        tag: '成员'
                    }

                ],

                edit: false
            };
        },

        props: {
            members: {
                type: Array,
                require: true,
            },
        }
    }
</script>
