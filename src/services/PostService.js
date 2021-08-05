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

const postService = (url,data,auth) =>{

    return new Promise((resolve, reject) => {
        fetch(sessionStorage.getItem('base_url') + url, {
            method: 'POST',
            headers: myHeaders(auth),
            body: JSON.stringify(data),
        })

            .then(res => res.json())
            .then(
                (FindResponse) => {
                    if (FindResponse !== undefined && FindResponse.status !== 400
                        && FindResponse.status !== 404 && FindResponse.status !== 403) {
                        resolve(FindResponse);
                    } else {
                        reject(null)
                    }
                });
    });
};

let userLogin = (data) =>{

    return new Promise((resolve, reject) => {
        fetch(sessionStorage.getItem('base_url') + '/api/auth/user/online/login', {
            method: 'POST',
            headers: myHeaders(),
            body: JSON.stringify(data),
        })

            .then(res => res.json())
            .then(
                (FindResponseItem) => {
                    if (FindResponseItem.user !== undefined && FindResponseItem.user.status !== 401){
                        resolve(FindResponseItem)
                    }
                    else {
                        reject(null)
                    }
                });
    });
};

let payHereResponse = (url) =>{

    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            //body: JSON.stringify(data),
        })

            .then(res => res.json())
            .then(
                (response) => {
                    if (response !== undefined){
                        resolve(response)
                    }
                    else {
                        reject(null)
                    }
                });
    });
};

let addUserStep1 = (data) =>{

    return new Promise((resolve, reject) => {
        fetch(sessionStorage.getItem('base_url') + '/api/auth/register-online-add-user', {
            method: 'POST',
            headers: myHeaders(),
            body: JSON.stringify(data),
        })

            .then(res => res.json())
            .then(
                (FindResponse) => {
                    if (FindResponse.register_adduser !== undefined && FindResponse.register_adduser.status !== 401){
                        resolve(FindResponse)
                    }
                    else {
                        reject(null)
                    }
                });
    });
};

let addUserStep2 = (data) =>{

    return new Promise((resolve, reject) => {
        fetch(sessionStorage.getItem('base_url') + '/api/auth/register-online-user-step2', {
            method: 'POST',
            headers: myHeaders(),
            body: JSON.stringify(data),
        })

            .then(res => res.json())
            .then(
                (FindResponse) => {
                    if (FindResponse.register_step2 !== undefined && FindResponse.register_step2.status !== 401){
                        resolve(FindResponse)
                    }
                    else {
                        reject(null)
                    }
                });
    });
};

let postCompanyDetails = (data) =>{

    return new Promise((resolve, reject) => {
        fetch(sessionStorage.getItem('base_url') + '/api/com/company', {
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

let postBranches = (data) =>{

    return new Promise((resolve, reject) => {
        fetch(sessionStorage.getItem('base_url') + '/api/com/branch', {
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



let postHoldDiscount = (data) =>{

    return new Promise((resolve, reject) => {
        fetch(sessionStorage.getItem('base_url') + '/api/sales/salesorder/update/discount-total', {
            method: 'POST',
            headers: myHeaders(),
            body: JSON.stringify(data),
        })

            .then(res => res.json())
            .then(
                (FindResponseItem) => {
                    if (FindResponseItem.salesorder !== undefined){
                        resolve(FindResponseItem)
                    }
                    else {
                        reject(null)
                    }
                });
    });
};


let postHoldServiceCharge = (data) =>{

    return new Promise((resolve, reject) => {
        fetch(sessionStorage.getItem('base_url') + '/api/sales/salesorder/update/service-charge', {
            method: 'POST',
            headers: myHeaders(),
            body: JSON.stringify(data),
        })

            .then(res => res.json())
            .then(
                (FindResponseItem) => {
                    if (FindResponseItem.salesorder !== undefined){
                        resolve(FindResponseItem)
                    }
                    else {
                        reject(null)
                    }
                });
    });
};




let postItem = (data) =>{

    return new Promise((resolve, reject) => {
        fetch(sessionStorage.getItem('base_url') + '/api/item/item', {
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

let postReceiveInventory = (inventory) =>{

    return new Promise((resolve, reject) =>{
        fetch (sessionStorage.getItem('base_url') + '/api/purch/item/receive-inventory', {
            method: "POST",
            headers: myHeaders(),
            body: JSON.stringify(inventory),
        }).then(res => res.json())

            .catch(error => console.error('Error:', error))
            .then(
                (FindResponseItem) => {
                    if (FindResponseItem !== undefined && FindResponseItem.status !== 400
                         && FindResponseItem.status !== 404 && FindResponseItem.status !== 403) {
                        resolve(FindResponseItem.receive_inventory)
                    }
                    else {
                        reject("error");
                    }
                });
    });

};

let postSupplierDetails = (supplier) => {

    return new Promise((resolve, reject) => {
        fetch (sessionStorage.getItem('base_url') + '/api/purch/supplier/supplier', {
             method: 'POST',
             headers: myHeaders(),
             body: JSON.stringify(supplier),
        }).then(res => res.json())

            .catch(error => console.error('Error', error))
            .then(
                (FindResponseSupplier) => {
                    if (FindResponseSupplier !== undefined && FindResponseSupplier.status !== 400
                        && FindResponseSupplier.status !== 404 && FindResponseSupplier.status !== 403) {
                            if(FindResponseSupplier.supplier.length > 0){
                                resolve(FindResponseSupplier.supplier)
                            }else{
                                reject(null)
                            }
                   } else {
                       reject(null)
                   }
                });
    });
};

let postPreferenceSetting = (settings) => {
    console.log( myHeaders()," myHeaders()")
    return new Promise((resolve, reject) => {
        fetch (sessionStorage.getItem('base_url') + '/api/com/prefs', {
            method: 'POST',
            headers: myHeaders(),
            body: JSON.stringify(settings),
        }).then(res => res.json())

            .catch(error => console.error('Error', error))
            .then(
                (FindResponse) => {
                    if (FindResponse !== undefined && FindResponse.status !== 400
                        && FindResponse.status !== 404 && FindResponse.status !== 403) {
                        resolve (FindResponse.perf[0])
                    } else {
                        reject(null)
                    }
                });
    });
};


let postSalesHold = (holdData) => {
    return new Promise((resolve, reject) => {
        fetch (sessionStorage.getItem('base_url') + '/api/sales/salesorder', {
            method: 'POST',
            headers: myHeaders(),
            body: JSON.stringify(holdData),
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


let postUpdateSalesHoldStatus = (holdData,holdOrderId) => {
    return new Promise((resolve, reject) => {
        fetch (sessionStorage.getItem('base_url') + '/api/sales/salesorder/update/convert-to-salesreceipt/'+holdOrderId, {
            method: 'POST',
            headers: myHeaders(),
            body: JSON.stringify(holdData),
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

let postUpdateSalesOrder = (holdData) => {
    return new Promise((resolve, reject) => {
        fetch(sessionStorage.getItem('base_url') + '/api/sales/salesorder/update/add-items', {
            method: 'POST',
            headers: myHeaders(),
            body: JSON.stringify(holdData),
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

let postUpdateSalesOrderHeader = (holdData) => {
    return new Promise((resolve, reject) => {
        fetch(sessionStorage.getItem('base_url') + '/api/sales/salesorder/headers', {
            method: 'PUT',
            headers: myHeaders(),
            body: JSON.stringify(holdData),
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

let postRemoveItemsSalesOrder = (holdData) => {
    return new Promise((resolve, reject) => {
        fetch(sessionStorage.getItem('base_url') + '/api/sales/salesorder/update/remove-items', {
            method: 'POST',
            headers: myHeaders(),
            body: JSON.stringify(holdData),
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


let postLocation = (location) =>{

    return new Promise((resolve, reject) =>{
        fetch (sessionStorage.getItem('base_url') + '/api/inv/inventory-location', {
            method: "POST",
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

let postBank = (bank) =>{

    return new Promise((resolve, reject) =>{
        fetch (sessionStorage.getItem('base_url') + '/api/sales/bank_account', {
            method: "POST",
            headers: myHeaders(),
            body: JSON.stringify(bank),
        }).then(res => res.json())

            .catch(error => console.error('Error:', error))
            .then(
                (FindResponseItem) => {
                    if (FindResponseItem !== undefined && FindResponseItem.status !== 400
                        && FindResponseItem.status !== 404 && FindResponseItem.status !== 403) {
                        resolve(FindResponseItem.bank_account[0])
                    } else {
                        reject("error")
                    }
                });
    });

};

let isNotExitsLocation = (location) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/inv/inventory-location/' + location;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {

                    if(FindResponse.inventory_location.length > 0){
                        resolve(false)
                    }
                    else {
                        resolve(true)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });
};

let isNotExitsBranch = (branch) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/com/branch/' + branch;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {

                    if(FindResponse.branch.length > 0){
                        resolve(false)
                    }
                    else {
                        resolve(true)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });
};

let isNotExitsBank = (bankId) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/sales/bank_account/' + bankId;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {

                    if(FindResponse.bank_accounts.length > 0){
                        resolve(false)
                    }
                    else {
                        resolve(true)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });
};


let getBranchById = (branch) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/com/branch/' + branch;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {

                    if(FindResponse.branch.length > 0){
                        resolve(FindResponse.branch)
                    }
                    else {
                        reject(null)
                    }
                },
                (error) => {
                    reject(null)
                }
            )
    });
};

let postTax = (tax) =>{

    return new Promise((resolve, reject) =>{
        fetch (sessionStorage.getItem('base_url') + '/api/sales/vatcode', {
            method: "POST",
            headers: myHeaders(),
            body: JSON.stringify(tax),
        }).then(res => res.json())

            .catch(error => console.error('Error:', error))
            .then(
                (FindResponseItem) => {
                    if (FindResponseItem !== undefined && FindResponseItem.status !== 400
                        && FindResponseItem.status !== 404 && FindResponseItem.status !== 403) {
                        resolve(FindResponseItem.vatcode[0])
                    } else {
                        reject("error")
                    }
                });
    });

};

let postItemForTaxTotal = (taxTotal) => {
    return new Promise((resolve, reject) => {
        fetch (sessionStorage.getItem('base_url') + '/api/sales/vat/vat_total', {
            method: 'POST',
            headers: myHeaders(),
            body: JSON.stringify(taxTotal),
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

let postLoyalty = (loyalty) =>{

    return new Promise((resolve, reject) =>{
        fetch (sessionStorage.getItem('base_url') + '/api/rewards/reg/card', {
            method: "POST",
            headers: myHeaders(),
            body: JSON.stringify(loyalty),
        }).then(res => res.json())

            .catch(error => console.error('Error:', error))
            .then(
                (FindResponseItem) => {
                    if (FindResponseItem !== undefined && FindResponseItem.status !== 400
                        && FindResponseItem.status !== 404 && FindResponseItem.status !== 403) {
                        resolve(FindResponseItem.cards)
                    } else {
                        reject("error")
                    }
                });
    });

};

let postSalesReturn = (data) => {
    return new Promise((resolve, reject) => {
        fetch (sessionStorage.getItem('base_url') + '/api/sales/return', {
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

let smsGateway = (data) => {

    let myHeaders = {
        'Accept': 'application/json'
    };

    return new Promise((resolve, reject) => {
        fetch ('http://34.222.119.100/kale-sms-gateway/index.php', {
            method: 'POST',
            body: JSON.stringify(data),
            headers :myHeaders

        })
            .then(res => {res.json();})
            .then(
                (FindResponse) => {
                    if (FindResponse !== undefined && FindResponse.status !== 400
                        && FindResponse.status !== 404 && FindResponse.status !== 403) {
                        resolve (FindResponse);

                    } else {
                        reject(null);
                    }
                })
            .catch(error => {
                console.error('Error', error);
            })
    });
};

let postAddExpense = (data) => {
    return new Promise((resolve, reject) => {
        fetch (sessionStorage.getItem('base_url') + '/api/expense/expense', {
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

let postStockAdjustmentDetails = (data) => {
    return new Promise((resolve, reject) => {
        fetch (sessionStorage.getItem('base_url') + '/api/inv/inventory-adj', {
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

let postWriteOffItemsDetails = (data) => {
    return new Promise((resolve, reject) => {
        fetch (sessionStorage.getItem('base_url') + '/api/inv/writeoff', {
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

let postTOG = (data) => {
    return new Promise((resolve, reject) => {
        fetch (sessionStorage.getItem('base_url') + '/api/inv/item/tog', {
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



export{postService,userLogin,postCompanyDetails,postItem,postReceiveInventory,
    postSupplierDetails,postPreferenceSetting,postSalesHold,
    postUpdateSalesHoldStatus,postLocation,postTax,postBank,
    postItemForTaxTotal,postSalesReturn,postHoldServiceCharge,
    postHoldDiscount,isNotExitsLocation,smsGateway,addUserStep1,addUserStep2,
    postAddExpense,postStockAdjustmentDetails,postWriteOffItemsDetails,
    postTOG,postUpdateSalesOrder,postRemoveItemsSalesOrder,postUpdateSalesOrderHeader,
    postBranches,isNotExitsBranch, getBranchById,payHereResponse,
    isNotExitsBank,postLoyalty
}
