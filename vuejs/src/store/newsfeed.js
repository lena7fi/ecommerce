import { newsFeedService } from '../services';

const state = {
    all: {},
};

const actions = {
    getAll({ commit }) {
        newsFeedService.getNews()
            .then(
                news => commit('getAllSuccess', news),
                error => commit('getAllFailure', error)
            );
    }
};

const mutations = {

    getAllSuccess(state, news) {
        state.all = { items: news };
    },
    getAllFailure(state, error) {
        state.all = { error };
    },
};

export const newsfeed = {
    namespaced: true,
    state,
    actions,
    mutations
};
