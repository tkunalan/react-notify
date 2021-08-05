function myHeaders (){
    const headers = {
        'user_id':sessionStorage.getItem('user_id'),
        'company_id':sessionStorage.getItem('company_id'),
        'client_id':sessionStorage.getItem('client_id'),
        'authorization':sessionStorage.getItem('authorization'),
    };
    return headers;
}

function shopifyHeaders (){
    const headers = {
        'Accept': 'application/json',
        "Content-type": "application/json",
        'user_id':sessionStorage.getItem('user_id'),
        'company_id':sessionStorage.getItem('company_id'),
        'client_id':sessionStorage.getItem('client_id'),
        'authorization':sessionStorage.getItem('authorization'),
    };
    return headers;
}

function qBHeaders (setting){
    const headers = {
        'Accept': 'application/json',
        'userId':sessionStorage.getItem('user_id'),
        'companyId':sessionStorage.getItem('company_id'),
        'clientId':sessionStorage.getItem('client_id'),
        'authorization':sessionStorage.getItem('authorization'),

        'clientidqbo' : setting.clientidqbo,
        'clientsecret' : setting.clientsecret,
        'environment' : setting.environment,
        'redirecturi' : setting.redirecturi,
        'realmid' : setting.realmid,

    };

    return headers;
}

let getQBSetting = (settings) =>{

    return new Promise((resolve,reject) =>{
        let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        // let URL_QB = proxyUrl+ 'https://kalemessagingservice.tk/api/integ-tally-qbo/init/quickbooks';
        let url = window.location.protocol+"//"+window.location.hostname;
        let URL_QB = url+'/init/quickbooks';
        // let URL_QB = proxyUrl+ 'https://kalemessagingservice.tk/api/integ-tally-qbo/init/tally';
        fetch(URL_QB,{
            method: "POST",
            headers: qBHeaders(settings)
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse !== undefined){
                        resolve(FindResponse)
                    }
                },
                (error) => {
                    reject(0.00)
                }

            )
    })
};

function squareHeaders (setting){
    const headers = {
        'user_id':sessionStorage.getItem('user_id'),
        'company_id':sessionStorage.getItem('company_id'),
        'client_id':sessionStorage.getItem('client_id'),
        'authorization':sessionStorage.getItem('authorization'),
        'base_url': setting.url,
        'square_auth_token': setting.square_auth_token,

    };

    return headers;
}

let getSquareSetting = (settings) =>{

    return new Promise((resolve,reject) =>{
        // let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        // let URL_QB = proxyUrl+ 'https://kalemessagingservice.tk/api/square/init';
        let url = window.location.protocol+"//"+window.location.hostname;

         //let URL_QB = 'https://kalemessagingservice.tk/square';
         let URL_QB = url+'/square';

        fetch(URL_QB,{
            method: "GET",
            headers: squareHeaders(settings)
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse !== undefined){
                        resolve(FindResponse)
                    }
                },
                (error) => {
                    reject(0.00)
                }

            )
    })
};

function tallyHeaders (setting){
    const headers = {
        'Accept': 'application/json',
        'userId':sessionStorage.getItem('user_id'),
        'companyId':sessionStorage.getItem('company_id'),
        'clientId':sessionStorage.getItem('client_id'),
        'authorization':sessionStorage.getItem('authorization'),
        'email': setting.email
    };

    return headers;
}

let getTallySetting = (settings) =>{

    return new Promise((resolve,reject) =>{
      //  let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      let url = window.location.protocol+"//"+window.location.hostname;

        let URL_TALLY = + url + '/init/tally';
        fetch(URL_TALLY,{
            method: "POST",
            headers: tallyHeaders(settings)
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse !== undefined){
                        resolve(FindResponse)
                    }
                },
                (error) => {
                    reject(0.00)
                }

            )
    })
};

let postShopifySetting = (settings) =>{

    return new Promise((resolve,reject) =>{
        let url = window.location.protocol+"//"+window.location.hostname;
        let URL_SHOPIFY = url +'/init/shopify_insertshopifyuser/';
        fetch(URL_SHOPIFY,{
            method: "POST",
            headers: settings,
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse !== undefined){
                        resolve(FindResponse)
                    }
                },
                (error) => {
                    reject(0.00)
                }

            )
    })
};


let postShopifyItem = (data) =>{

    return new Promise((resolve,reject) =>{
        let url = window.location.protocol+"//"+window.location.hostname;
        let URL_SHOPIFY = url +'/init/POST_insertitem';
        fetch(URL_SHOPIFY,{
            method: "POST",
            headers: shopifyHeaders(),
            //headers: settings,
            body:JSON.stringify(data)
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse !== undefined){
                        resolve(FindResponse)
                    }
                },
                (error) => {
                    reject(0.00)
                }

            )
    })
};

let modifyShopifyItem = (data) =>{

    return new Promise((resolve,reject) =>{
        let url = window.location.protocol+"//"+window.location.hostname;
        let URL_SHOPIFY = url +'/init/POST_updateItem';
        fetch(URL_SHOPIFY,{
            method: "POST",
            headers: shopifyHeaders(),
            //headers: settings,
            body:JSON.stringify(data)
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse !== undefined){
                        resolve(FindResponse)
                    }
                },
                (error) => {
                    reject(0.00)
                }

            )
    })
};

let deleteShopifyItem = (data) =>{

    return new Promise((resolve,reject) =>{
        let url = window.location.protocol+"//"+window.location.hostname;
        let URL_SHOPIFY = url +'/init/POST_deleteitem';
        fetch(URL_SHOPIFY,{
            method: "POST",
            headers: shopifyHeaders(),
            //headers: settings,
            body:JSON.stringify(data)
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse !== undefined){
                        resolve(FindResponse)
                    }
                },
                (error) => {
                    reject(0.00)
                }

            )
    })
};




let yearlySalesChatData = (startYear,endYear,location) =>{

    return new Promise((resolve,reject) =>{
        let URL_SALES = sessionStorage.getItem('base_url')+'/api/rpt/orders/total-sales/monthly-loc?end_date='+endYear+'&start_date='+startYear+'&location_id='+location;
        fetch(URL_SALES,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse !== undefined){
                        resolve(FindResponse)
                    }
                },
                (error) => {
                    reject(0.00)
                }

            )
    })
};

let yearlyPurchasesChatData = (startYear,endYear,location) =>{

    return new Promise((resolve,reject) =>{
        let URL_SALES = sessionStorage.getItem('base_url')+'/api/rpt/purchase/total-purchase/monthly-loc?end_date='+endYear+'&start_date='+startYear+'&location_id='+location;
        fetch(URL_SALES,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse !== undefined){
                        resolve(FindResponse)
                    }
                },
                (error) => {
                    reject(0.00)
                }

            )
    })
};


let salesTotal = (startDate,endDate,location_id,payment_method) =>{

    return new Promise((resolve,reject) => {
        const URL_SALES = sessionStorage.getItem('base_url')+'/api/sales/payments/ext/order/total/loc/payment_method?location_id='+location_id+'&payment_method='+payment_method+'&payment_type=1001&end_date='+endDate+'&start_date='+startDate;

        fetch(URL_SALES,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse !== undefined){

                        let totalSales = 0;
                        for (let total of FindResponse.payment){
                            totalSales += total.total_payment_received;
                        }
                        resolve (totalSales);
                    }
                },
                (error) => {
                    reject(0.00)
                }

            )
    })
};

let salesPMAndOMTotal = (startDate,endDate,location_id,payment_method,order_method) =>{

    payment_method = payment_method === "0" ? ".*" : payment_method;

    return new Promise((resolve,reject) => {
        const URL_SALES = sessionStorage.getItem('base_url')+'/api/rpt/orders/total-sales-loc?end_date='+endDate+'&start_date='+startDate+'&payment_method='+payment_method+'&order_method='+order_method+'&location_id='+location_id;

        fetch(URL_SALES,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse !== undefined){

                        let totalSales = 0;
                        for (let total of FindResponse.orders){
                            totalSales += total.sales_total;
                        }
                        resolve (totalSales);
                    }
                },
                (error) => {
                    reject(0.00)
                }

            )
    })
};

let salesPMAndOMTotalByUser = (startDate,endDate,location_id,payment_method,user_id) =>{

    payment_method = payment_method === "0" ? ".*" : payment_method;

    return new Promise((resolve,reject) => {
        const URL_SALES = sessionStorage.getItem('base_url')+'/api/rpt/orders/total-sales-loc?end_date='+endDate+'&start_date='+startDate+'&payment_method='+payment_method+'&&location_id='+location_id;

        fetch(URL_SALES,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse !== undefined){

                        let totalSales = 0;
                        for (let total of FindResponse.orders){
                            totalSales += total.sales_total;
                        }
                        resolve (totalSales);
                    }
                },
                (error) => {
                    reject(0.00)
                }

            )
    })
};

let salesPaymentTotal = (startDate,endDate,location_id,payment_method) =>{

    return new Promise((resolve,reject) => {
        const URL_SALES = sessionStorage.getItem('base_url')+'/api/sales/payments/ext/order/total/loc/payment_method?location_id='+location_id+'&payment_method='+payment_method+'&payment_type=1001&end_date='+endDate+'&start_date='+ startDate;

        fetch(URL_SALES,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse !== undefined){

                        let totalSales = 0;
                        for (let total of FindResponse.payment){
                            totalSales += total.total_payment_received;
                        }
                        resolve (totalSales);
                    }
                },
                (error) => {
                    reject(0.00)
                }

            )
    })
};

let salesPaymentTotalByUser = (startDate,endDate,location_id,payment_method,user_id) =>{

    return new Promise((resolve,reject) => {
        const URL_SALES = sessionStorage.getItem('base_url')+'/api/sales/payments/ext/order/total/loc/payment_method?location_id='+location_id+'&payment_method='+ payment_method +'&payment_type=1001&end_date='+endDate+'&start_date='+ startDate;

        fetch(URL_SALES,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse !== undefined){

                        let totalSales = 0;
                        for (let total of FindResponse.payment){
                            totalSales += total.total_payment_received;
                        }
                        resolve (totalSales);
                    }
                },
                (error) => {
                    reject(0.00)
                }

            )
    })
};

let getServiceChargeTotal = (startDate,endDate,location) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/rpt/orders/total-servicecharge-loc?end_date='+endDate+'&start_date='+startDate+'&location_id='+location;


        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse){
                        let servicesTotal = 0;
                        for(let total of FindResponse.orders){
                            servicesTotal += total.service_charge
                        }
                        resolve(servicesTotal)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });

};


let salesAndInvoiceTotal = (startDate,endDate,location_id,user) =>{

    return new Promise((resolve,reject) => {
        const URL_SALES = sessionStorage.getItem('base_url')+'/api/rpt/orders/total-sales-loc?created_by='+user+'&end_date='+endDate+'&start_date='+startDate+'&&&location_id='+location_id;

        fetch(URL_SALES,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse !== undefined){

                        let totalSales = 0;
                        for (let total of FindResponse.orders){
                            totalSales += total.sales_total;
                        }
                        resolve (totalSales);
                    }
                },
                (error) => {
                    reject(0.00)
                }

            )
    })
};

let salesAndInvoiceTotalByUser = (startDate,endDate,location_id,user_id) =>{

    return new Promise((resolve,reject) => {
        const URL_SALES = sessionStorage.getItem('base_url')+'/api/rpt/orders/total-sales-loc?created_by='+ user_id +'&end_date='+ endDate +'&start_date='+ startDate +'&&&location_id=' + location_id;

        fetch(URL_SALES,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse !== undefined){

                        let totalSales = 0;
                        for (let total of FindResponse.orders){
                            totalSales += total.sales_total;
                        }
                        resolve (totalSales);
                    }
                },
                (error) => {
                    reject(0.00)
                }

            )
    })
};

let getAllReturnOrders = (todayDate,tomorrowDate,location_id,index,count,callingFrom) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/sales/returns?page_offset='+index+'&page_limit='+count+'&&&end_date='+tomorrowDate+'&start_date='+todayDate+'&location_id='+location_id;

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

let getAllReturnsByReturnID = (returnID) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/sales/return/'+returnID;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.return !== null ){
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


let salesReturnTotal = (startDate,endDate,location_id) =>{

    return new Promise((resolve,reject) => {
        const URL_SALES_RETURN = sessionStorage.getItem('base_url')+'/api/rpt/orders/total-sales-return-loc?end_date='+endDate+'&start_date='+startDate+'&location_id='+location_id;

        fetch(URL_SALES_RETURN,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse !== undefined){

                        let totalReturn = 0;
                        for (let total of FindResponse.returns){
                            totalReturn += total.return_total;
                        }
                        resolve (totalReturn);
                    }
                },
                (error) => {
                    reject(0.00)
                }

            )
    })
};


let getSalesReceiptData = (selectSalesReceipt) =>{

    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url') + '/api/sales/salesreceipt/'+selectSalesReceipt;

        fetch(URL_REGISTER, {
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse !== undefined){
                        resolve(FindResponse)
                    }
                },
                (error) => {
                    reject()
                }
            )
    });
};

let getAllSalesPayment = (todayDate,tomorrowDate,location_id,index,count) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/sales/payments?page_limit='+count+'&location_id='+location_id+'&payment_type=1002%7C1004&&&start_date='+todayDate+'&&page_offset='+index+'&&end_date='+tomorrowDate;

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

let salesPaymentByPaymentID = (paymentID) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/sales/payment/'+paymentID;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.payment){
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

let salesPaymentByCustomerID = (customerID) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/sales/payments/ext/cust/id/by/'+customerID;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.payment){
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

let getSalesInvoiceData = (selectInvoiceReceipt) =>{

    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url') + '/api/sales/invoice/'+selectInvoiceReceipt;

        fetch(URL_REGISTER, {
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse !== undefined){
                        resolve(FindResponse)
                    }
                },
                (error) => {
                    reject()
                }
            )
    });
};



let getAllOrders = (startDate,endDate,location_id,order_type,order_method,index,count,callingFrom) => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/sales/salesreceipts-invoices?page_limit='+count+'&location_id='+location_id+'&start_date='+startDate+'&page_offset='+index+'&&order_method='+order_method+'&&end_date='+endDate+'&order_type='+order_type;

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

let getAllOrdersGetOrderID = (orderId) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/sales/salesreceipts-invoices/'+orderId;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.salereceipts_invoices !== null){
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

let getAllOrdersGetSerialNum = (serialNum) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/sales/salesreceipts-invoices/all/details?serial_number='+serialNum;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.salereceipts_invoices !== null){
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

let getAllOrdersGetRefNumber = (refNumber) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/sales/salesreceipts-invoices?ref_type='+refNumber;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.salereceipts_invoices.length > 0){
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

let getAllOrdersByLocationID = (locationID) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/sales/salesreceipts-invoices/all/details?location_id='+locationID+'&&&&&&';

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.salereceipts_invoices.length > 0){
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

let getAllOrdersDetails = (todayDate,tomorrowDate,location_id,index,count,callingFrom) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/sales/salesreceipts-invoices/all/details?page_limit='+count+'&location_id='+location_id+'&&start_date='+todayDate+'&page_offset='+index+'&&&end_date='+tomorrowDate;

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

let getAllOrdersUserWise = (startDate,endDate,location,userId,index,count,callingFrom) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/sales/salesreceipts-invoices?page_limit='+count+'&location_id='+location+'&start_date='+startDate+'&page_offset='+index+'&&&created_by=^'+userId+'$&end_date='+endDate;
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


let getAllOrdersTypeDetails = (startDate,endDate,productType,location_id,index,count,callingFrom) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/sales/salesreceipts-invoices/all/details/type?page_limit='+count+'&location_id='+location_id+'&nonposting_type='+productType+'&&&start_date='+startDate+'&page_offset='+index+'&&&end_date='+endDate;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.salereceipts_invoices && FindResponse.salereceipts_invoices.length > 0 ){
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

let getAllOrdersTypeDetailsByLocationID = (locationID) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/sales/salesreceipts-invoices/all/details?location_id='+locationID+'&&&&&&';

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.salereceipts_invoices.length > 0){
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

let getAllOrdersTypeTotal = (startDate,endDate,productType,location_id) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/rpt/orders/total-lotto-loc?end_date='+endDate+'&start_date='+startDate+'&type='+productType+'&&location_id='+location_id;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.orders && FindResponse.orders.length > 0 ){
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

let getAllOrdersTypeTotalByUser = (startDate,endDate,productType,location_id,user_id) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/rpt/orders/total-lotto-loc?end_date='+ endDate +'&start_date='+ startDate +'&created_by='+ user_id +'&&type='+ productType +'&location_id='+ location_id;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.orders && FindResponse.orders.length > 0 ){
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

let getAllPhoneCardTotal = (startDate,endDate,location_id) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'api/rpt/orders/total-lotto-loc?end_date='+endDate+'&start_date='+startDate+'&nonposting_type=O&type=X&location_id='+location_id;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.orders && FindResponse.orders.length > 0 ){
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

let getAllPhoneCardTotalByUser = (startDate,endDate,location_id,user_id) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'api/rpt/orders/total-lotto-loc?end_date='+endDate+'&start_date='+startDate+'&&created_by='+ user_id +'&nonposting_type=O&type=X&&location_id='+location_id;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.orders && FindResponse.orders.length > 0 ){
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

let getAllLottoTotalReturn = (startDate,endDate,productType,location_id) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/rpt/orders/return-total-lotto-loc?end_date='+endDate+'&start_date='+startDate+'&&&type='+productType+'&location_id='+location_id;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.orders && FindResponse.orders.length > 0 ){
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

let getTotalSalesCount = (StartDate,endDate,location_id) => {
    return new Promise((resolve,reject) =>{
        let URL_TOTAL_SALES = sessionStorage.getItem('base_url')+'/api/rpt/orders/total-orders?location_id='+location_id+'&&&end_date='+endDate+'&start_date='+StartDate;

        fetch(URL_TOTAL_SALES,{
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

let getTotalHoldSalesOrderCount = () => {
    return new Promise((resolve,reject) =>{
        let URL_TOTAL_SALES = sessionStorage.getItem('base_url')+'/api/rpt/orders/count-pending-salesorders';
        fetch(URL_TOTAL_SALES,{
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


let getHoldSalesOrder = (startDate,endDate,location_id,order_status,index,count,callingFrom) => {
    return new Promise((resolve,reject) =>{
        let URL_HOLD_SALES
        if(startDate){
            URL_HOLD_SALES = sessionStorage.getItem('base_url')+'/api/sales/salesorder?page_limit='+count+'&location_id='+location_id+'&start_date='+startDate+'&page_offset='+index+'&order_status='+order_status+'&&&end_date='+endDate;
        }
        else {
            URL_HOLD_SALES = sessionStorage.getItem('base_url')+'/api/sales/salesorder?page_limit='+count+'&location_id='+location_id+'&&&&page_offset='+index+'&order_status='+order_status+'&&&&';
        }

        fetch(URL_HOLD_SALES,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse){
                        resolve (FindResponse)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    })
};

let getHoldSalesOrderDetails = (holdId) => {
    return new Promise((resolve,reject) =>{
        let URL_HOLD_SALES = sessionStorage.getItem('base_url')+'/api/sales/salesorder/'+holdId;

        fetch(URL_HOLD_SALES,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse){
                        resolve (FindResponse)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    })
};

let getSalesReprint = (orderId) => {
    return new Promise((resolve,reject) =>{
        let URL_HOLD_SALES = sessionStorage.getItem('base_url')+'/api/sales/salesreceipts-invoices/'+orderId;

        fetch(URL_HOLD_SALES,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse){
                        resolve (FindResponse)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    })
};

let getQuotationprint = (orderId) => {
    return new Promise((resolve,reject) =>{
        let URL_HOLD_SALES = sessionStorage.getItem('base_url')+'/api/sales/quotation/'+orderId;

        fetch(URL_HOLD_SALES,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse){
                        resolve (FindResponse)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    })
};

let getEcofreeReport = (startDate,endDate,location_id,index,count) => {
    return new Promise((resolve,reject) => {

        //let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/inv/writeoffs?page_limit='+count+'&&location_id='+location_id+'&&&start_date='+startDate+'&page_offset='+index+'&&&end_date='+endDate;
        //let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/sales/salesreceipts-invoices/all/details/type?page_limit='+count+'&&&&type=X&start_date='+startDate+'&page_offset='+index+'&&&end_date='+endDate;
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/sales/salesreceipts-invoices/all/details/type?page_limit='+count+'&location_id='+location_id+'&&&type=X&start_date='+startDate+'&page_offset='+index+'&&&end_date='+endDate;
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


export {getSalesReceiptData,getSalesInvoiceData,salesTotal,
    salesReturnTotal,yearlySalesChatData,getAllOrders,
    getAllOrdersDetails,getTotalSalesCount,getAllOrdersGetOrderID,getAllOrdersGetSerialNum,
    getHoldSalesOrder,getHoldSalesOrderDetails,getTotalHoldSalesOrderCount,
    getAllReturnOrders,getAllReturnsByReturnID,getAllOrdersTypeDetails,
    getAllOrdersTypeDetailsByLocationID,getAllOrdersTypeTotal,getAllSalesPayment,
    salesPaymentByPaymentID,getAllOrdersByLocationID,salesPMAndOMTotal,
    getQBSetting,getSquareSetting,getTallySetting,salesAndInvoiceTotal,getServiceChargeTotal,
    getSalesReprint,yearlyPurchasesChatData,getAllLottoTotalReturn,getEcofreeReport,
    getAllOrdersUserWise,getAllPhoneCardTotal,salesPaymentTotal,salesAndInvoiceTotalByUser,
    getAllOrdersTypeTotalByUser,getAllPhoneCardTotalByUser,salesPMAndOMTotalByUser,
    salesPaymentTotalByUser,getQuotationprint,salesPaymentByCustomerID,
    getAllOrdersGetRefNumber,postShopifySetting,postShopifyItem,modifyShopifyItem,deleteShopifyItem
}
