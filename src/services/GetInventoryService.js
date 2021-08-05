
function myHeaders (){
    const headers = {
        'user_id':sessionStorage.getItem('user_id'),
        'company_id':sessionStorage.getItem('company_id'),
        'client_id':sessionStorage.getItem('client_id'),
        'authorization':sessionStorage.getItem('authorization'),
    };

    return headers;
}

let getAllInventory = (startDate,endDate,index,count) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/purch/item/receive-inventories?page_offset='+index+'&page_limit='+count+'&&&end_date='+endDate+'&start_date='+startDate;


        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.received_inventories && FindResponse.received_inventories.length > 0 ){
                        resolve(FindResponse)
                    }
                    else{
                        reject(0.00)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });

};

let getAllInventoryById = (txnId) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/purch/item/receive-inventory/'+txnId;


        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.received_inventory){
                        resolve(FindResponse)
                    }
                    else{
                        reject(0.00)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });

};


let getAllHoldInventory = (startDate,endDate) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/purch/item/receive-inventories?page_offset=0&page_limit=1000&end_date='+endDate+'&start_date='+startDate+'&&&txn_state=0';

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.received_inventories && FindResponse.received_inventories.length > 0 ){
                        resolve(FindResponse)
                    }
                    else{
                        reject(0.00)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });

};

let purchaseTotal = (startDate,endDate) =>{

    return new Promise((resolve,reject) => {
        // const URL_SALES = sessionStorage.getItem('base_url')+'/api/sales/payments/ext/order/total/loc/payment_method?location_id='+location_id+'&payment_method='+payment_method+'&payment_type=1001&end_date='+endDate+'&start_date='+startDate;
        const URL_PURCHASE = sessionStorage.getItem('base_url')+'/api/rpt/purchase/purchases-total?end_date='+endDate+'&start_date='+startDate;

        fetch(URL_PURCHASE,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponseTotal) => {
                    if(FindResponseTotal){
                        resolve (FindResponseTotal)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    })
};

let purchaseDashBoardTotal = (startDate,endDate) =>{

    return new Promise((resolve,reject) => {

        const URL_PURCHASE = sessionStorage.getItem('base_url')+'/api/rpt/purchase/purchases-total?end_date='+endDate+'&start_date='+startDate;

        fetch(URL_PURCHASE,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse !== undefined){
                        let purchaseAmount = 0.00;
                        for(let data of FindResponse.purchase){
                            purchaseAmount += data.sales_total
                        }
                        resolve(purchaseAmount)
                    }
                },
                (error) => {
                    reject(0.00)
                }

            )
    })
};


let purchaseTaxTotal = (startDate,endDate,locationId) =>{

    return new Promise((resolve,reject) => {
        const URL_PURCHASE = sessionStorage.getItem('base_url')+'/api/rpt/purchase/total-taxes?end_date='+endDate+'&start_date='+startDate+'&&location_id='+locationId;

        fetch(URL_PURCHASE,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponseTotal) => {
                    if(FindResponseTotal){
                        resolve (FindResponseTotal)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    })
};

let getTotalPurchaseCount = (startDate,endDate,location_id) => {
    return new Promise((resolve,reject) =>{
        let URL_TOTAL_PURCHASE = sessionStorage.getItem('base_url')+'/api/rpt/purchase/purchases-count?txn_state=1&location_id='+location_id+'&end_date='+endDate+'&start_date='+startDate;

        fetch(URL_TOTAL_PURCHASE,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponseTotal) => {
                    if(FindResponseTotal){
                        resolve (FindResponseTotal)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    })

};

let getTotalPurchaseHoldCount = (startDate,endDate,location_id,txn_state) => {
    return new Promise((resolve,reject) =>{
        let URL_TOTAL_PURCHASE = sessionStorage.getItem('base_url')+'/api/rpt/purchase/purchases-count?txn_state='+txn_state+'&location_id='+location_id+'&end_date='+endDate+'&start_date='+startDate;

        fetch(URL_TOTAL_PURCHASE,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponseTotal) => {
                    if(FindResponseTotal){
                        resolve (FindResponseTotal)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    })

};

let getPurchaseInvoicesAndReceiveInventory = (startDate,endDate,location_id,index,count,callingFrom) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/purch/purchases?page_limit='+count+'&location_id='+location_id+'&&start_date='+startDate+'&page_offset='+index+'&&&&&end_date='+endDate+'&';

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse){
                        resolve(FindResponse)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });

};


let getPurchaseInvoicesAndReceiveInventoryById = (transaction_id) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/purch/purchases?transaction_id='+transaction_id+'&&&&&&&&';

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.purchases.length > 0){
                        resolve(FindResponse)
                    }
                    else {
                        reject(0)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });

};



let getPurchaseDetails = (url) => {
    return new Promise((resolve,reject) => {

        fetch(url,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse){
                        resolve(FindResponse)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });

};

let getAllPurchasesGetSupplierID = (startDate,endDate,supplierID) => {
    return new Promise((resolve,reject) => {
        // let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/purch/purchases?supplier_id='+supplierID+'&&&&&';
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/purch/purchases?start_date='+startDate+'&&supplier_id='+supplierID+'&&&end_date='+endDate+'&';

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {

                    if(FindResponse.purchases.length > 0){
                        resolve(FindResponse)
                    }
                    else {
                        reject(0.00)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });
};

let getAllPurchasesGetSupplierName = (startDate,endDate,supplierName) => {
    return new Promise((resolve,reject) => {
        // let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/purch/purchases?supplier_id='+supplierID+'&&&&&';
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/purch/purchases?supplier_name='+supplierName+'&start_date='+startDate+'&&&&&end_date='+endDate+'&';

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {

                    if(FindResponse.purchases.length > 0){
                        resolve(FindResponse)
                    }
                    else {
                        reject(0.00)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });
};

let getAllPurchasesGetInvoiceID = (startDate,endDate,invoiceID) => {
    return new Promise((resolve,reject) => {
        // let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/purch/purchases?supplier_id='+supplierID+'&&&&&';
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/purch/purchases?transaction_id='+invoiceID+'&&start_date='+startDate+'&&&&&end_date='+endDate+'&';

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {

                    if(FindResponse.purchases.length > 0){
                        resolve(FindResponse)
                    }
                    else {
                        reject(0.00)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });
};

let getAllPurchasesGetInvoiceNumber = (invoiceNumber) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/purch/item/receive-inventory/invoice/'+invoiceNumber;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {

                    if(FindResponse.received_inventory.length > 0){
                        resolve(FindResponse)
                    }
                    else {
                        reject(0.00)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });
};


let  getExpiryCount = (startDate,endDate,location) => {
    return new Promise((resolve,reject)=>{
        const endpoint = sessionStorage.getItem('base_url_gql')+'/graphql'

        const query = /* GraphQL */`
        query  ExpiryItemCount(
        $client : String!,
        $userId : String!,
        $auth : String!,
        $comId : String!,
        $location : String,
        $startDate : String,
        $endDate : String
       )
        {
        ExpiryItemCount(
        client_id: $client,
        company_id: $comId,
        auth_id: $auth,
        user_id: $userId,
        location_id: $location,
        start_date: $startDate,
        end_date: $endDate
        )
       {
         count
       }
     }`;

        const variables = {
            client: sessionStorage.getItem('client_id'),
            userId: sessionStorage.getItem('user_id'),
            auth: sessionStorage.getItem('authorization'),
            comId: sessionStorage.getItem('company_id'),
            location: location,
            startDate: startDate,
            endDate: endDate,

        };

        fetch(endpoint, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query, variables })
        })
            .then(response => response.json())
            .then(
                (FindResponse) => {
                    console.log('hello FindResponse',FindResponse);

                    if (FindResponse.data.ExpiryItemCount.count !== null){

                        resolve(FindResponse.data.ExpiryItemCount.count);
                    }
                    else{
                        reject(0.00)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )

            .catch((e) => {
                reject(0.00)
            })

    });

};

let getExpiryItemDetails = (startDate,endDate,location,item_number,index,count,callingFrom) => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/inv/item/inventories/'+startDate+'/'+endDate+'?page_limit='+count+'&&location_id='+location+'&&&&&page_offset='+index+'&&&&&item_number='+item_number;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse){
                        resolve(FindResponse)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });

};

let getExpiryItemByItemNumber = (itemNumber,startDate,endDate) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/inv/item/inventories/'+startDate+'/'+endDate+'?item_number='+itemNumber;


        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse){
                        resolve(FindResponse)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });

};

let getReorderDetails = (location_id,index,count,callingFrom) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url') + '/api/inv/item/reorder?page_offset='+index+'&page_limit='+count+'&location_id='+location_id+'&&&';


        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.items && FindResponse.items.length > 0){
                        resolve(FindResponse)
                    }
                    else{
                        reject(0.00)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });

};

let getTogDetails = (startDate,endDate,location_id,index,count,callingFrom) => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/inv/item/togs?page_limit='+count+'&created_location_id='+location_id+'&&&&start_date='+startDate+'&page_offset='+index+'&&end_date='+endDate;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse){
                        resolve(FindResponse)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });

};

let getActivity = (itemNumber,index,count) => {
    return new Promise((resolve,reject) => {
        // let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/audit/inventory/activities/'+itemNumber+'?page_offset='+index+'&page_limit='+count+'&location_id='+location_id;
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/audit/inventory/activities/'+itemNumber+'?page_offset='+index+'&page_limit='+count+'&&&';

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse){
                        resolve(FindResponse)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });

};

let getWriteOff = (startDate,endDate,location_id,index,count) => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/inv/writeoffs?page_limit='+count+'&&location_id='+location_id+'&&&start_date='+startDate+'&page_offset='+index+'&&&end_date='+endDate;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse){
                        resolve(FindResponse)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });

};

let getWriteOffTotal = (startDate,endDate,location_id,index,count) => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/rpt/orders/total-writeoff-loc?end_date='+endDate+'&start_date='+startDate+'&location_id='+location_id

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.writeoff && FindResponse.writeoff.length > 0){
                        resolve(FindResponse.writeoff[0])
                    }
                    else{
                        reject(0.00)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });

};

let getWriteOffByTransactionID = (transactionID) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/inv/writeoff/'+transactionID


        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.writeoff !== null){
                        resolve(FindResponse)
                    }
                    else{
                        reject(0.00)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });

};



let getEcofeeReportTotal = (startDate,endDate,location_id) => {
    return new Promise((resolve,reject) => {

        //let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/rpt/orders/total-writeoff-loc?end_date='+endDate+'&start_date='+startDate+'&location_id='+location_id
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/rpt/orders/total-lotto-loc?end_date='+endDate+'&start_date='+startDate+'&&&type=X&location_id='+location_id

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.orders && FindResponse.orders.length > 0){
                        resolve(FindResponse.orders[0])
                    }
                    else{
                        reject(0.00)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });

};

let getAllInventoryAdjustment = (start_date, end_date, location_id, off_set, page_limit, user_id) => {

    return new Promise((resolve, reject) => {
        const URL_PAYMENT = sessionStorage.getItem('base_url') +
            '/api/inv/inventory-adjs/v2?page_offset='+off_set+'&page_limit='+page_limit+
            '&end_date='+end_date+'&start_date='+start_date+'&created_by='+user_id+'&&location_id='+location_id;

        fetch(URL_PAYMENT, {
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if (FindResponse) {
                        resolve(FindResponse)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    })
};

let getAllInventoryAdjustmentTID = (t_id) => {

    return new Promise((resolve, reject) => {
        const URL_PAYMENT = sessionStorage.getItem('base_url') + '/api/inv/inventory-adj/v2/'+t_id;

        fetch(URL_PAYMENT, {
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if (FindResponse.inventory_adj) {
                        resolve(FindResponse)
                    }
                    else{
                        reject(0.00)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    })
};

let getAllReturnInvoice = (startDate,endDate,location_id,index,count,callingFrom) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/purch/purchase-returns?page_offset='+index+'&page_limit='+count+'&end_date='+endDate+'&start_date='+startDate+'&location_id='+location_id;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse){
                        resolve(FindResponse)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });
};


let getPurchaseReturnByReturnId = (return_id) =>{

    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url') + '/api/purch/purchase-return/'+return_id;

        fetch(URL_REGISTER, {
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.purchase_return && FindResponse ){
                        resolve(FindResponse)
                    }
                    else{
                        reject(0.00)
                    }
                },
                (error) => {
                    reject()
                }
            )
    });
};


let getAllPurchaseOrder = (startDate,endDate,index,count,txnState,callingFrom) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER
        if(startDate){
            URL_REGISTER = sessionStorage.getItem('base_url')+'/api/purch/item/purchase-orders?page_offset='+index+'&page_limit='+count+'&end_date='+endDate+'&start_date='+startDate+'&&&txn_state='+txnState;
        }
        else {
            URL_REGISTER = sessionStorage.getItem('base_url')+'/api/purch/item/purchase-orders?page_offset=0&page_limit=10&&&&&txn_state=1';
        }

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.purchase_orders && FindResponse.purchase_orders.length > 0 ){
                        resolve(FindResponse)
                    }
                    else{
                        reject(0.00)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });

};

let getAllPurchaseOrderById = (POId) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/purch/item/purchase-order/'+POId;


        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.puchase_order){
                        resolve(FindResponse)
                    }
                    else{
                        reject(0.00)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });

};

let getAllItemsSortByQty = (qoh_lessthanequal,location,type,index,count,callingFrom) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/inv/item/inventories?page_limit='+count+'&&location_id='+location+'&&type='+type+'&qoh_lessthanequal='+qoh_lessthanequal+'&page_offset='+index+'&&&&';


        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.inventories){
                        resolve(FindResponse)
                    }
                    else{
                        reject(0.00)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });

};

export {
    getAllInventory,getPurchaseInvoicesAndReceiveInventory,getPurchaseDetails,
    getExpiryItemDetails,getExpiryCount,getExpiryItemByItemNumber,getReorderDetails,getTogDetails,
    getAllPurchasesGetSupplierID,getActivity,getWriteOff,purchaseTotal,getTotalPurchaseCount,
    getWriteOffTotal,getWriteOffByTransactionID,purchaseTaxTotal,
    getEcofeeReportTotal,purchaseDashBoardTotal,getAllInventoryAdjustment,getAllInventoryAdjustmentTID,
    getAllHoldInventory,getAllInventoryById,getTotalPurchaseHoldCount,getAllReturnInvoice,
    getAllPurchaseOrder,getAllPurchaseOrderById,getPurchaseInvoicesAndReceiveInventoryById,
    getAllItemsSortByQty,getPurchaseReturnByReturnId,getAllPurchasesGetInvoiceID,getAllPurchasesGetSupplierName,
    getAllPurchasesGetInvoiceNumber,
}
