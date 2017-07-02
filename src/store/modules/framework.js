export default {
    namespaced: true,

    state: {
        title: '咕噜送水',

        actionBarVisible: true,
        activeActionName: '首页',
    },

    mutations: {
        setTitle(state, title) {
            state.title = title;
        },

        showActionBar(state) {
            state.actionBarVisible = true;
        },

        hideActionBar(state) {
            state.actionBarVisible = false;
        },

        setActiveActionName(state, activeActionName) {
            state.activeActionName = activeActionName;
            state.actionBarVisible = true;
        },
    },
}
