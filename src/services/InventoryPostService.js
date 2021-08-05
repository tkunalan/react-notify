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


let postPurchaseInvoice = (invoice) =>{

    return new Promise((resolve, reject) =>{
        fetch (sessionStorage.getItem('base_url') + '/api/purch/purchase-invoice', {
            method: "POST",
            headers: myHeaders(),
            body: JSON.stringify(invoice),
        }).then(res => res.json())

            .catch(error => console.error('Error:', error))
            .then(
                (FindResponseItem) => {
                    if (FindResponseItem !== undefined && FindResponseItem.status !== 400
                        && FindResponseItem.status !== 404 && FindResponseItem.status !== 403) {
                        resolve(FindResponseItem.purchase_invoice)
                    } else {
                        reject("error")
                    }
                });
    });

};



let postSupplierPayment = (invoice) =>{

    return new Promise((resolve, reject) =>{
        fetch (sessionStorage.getItem('base_url') + '/api/purch/supplier/payment', {
            method: "POST",
            headers: myHeaders(),
            body: JSON.stringify(invoice),
        }).then(res => res.json())

            .catch(error => console.error('Error:', error))
            .then(
                (FindResponseItem) => {
                    if (FindResponseItem !== undefined && FindResponseItem.status !== 400
                        && FindResponseItem.status !== 404 && FindResponseItem.status !== 403) {
                        resolve(FindResponseItem.payment)
                    } else {
                        reject("error")
                    }
                });
    });

};


let postPurchaseTax = (data) =>{

    return new Promise((resolve, reject) =>{
        fetch (sessionStorage.getItem('base_url') + '/api/purch/vat/purchase_vat_total', {
            method: "POST",
            headers: myHeaders(),
            body: JSON.stringify(data),
        }).then(res => res.json())

            .catch(error => console.error('Error:', error))
            .then(
                (FindResponseItem) => {
                    if (FindResponseItem !== undefined && FindResponseItem.status !== 400
                        && FindResponseItem.status !== 404 && FindResponseItem.status !== 403) {
                        resolve(FindResponseItem)
                    } else {
                        reject("error")
                    }
                });
    });

};

let postInventoryAddItemHold = (data) => {
    return new Promise((resolve, reject) => {
        fetch (sessionStorage.getItem('base_url') + '/api/purch/item/receive-inventory/update/add-items', {
            method: 'POST',
            headers: myHeaders(),
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .catch(error => console.error('Error', error))
            .then(
                (FindResponse) => {
                    if (FindResponse !== undefined && FindResponse.status !== 400
                        && FindResponse.status !== 404 && FindResponse.status !== 403) {
                        resolve (FindResponse)
                    } else {
                        reject(null)
                    }
                });
    });
};

let postInventoryRemoveItemHold = (data) => {
    return new Promise((resolve, reject) => {
        fetch (sessionStorage.getItem('base_url') + '/api/purch/item/receive-inventory/update/remove-items', {
            method: 'POST',
            headers: myHeaders(),
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .catch(error => console.error('Error', error))
            .then(
                (FindResponse) => {
                    if (FindResponse !== undefined && FindResponse.status !== 400
                        && FindResponse.status !== 404 && FindResponse.status !== 403) {
                        resolve (FindResponse)
                    } else {
                        reject(null)
                    }
                });
    });
};

let postInventoryUpdateHeaders = (data) => {
    return new Promise((resolve, reject) => {
        fetch (sessionStorage.getItem('base_url') + '/api/purch/item/receive-inventory/update/headers', {
            method: 'PUT',
            headers: myHeaders(),
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .catch(error => console.error('Error', error))
            .then(
                (FindResponse) => {
                    if (FindResponse !== undefined && FindResponse.status !== 400
                        && FindResponse.status !== 404 && FindResponse.status !== 403) {
                        resolve (FindResponse)
                    } else {
                        reject(null)
                    }
                });
    });
};

let holdInventoryDelete= (data) => {
    return new Promise((resolve, reject) => {
        fetch (sessionStorage.getItem('base_url') + '/api/purch/item/receive-inventory', {
            method: 'DELETE',
            headers: myHeaders(),
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .catch(error => console.error('Error', error))
            .then(
                (FindResponse) => {
                    if (FindResponse !== undefined && FindResponse.status !== 400
                        && FindResponse.status !== 404 && FindResponse.status !== 403) {
                        resolve (FindResponse)
                    } else {
                        reject(null)
                    }
                });
    });
};


let postInvoiceReturn = (data) => {
    return new Promise((resolve, reject) => {
        fetch (sessionStorage.getItem('base_url') + '/api/purch/purchase-return', {
            method: 'POST',
            headers: myHeaders(),
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .catch(error => console.error('Error', error))
            .then(
                (FindResponse) => {
                    if (FindResponse !== undefined && FindResponse.status !== 400
                        && FindResponse.status !== 404 && FindResponse.status !== 403) {
                        resolve (FindResponse)
                    } else {
                        reject(null)
                    }
                });
    });
};

let postPurchaseOrder = (purchaseOrder) =>{

    return new Promise((resolve, reject) =>{
        fetch (sessionStorage.getItem('base_url') + '/api/purch/item/purchase-order', {
            method: "POST",
            headers: myHeaders(),
            body: JSON.stringify(purchaseOrder),
        }).then(res => res.json())

            .catch(error => console.error('Error:', error))
            .then(
                (FindResponseItem) => {
                    if (FindResponseItem !== undefined && FindResponseItem.status !== 400
                        && FindResponseItem.status !== 404 && FindResponseItem.status !== 403) {
                        resolve(FindResponseItem.purchase_order)
                    }
                    else {
                        reject("error");
                    }
                });
    });

};

export {postPurchaseInvoice,postSupplierPayment,postPurchaseTax,
    postInventoryAddItemHold,postInventoryRemoveItemHold,postInventoryUpdateHeaders,
    holdInventoryDelete,postInvoiceReturn,postPurchaseOrder
}
