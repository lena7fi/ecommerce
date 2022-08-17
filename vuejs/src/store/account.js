import { userService } from '../services';
import router from '../router';

const user = JSON.parse(localStorage.getItem('user'));
const state = user
    ? { status: { loggedIn: true }, user }
    : { status: {}, user: null };

const actions = {
    login({ dispatch, commit }, { email, password }) {
        commit('loginRequest', { email });
        console.log(email,password)
        userService.login(email, password)
            .then(
                user => {
                    let date = new Date();
                    let today=date.getFullYear()+'/'+date.getMonth()+'/'+date.getDay()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
                    dispatch('notification/create',{notification: user.user.email +' login',updated_time: today}, {root: true})
                    commit('loginSuccess', user);
                    router.push('/dashboard');
                },
                error => {
                    commit('loginFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    },

    logout({ commit, dispatch }) {
        if(state.user)
        {
        let date = new Date();
        let today=date.getFullYear()+'/'+date.getMonth()+'/'+date.getDay()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
        dispatch('notification/create',{notification:state.user.user.email+' logout',updated_time: today}, {root: true})
        userService.logout();
        }
        commit('logout');
    },
    register({ dispatch, commit }, user) {
        commit('registerRequest', user);
        userService.register(user)
            .then(
                user => {
                    commit('registerSuccess', user);
                    console.log(user);
                    router.push('/login');
                    setTimeout(() => {
                        // display success message after route change completes
                        dispatch('alert/success', 'Registration successful', { root: true });
                        let date = new Date();
                        let today=date.getFullYear()+'/'+date.getMonth()+'/'+date.getDay()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
                        dispatch('notification/create',{notification:user.user.email + ' register',updated_time: today}, {root: true})
                    })
                },
                error => {
                    commit('registerFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    }
};

const mutations = {
    loginRequest(state, user) {
        state.status = { loggingIn: true };
        state.user = user;
    },
    loginSuccess(state, user) {
        state.status = { loggedIn: true };
        state.user = user;
    },
    loginFailure(state) {
        state.status = {};
        state.user = null;
    },
    logout(state) {
        state.status = {};
        state.user = null;
    },
    registerRequest(state, user) {
        state.status = { registering: true };
        console.log(user);
    },
    registerSuccess(state, user) {
        state.status = {};
        console.log(user);
    },
    registerFailure(state, error) {
        state.status = {};
        console.log(error);
    }
};

export const account = {
    namespaced: true,
    state,
    actions,
    mutations
};