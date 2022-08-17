import { authHeader } from "@/helpers";

export const pricehistoryservice = {
    getAll,
    getPriceHistory,
    getStockHistorys,
    create,
    // update,
    delete: _delete
};

function getAll(){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/api/pricehistory`, requestOptions).then(handleResponse);
}

function getStockHistorys(){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/api/stockhistorys`, requestOptions).then(handleResponse);
}

function getPriceHistory(id) {
    const requestOptions ={
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`/api/pricehistory/${id}`, requestOptions).then(handleResponse);
}

function create(pricehistorys){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pricehistorys: pricehistorys })
    };

    return fetch(`/api/pricehistory`, requestOptions).then(handleResponse);
}

// function update(id, pricehistorys){
//     const requestOptions = {
//         method: 'PATCH',
//         headers: { ...authHeader(), 'Content-Type': 'application/json' },
//         body: JSON.stringify({ pricehistorys: pricehistorys })
//     };
//     return fetch(`/api/pricehistory/${id}`, requestOptions).then(handleResponse);
// }

function _delete(id){
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(`/api/pricehistory/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if(!response.ok) {
            if(response.status === 401) {
                _delete();
                location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}