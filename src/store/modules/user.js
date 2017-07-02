import waterApi from '../../api/main'

export default {
    namespaced: true,

    state: {
        selfUser: null,
    },

    getters: {
        address(state) {
            let selfUser = state.selfUser;

            if (!selfUser) {
                return 'abc';
            }

            return selfUser.address.readable.slice(-3).join(' ');
        },
    },

    mutations: {
        setUser(state, user) {
            state.selfUser = user;
            window.localStorage.setItem('USER_ID', user._id.$oid);
        },
    },

    actions: {
        retrieve({commit, state}) {
            let options = {
                with_levels: true,
            };

            return waterApi.user.retrieve(null, options).then((user) => {
                commit('setUser', user);
                return user;
            });
        },

        update({commit, state}, diff) {
            let query = {
                with_levels: true,
            };

            return waterApi.user.update(diff, query).then((user) => {
                commit('setUser', user);
                return user;
            });
        },
    },
}
