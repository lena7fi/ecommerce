import { stockService } from '../services';

const state = {
    all: {},
};

const actions = {
    getAll({ commit }) {
        stockService.getAll()
            .then(
                stocks => commit('getAllSuccess', stocks),
                error => commit('getAllFailure', error)
            );
    },
    create({ commit }) {
        stockService.create()
            .then(
                stocks => commit('createSuccess', stocks),
                error => commit('createFailure', error)
            );
    },
    uploadxlsx({commit}, data) {
        stockService.uploadxlsx(data).then(()=>{
            commit('uploadSuccess',data);
        })
    },
    update({commit}, stock) {
            stockService.update(stock)
                .then(
                    ()=>commit('updateSuccess', stock),
                    error => commit('updateFailure', error)
                )   
    },
    delete({ commit }, id) {
        stockService.delete(id)
            .then(
                () => commit('deleteSuccess', id),
                error => commit('deleteFailure', { id, error: error.toString() })
            );
    }
};

const mutations = {
    createSuccess(state, _stock){
        state.all.items = state.all.items.push(stock =>
            stock.id === _stock.id
                ? { ...stock, _stock }
                : stock
        )
    },
    createFailure(state, { id,error }){
         state.all.items = state.items.push(stock => {
            if (stock.id === id) {
                const { ...stockCopy } = stock;
                return { ...stockCopy, CreateError: error };
            }
            return " ";
        })
    },
    uploadSuccess(state, data) {
        state.all.items = data;
    },
    getAllSuccess(state, stocks) {
        state.all = { items: stocks };
    },
    getAllFailure(state, error) {
        state.all = { error };
    },
    updateSuccess(state, _stock) {
        state.all.items = state.all.items.map(stock =>
            stock.id === _stock.id
                ? { ...stock, _stock }
                : stock
        )
    },
    updateFailure(state, { id, error }) {
        state.all.items = state.items.map(stock => {
            if (stock.id === id) {
                // make copy of stock without 'deleting:true' property
                const { ...stockCopy } = stock;
                // return copy of stock with 'deleteError:[error]' property
                return { ...stockCopy, deleteError: error };
            }

            return stock;
        })
    },
    deleteSuccess(state, id) {
        // remove deleted stock from state
        state.all.items = state.all.items.filter(stock => stock.id !== id)
    },
    deleteFailure(state, { id, error }) {
        // remove 'deleting:true' property and add 'deleteError:[error]' property to stock 
        state.all.items = state.items.map(stock => {
            if (stock.id === id) {
                // make copy of stock without 'deleting:true' property
                const { ...stockCopy } = stock;
                // return copy of stock with 'deleteError:[error]' property
                return { ...stockCopy, deleteError: error };
            }

            return stock;
        })
    }
};

export const stock = {
    namespaced: true,
    state,
    actions,
    mutations
};
