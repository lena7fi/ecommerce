import { portfolioService } from '../services';

const state = {
    all: {},
};

const actions = {
    getAll({ commit }) {
        portfolioService.getAll()
            .then(
                portfolio => commit('getAllSuccess', portfolio),
                error => commit('getAllFailure', error)
            );
    },
    create({commit, dispatch}, data){
     
        portfolioService.create(data.portfolio)
            .then(
                (res) => {
                    console.log(res)
                    dispatch('analytics/create', data.analytic, {root: true}).then(()=>{
                        setTimeout(() => {
                            let date = new Date();
                            let today=date.getFullYear()+'/'+date.getMonth()+'/'+date.getDay()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
                            dispatch('notification/create',{notification:data.notification,updated_time: today}, {root: true}).then(()=>{
                                setTimeout(() => {
                                    commit('createSuccess', data.portfolio)
                                    dispatch('alert/success',  'Success', {root:true});
                                }, 300);
                            })
                        },300);
                    })
                },
                error => {
                    dispatch('alert/error', error, {root:true});
                    commit('createFailure', error)
                }
            );
    },
    update({commit, dispatch}, data) {
    
        portfolioService.update(data.portfolio.id, data.portfolio.portfolio)
                .then(
                    (res)=>{
                        console.log(res)
                        // setTimeout(() => {
                            dispatch('analytics/update', data.analytic, {root: true}).then(()=>{
                                setTimeout(() => {
                                    let date = new Date();
                                    let today=date.getFullYear()+'/'+date.getMonth()+'/'+date.getDay()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
                                    dispatch('notification/create',{notification:data.notification,updated_time: today}, {root: true}).then(()=>{
                                        setTimeout(() => {
                                            commit('updateSuccess', data.portfolio.portfolio);
                                            dispatch('alert/success',  'Success', {root:true});
                                        }, 100);
                                    })
                                }, 100)
                            })
                        // }, 100);
                    },   
                    error => commit('updateFailure', error)
                )
    },
    delete({ commit }, id) {
        portfolioService.delete(id)
            .then(
                () => commit('deleteSuccess', id),
                error => commit('deleteFailure', { id, error: error.toString() })
            );
    }
};

const mutations = {
    getAllSuccess(state, portfolio) {
        state.all = { items: portfolio };
    },
    getAllFailure(state, error) {
        state.all = { error };
    },
    createSuccess(state, portfolio) {
        console.log(state, portfolio)
        
    },
    createFailure(state, error) {
        state.all = { error };
    },
    updateSuccess(state, portfolio) {
        console.log(portfolio, state);
    },
    updateFailure(state, { id, error }) {
        console.log(id, error, state);
    },
    deleteSuccess(state, id) {
        state.all.items = state.all.items.filter(portfolio => portfolio.id !== id)
    },
    deleteFailure(state, { id, error }) {
        console.log(id, error, state);
    }
};

export const portfolio = {
    namespaced: true,
    state,
    actions,
    mutations
};
