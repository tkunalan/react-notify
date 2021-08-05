import React from "react";

function myHeaders() {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'user_id': sessionStorage.getItem('user_id'),
        'company_id': sessionStorage.getItem('company_id'),
        'client_id': sessionStorage.getItem('client_id'),
        'authorization': sessionStorage.getItem('authorization'),
    };

    return headers;
}

let postWorkOrder = (data) =>{

    return new Promise((resolve, reject) => {
        fetch(sessionStorage.getItem('base_url') + '/api/mnf/workorder', {
            method: 'POST',
            headers: myHeaders(),
            body: JSON.stringify(data),
        })

            .then(res => res.json())
            .then(
                (FindResponseItem) => {
                    if (FindResponseItem.status !== 400 && FindResponseItem.status !== 404 && FindResponseItem.status !== 403 ){
                        resolve(FindResponseItem)
                    }
                    else {
                        reject(null)
                    }
                });
    });
};

export {
    postWorkOrder,
}
