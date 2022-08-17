import { authHeader } from "@/helpers";

export const notificationservice = {
    getAll,
    getNotifications,
    create,
    // update,
    delete: _delete
};

function getAll(){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/api/notifications`, requestOptions).then(handleResponse);
}
function getNotifications(id) {
    const requestOptions ={
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`/api/notifications/${id}`, requestOptions).then(handleResponse);
}

function create(notifications){
    console.log(notifications)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notification: notifications })
    };

    return fetch(`/api/notifications`, requestOptions).then(handleResponse);
}

// function update(id, notifications){
//     const requestOptions = {
//         method: 'PATCH',
//         headers: { ...authHeader(), 'Content-Type': 'application/json' },
//         body: JSON.stringify({ notifications: notifications })
//     };
//     return fetch(`/api/notifications/${id}`, requestOptions).then(handleResponse);
// }

function _delete(id){
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(`/api/notifications/${id}`, requestOptions).then(handleResponse);
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