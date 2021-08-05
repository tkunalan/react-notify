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


let updateItem = (data) =>{

    return new Promise((resolve, reject) => {
        fetch(sessionStorage.getItem('base_url') + '/api/item/item', {
            method: 'PUT',
            headers: myHeaders(),
            body: JSON.stringify(data),
        }).then(res => res.json())

            .catch(error => console.error('Error:', error))
            .then(
                (FindResponseItem) => {

                    if (FindResponseItem !== undefined && FindResponseItem.status !== 400
                        && FindResponseItem.status !== 404 && FindResponseItem.status !== 403) {
                        if(FindResponseItem.item.length > 0){
                            resolve(FindResponseItem.item)
                        }else{
                            reject(null)
                        }

                    } else {
                        reject(null)
                    }

                });
    });
};


let updateInvItem = (data) =>{

    return new Promise((resolve, reject) => {
        fetch(sessionStorage.getItem('base_url') + '/api/inv/item/inventory', {
            method: 'POST',
            headers: myHeaders(),
            body: JSON.stringify(data),
        }).then(res => res.json())

            .catch(error => console.error('Error:', error))
            .then(
                (FindResponseItem) => {

                    if (FindResponseItem !== undefined && FindResponseItem.status !== 400
                        && FindResponseItem.status !== 404 && FindResponseItem.status !== 403) {
                        if(FindResponseItem.item.length > 0){
                            resolve(FindResponseItem.item)
                        }else{
                            reject(null)
                        }

                    } else {
                        reject(null)
                    }

                });
    });
};

let deleteItem = (bid,itemNumber) =>{

    return new Promise((resolve, reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/item/item/item_number/bid?item_bid='+bid+'&item_number='+itemNumber;

        fetch(URL_REGISTER, {
            method: 'DELETE',
            headers: myHeaders(),
        }).then(res => res.json())

            .catch(error => console.error('Error:', error))
            .then(
                (FindResponseItem) => {

                    if (FindResponseItem !== undefined && FindResponseItem.status !== 400
                        && FindResponseItem.status !== 404 && FindResponseItem.status !== 403) {
                        if(FindResponseItem.item.length > 0){
                            resolve(FindResponseItem.item)
                        }else{
                            reject(null)
                        }

                    } else {
                        reject(null)
                    }

                });
    });
};

let deleteInventoryItem = (bid,itemNumber) =>{

    return new Promise((resolve, reject) => {

        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/inv/item/inventory?item_bid='+bid+'&item_number='+itemNumber;

        fetch(URL_REGISTER, {
            method: 'DELETE',
            headers: myHeaders(),
        }).then(res => res.json())

            .catch(error => console.error('Error:', error))
            .then(
                (FindResponseItem) => {
                    if (FindResponseItem !== undefined && FindResponseItem.status !== 400
                        && FindResponseItem.status !== 404 && FindResponseItem.status !== 403) {
                        if(FindResponseItem.item){
                            resolve(FindResponseItem.item)
                        }else{
                            reject(null)
                        }

                    } else {
                        reject(null)
                    }

                });
    });
};


let deleteHoldOrder = (data) =>{

    return new Promise((resolve, reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/sales/salesorder/update/order-status';

        fetch(URL_REGISTER, {
            method: 'POST',
            headers: myHeaders(),
            body: JSON.stringify(data),
        }).then(res => res.json())

            .catch(error => console.error('Error:', error))
            .then(
                (FindResponseItem) => {

                    if (FindResponseItem !== undefined && FindResponseItem.status !== 400
                        && FindResponseItem.status !== 404 && FindResponseItem.status !== 403) {
                        if(FindResponseItem.salesorder !== null){
                            resolve(FindResponseItem)
                        }else{
                            reject(null)
                        }

                    } else {
                        reject(null)
                    }

                });
    });
};

let updateLocation = (location) =>{

    return new Promise((resolve, reject) =>{
        fetch (sessionStorage.getItem('base_url') + '/api/inv/inventory-location', {
            method: "PUT",
            headers: myHeaders(),
            body: JSON.stringify(location),
        }).then(res => res.json())

            .catch(error => console.error('Error:', error))
            .then(
                (FindResponseItem) => {
                    if (FindResponseItem !== undefined && FindResponseItem.status !== 400
                        && FindResponseItem.status !== 404 && FindResponseItem.status !== 403) {
                        resolve(FindResponseItem.inventory_location[0])
                    } else {
                        reject("error")
                    }
                });
    });

};


let updateReturnCreditTotal = (CreditTotal) =>{

    return new Promise((resolve, reject) =>{
        fetch (sessionStorage.getItem('base_url') + '/api/sales/return/update-return-credit-total', {
            method: "PUT",
            headers: myHeaders(),
            body: JSON.stringify(CreditTotal),
        }).then(res => res.json())

            .catch(error => console.error('Error:', error))
            .then(
                (FindResponseItem) => {
                    resolve(FindResponseItem);
                });
    });

};

let updateBranch = (branch) =>{

    return new Promise((resolve, reject) =>{
        fetch (sessionStorage.getItem('base_url') + '/api/com/branch', {
            method: "POST",
            headers: myHeaders(),
            body: JSON.stringify(branch),
        }).then(res => res.json())

            .catch(error => console.error('Error:', error))
            .then(
                (FindResponseItem) => {
                    if (FindResponseItem !== undefined && FindResponseItem.status !== 400
                        && FindResponseItem.status !== 404 && FindResponseItem.status !== 403) {
                        resolve(FindResponseItem.branch[0])
                    } else {
                        reject("error")
                    }
                });
    });

};

export {updateItem,deleteItem,deleteInventoryItem,
    updateInvItem,deleteHoldOrder,updateLocation,updateBranch,
    updateReturnCreditTotal,
}
