import { notificationservice } from '../services';

const state = {
    all: {},
};

const actions = {
    getAll({ commit }) {
        notificationservice.getAll()
            .then(
                notifications => commit('getAllSuccess', notifications),
                error => commit('getAllFailure', error)
            );
    },
    create({ commit }, notification) {
        notificationservice.create(notification)
            .then(
                notifications => commit('createSuccess', notifications),
                error => commit('createFailure', error)
            );
    },
    delete({ commit }, id) {
        notificationservice.delete(id)
            .then(
                () => commit('deleteSuccess', id),
                error => commit('deleteFailure', { id, error: error.toString() })
            );
    }
};

const mutations = {
    createSuccess(state, notification) {
        state.all = {new : notification}
    },
    createFailure(state, error) {
        state.all = { error };
    },
    getAllSuccess(state, notifications) {
        state.all = { items: notifications };
    },
    getAllFailure(state, error) {
        state.all = { error };
    },
    deleteSuccess(state, id) {
        // remove deleted notification from state
        state.all.items = state.all.items.filter(notification => notification.id !== id)
    },
    deleteFailure(state, { id, error }) {
        console.log(id, error, state);
    }
};

export const notification = {
    namespaced: true,
    state,
    actions,
    mutations
};
