import { userService } from '../services';

const state = {
    all: {},
};

const actions = {
    getAll({ commit }) {
        commit('getAllRequest');

        userService.getAll()
            .then(
                users => commit('getAllSuccess', users),
                error => commit('getAllFailure', error)
            );
    },
    update({commit, dispatch}, user) {
            userService.update(user)
                .then(
                    ()=>{
                        commit('updateSuccess', user)
                        let date = new Date();
                        let today=date.getFullYear()+'/'+date.getMonth()+'/'+date.getDay()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
                        dispatch('notification/create',{notification:'Profile updated',updated_time: today}, {root: true})
                    },
                    error => commit('updateFailure', error)
                )   
    },
    delete({ commit, dispatch}, id) {
        commit('deleteRequest', id);

        userService.delete(id)
            .then(
                () => {
                    commit('deleteSuccess', id)
                    let date = new Date();
                        let today=date.getFullYear()+'/'+date.getMonth()+'/'+date.getDay()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
                        dispatch('notification/create',{notification:'Profile delete',updated_time: today}, {root: true})
                },
                error => commit('deleteFailure', { id, error: error.toString() })
            );
    }
};

const mutations = {
    getAllRequest(state) {
        state.all = { loading: true };
    },
    getAllSuccess(state, users) {
        state.all = { items: users };
    },
    getAllFailure(state, error) {
        state.all = { error };
    },
    updateSuccess(state, _user) {
        console.log(state.all.items);
        state.all.items = state.all.items.map(user =>
            user.id === _user.id
                ? { ...user, _user }
                : user
        )
    },
    updateFailure(state, { id, error }) {
        state.all.items = state.items.map(user => {
            if (user.id === id) {
                // make copy of user without 'deleting:true' property
                const { ...userCopy } = user;
                // return copy of user with 'deleteError:[error]' property
                return { ...userCopy, deleteError: error };
            }

            return user;
        })
    },
    deleteRequest(state, id) {
        // add 'deleting:true' property to user being deleted
        state.all.items = state.all.items.map(user =>
            user.id === id
                ? { ...user, deleting: true }
                : user
        )
    },
    deleteSuccess(state, id) {
        // remove deleted user from state
        state.all.items = state.all.items.filter(user => user.id !== id)
    },
    deleteFailure(state, { id, error }) {
        // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
        state.all.items = state.items.map(user => {
            if (user.id === id) {
                // make copy of user without 'deleting:true' property
                const { ...userCopy } = user;
                // return copy of user with 'deleteError:[error]' property
                return { ...userCopy, deleteError: error };
            }

            return user;
        })
    }
};

export const users = {
    namespaced: true,
    state,
    actions,
    mutations
};
