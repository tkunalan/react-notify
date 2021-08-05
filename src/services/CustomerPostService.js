
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


let postCustomerPayment = (data) =>{

    return new Promise((resolve, reject) =>{
        fetch (sessionStorage.getItem('base_url') + '/api/sales/payment', {
            method: "POST",
            headers: myHeaders(),
            body: JSON.stringify(data),
        }).then(res => res.json())

            .catch(error => console.error('Error:', error))
            .then(
                (FindResponseItem) => {
                    if (FindResponseItem !== undefined && FindResponseItem.status !== 400
                        && FindResponseItem.status !== 404 && FindResponseItem.status !== 403) {
                        resolve("success")
                    } else {
                        reject("error")
                    }
                });
    });
};

let postCustomerDetails = (customer) => {

    return new Promise((resolve, reject) => {
        fetch (sessionStorage.getItem('base_url') + '/api/cust/customer', {
            method: 'POST',
            headers: myHeaders(),
            body: JSON.stringify(customer),
        }).then(res => res.json())

            .catch(error => console.error('Error', error))
            .then(
                (FindResponse) => {
                    if (FindResponse !== undefined && FindResponse.status !== 400
                        && FindResponse.status !== 404 && FindResponse.status !== 403) {
                        if(FindResponse.customer.length > 0){
                            resolve(FindResponse.customer)
                        }else{
                            reject(null)
                        }
                    } else {
                        reject(null)
                    }
                });
    });
};

let updateCustomerDetails = (data) => {
    return new Promise((resolve, reject) => {
        fetch(sessionStorage.getItem('base_url') + '/api/cust/customer', {
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


export {postCustomerPayment,postCustomerDetails,updateCustomerDetails}
