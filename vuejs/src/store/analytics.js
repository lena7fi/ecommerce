import { analyticService } from '../services';

const state = {
    all: {},
    total: 0,
    sell: 0,
    pl:0
};

const actions = {
    getAll({ commit }) {
        analyticService.getAll()
            .then(
                analytics => commit('getAllSuccess', analytics),
                error => commit('getAllFailure', error)
            );
    },
    create({ commit }, analytic) {
        analyticService.create(analytic)
            .then(
                analytics => commit('createSuccess', analytics),
                error => commit('createFailure', error)
            );
    },
    update({commit}, data) {
            analyticService.update(data.id, data.analytic)
                .then(
                    ()=>commit('updateSuccess', data),
                    error => commit('updateFailure', error)
                )   
    },
    delete({ commit }, id) {
        analyticService.delete(id)
            .then(
                () => commit('deleteSuccess', id),
                error => commit('deleteFailure', { id, error: error.toString() })
            );
    }
};

const mutations = {
    createSuccess(state, analytic) {
        state.all=state.all.items?state.all:{items:[]}
        state.all.items.push(analytic);
    },
    createFailure(state, error) {
        state.all = { error };
    },
    getAllSuccess(state, analytics) {
        state.all = { items: analytics };
        var t=0, s=0, pl=0;
        analytics.map(item=>{
            t+=item.buy*item.price;
            s+=item.sell*item.price;
            pl+=item.sell*item.netvar;
        });
        state.total = t;
        state.sell = s;
        state.pl = pl;
    },
    getAllFailure(state, error) {
        state.all = { error };
    },
    updateSuccess(state, data) {
        state.all.items = state.all.items?.filter(analytic => analytic.stock !== data.stock)
        state.all.items?.push(data.analytic);
    },
    updateFailure(state, { id, error }) {
        console.log(id, error, state)
    },
    deleteSuccess(state, id) {
        // remove deleted analytic from state
        state.all.items = state.all.items.filter(analytic => analytic.id !== id)
    },
    deleteFailure(state, { id, error }) {
        console.log(id, error, state)
    }
};

export const analytics = {
    namespaced: true,
    state,
    actions,
    mutations
};
