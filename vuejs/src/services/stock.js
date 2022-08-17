import { authHeader } from "@/helpers";

export const stockService = {
    getAll,
    getStock,
    uploadxlsx,
    create,
    update,
    delete: _delete
};

function getAll(){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/api/stocks`, requestOptions).then(handleResponse);
}
function getStock(id) {
    const requestOptions ={
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`/api/stock/${id}`, requestOptions).then(handleResponse);
}

function create(stock){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stock: stock })
    };

    return fetch(`/api/stocks`, requestOptions).then(handleResponse);
}

function uploadxlsx(stocks) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stocks: stocks })
    };

    return fetch(`/api/stocks`, requestOptions).then(handleResponse);
}

function update(stock){
    const requestOptions = {
        method: 'PATCH',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({ stock: stock })
    };
    return fetch(`/api/stocks/${stock.id}`, requestOptions).then(handleResponse);
}

function _delete(id){
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(`/api/stocks/${id}`, requestOptions).then(handleResponse);
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