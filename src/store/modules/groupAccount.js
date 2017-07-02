import groupAccountApi from '../../api/group-account';
import * as types from '../mutation-types';


export default {
    namespaced: true,

    state: {
        current: null,
        accounts: null,
    },

    mutations: {
        setCurrent(state, current) {
            state.current = current;
            $.cookie('CGA_ID', current._id.$oid);
        },

        setAccounts(state, accounts) {
            state.accounts = accounts;
        },
    },

    actions: {
        index({commit, state, rootState}) {
            let user_id = window.localStorage.getItem('USER_ID');
            if (!user_id) {
                let selfUser = rootState.user.selfUser;
                if (!selfUser) {
                    return;
                }

                user_id = selfUser._id.$oid;
            }

            return groupAccountApi.index({
                member_id: user_id,
                with_member_wechat: true,
            }).then((accounts) => {
                commit('setAccounts', accounts);
                return accounts;
            });
        },

        create({ commit, state }, accountInfo) {
            return groupAccountApi.create(accountInfo).then((account) => {
                commit('setCurrent', account);
                return account;
            });
        },

        retrieve({commit, dispatch, state, rootState}) {
            let groupAccountId = $.cookie('CGA_ID');
            if (!groupAccountId) {
                return dispatch('index').then((accounts) => {
                    if (accounts.length) {
                        let current = accounts[0];
                        commit('setCurrent', current);
                        return current;
                    }
                });
            }

            return groupAccountApi.retrieve(groupAccountId).then((account) => {
                let selfId = window.localStorage.getItem('USER_ID');
                let selfMember = null;

                let members = account.members;
                for (var i=0; i < members.length; i++) {
                    let member = members[i];
                    if (member._id && member._id.$oid === selfId) {
                        selfMember = member;
                        break;
                    }
                }

                if (!selfMember) {
                    return null;
                }

                commit('setCurrent', account);
                return account;
            });
        },
    },
}
