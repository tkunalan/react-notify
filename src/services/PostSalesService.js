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

let postSalesReceipt = (data) => {
    return new Promise((resolve, reject) => {
        fetch (sessionStorage.getItem('base_url') + '/api/sales/salesreceipt', {
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

let postInvoiceReceipt = (data) => {
    return new Promise((resolve, reject) => {
        fetch (sessionStorage.getItem('base_url') + '/api/sales/invoice', {
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


let postQuotion = (data) => {
    return new Promise((resolve, reject) => {
        fetch (sessionStorage.getItem('base_url') + '/api/sales/quotation', {
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

let postSalesPayment = (data) => {
    return new Promise((resolve, reject) => {
        fetch (sessionStorage.getItem('base_url') + '/api/sales/payment', {
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

export {
    postSalesReceipt,postInvoiceReceipt,postSalesPayment,postQuotion
}
