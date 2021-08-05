function myHeaders (){
    const headers = {
        'user_id':sessionStorage.getItem('user_id'),
        'company_id':sessionStorage.getItem('company_id'),
        'client_id':sessionStorage.getItem('client_id'),
        'authorization':sessionStorage.getItem('authorization'),
    };

    return headers;
}

let payment = (start_date,end_date,payment_method,location_id,index,count,callingFrom) =>{

    return new Promise((resolve,reject) => {
        const URL_PAYMENT = sessionStorage.getItem('base_url')+'/api/sales/payments?page_limit='+count+'&location_id='+location_id+'&&&&start_date='+start_date+'&payment_method='+payment_method+'&page_offset='+index+'&&end_date='+end_date;

        fetch(URL_PAYMENT,{
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
    })
};

let salesInvoiceByPaymentMethod = (startDate,endDate,payment_method,location_id,order_method,index,count,callingFrom) =>{

    return new Promise((resolve,reject) => {
        const URL_PAYMENT_METHOD = sessionStorage.getItem('base_url')+'/api/sales/salesreceipts-invoices/pm/'+payment_method+'?page_limit='+count+'&location_id='+location_id+'&payment_type=1001&&&start_date='+startDate+'&page_offset='+index+'&order_method='+order_method+'&&&end_date='+endDate;

        fetch(URL_PAYMENT_METHOD,{
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
    })
};


let salesInvoiceByPaymentMethodByUser = (startDate,endDate,payment_method,location_id,index,count,userId,callingFrom) =>{

    return new Promise((resolve,reject) => {
        const URL_PAYMENT_METHOD = sessionStorage.getItem('base_url')+'/api/sales/salesreceipts-invoices/pm/'+payment_method+'?page_limit='+count+'&location_id='+location_id+'&payment_type=1001&&&start_date='+startDate+'&page_offset='+index+'&&created_by='+ userId +'&&end_date='+endDate;
        fetch(URL_PAYMENT_METHOD,{
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
    })
};

let invoice = (start_date,end_date,location_id,order_method,index,count,callingFrom) =>{

    return new Promise((resolve,reject) => {
        const URL_INVOICE = sessionStorage.getItem('base_url')+'/api/sales/invoices?page_limit='+count+'&location_id='+location_id+'&&&start_date='+start_date+'&page_offset='+index+'&&order_method='+order_method+'&&end_date='+end_date+'&';
        fetch(URL_INVOICE,{
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
    })
};

let returnTotal = (returnId) => {
    return new Promise((resolve,reject) => {
        const URL_RETURN = sessionStorage.getItem('base_url')+'/api/sales/return/'+returnId

        fetch(URL_RETURN,{
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
    })
};

let supplierPayment = (startDate,endDate,location,payment_method,index,count,callingFrom) => {
    return new Promise((resolve,reject) => {
        const URL_SUPPLIER = sessionStorage.getItem('base_url')+'/api/purch/supplier/payments?page_offset='+index+'&page_limit='+count+'&end_date='+endDate+'&start_date='+startDate+'&payment_method='+payment_method+'&&location_id='+location;

        fetch(URL_SUPPLIER,{
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
    })
};

let supplierPaymentPaidTotal = (startDate,endDate,location_id,payment_method) => {
    return new Promise((resolve,reject) => {
        const URL_PAYMENT_TOTAL = sessionStorage.getItem('base_url')+'/api/purch/supplier/payments/ri/total/loc/payment_method?location_id='+location_id+'&payment_method='+payment_method+'&end_date='+endDate+'&start_date='+startDate;
        fetch(URL_PAYMENT_TOTAL,{
            method: "GET",
            headers: myHeaders()
        })
        .then(Response => Response.json())
        .then(
            (FindResponse) => {
                if(FindResponse.supplier_payment && FindResponse.supplier_payment.length > 0 ){
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


let supplierPaymentByPaymentID = (PaymentID) => {
    return new Promise((resolve,reject) => {
        const URL_RETURN = sessionStorage.getItem('base_url')+'/api/purch/supplier/payment/'+PaymentID

        fetch(URL_RETURN,{
            method: "GET",
            headers: myHeaders()
        })
        .then(Response => Response.json())
        .then(
            (FindResponse) => {

                if(FindResponse.supplier_payment !== null){
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

let supplierPaymentBySupplierName = (supplier_name) => {
    return new Promise((resolve,reject) => {
        const URL_RETURN = sessionStorage.getItem('base_url')+'/api/purch/supplier/payments/supplier/by/'+supplier_name

        fetch(URL_RETURN,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {

                    if(FindResponse.supplier_payment !== null){
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

export {
    payment,invoice,returnTotal,salesInvoiceByPaymentMethod,supplierPayment,supplierPaymentPaidTotal,
    supplierPaymentByPaymentID,salesInvoiceByPaymentMethodByUser,supplierPaymentBySupplierName
}
