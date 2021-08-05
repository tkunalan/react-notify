function myHeaders (){
    const headers = {
        'user_id':sessionStorage.getItem('user_id'),
        'company_id':sessionStorage.getItem('company_id'),
        'client_id':sessionStorage.getItem('client_id'),
        'authorization':sessionStorage.getItem('authorization'),
    };

    return headers;
}

let getAllInvoice = (startDate,endDate,index,count,customer_id) => {
    return new Promise((resolve,reject) => {
        // let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/sales/invoice/customer/'+customer_id+'?end_date='+endDate+'&start_date='+startDate+'&balance_due=1';
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/sales/invoice/customer/'+customer_id+'?page_offset='+index+'&page_limit='+count+'&end_date='+endDate+'&start_date='+startDate+'&balance_due=1';

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

let getCustomerDetailsById = (customer_id) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/cust/customer/'+customer_id;

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


let getCustomerDetails = (index,count) => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER =sessionStorage.getItem('base_url')+'/api/cust/customers?page_offset='+index+'&page_limit='+count+'&&';

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse){
                        console.log('FindResponse111',FindResponse);

                        resolve(FindResponse)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });

};

let getTotalCustomer = () => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/rpt/customers/count';

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.customers && FindResponse.customers.length > 0){
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

let getAllCustomersGetCustomer = (customer) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/cust/customer/fulltext/'+`'${customer}'`+'%3A*';

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {

                    if(FindResponse.customer !== undefined){
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

let isNotExitsCustomer = (customer) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/cust/customer/fulltext/'+customer+'%3A*';

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {

                    if(FindResponse.customer !== undefined && FindResponse.customer.length > 0){
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

let getCustomerChequeDetails = (startDate,endDate,index,count) => {
    return new Promise((resolve,reject) => {

        // let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/sales/payments?page_offset='+index+'&page_limit='+count+'&end_date='+endDate+'&start_date='+startDate+'&payment_method=1002&&';
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/sales/payments?page_offset='+index+'&page_limit='
            +count+'&end_date='+endDate+'&start_date='+startDate+'&payment_method=1002&payment_type=^(?!1005|1006$)&';

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

let getCustomerChequeDetailsById = (invoice_id) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/sales/payments/ext/order/trans/by/'+invoice_id+'?payment_method=1002&payment_type=^(?!1005|1006$)';

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.payment.length > 0){
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

let getCustomerChequeAlert = (startDate,endDate,location) => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/rpt/orders/payment-checkdate-count?check_end_date='+endDate+'&check_start_date='+startDate+'&location_id='+location;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse){
                        resolve(FindResponse.payment[0].total_checks)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });
};

let getAllSalesAndInvoice = (searchWord) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/sales/salesreceipt-invoice/fulltext/'+searchWord;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse && FindResponse.salesreceipt_invoices.length > 0){
                        resolve(FindResponse)
                    }
                    else {
                        reject()
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });

};

export {getAllInvoice,getCustomerDetailsById,getAllCustomersGetCustomer,
    getCustomerDetails,getTotalCustomer,isNotExitsCustomer,
    getCustomerChequeDetails,getCustomerChequeAlert,getCustomerChequeDetailsById,
    getAllSalesAndInvoice,
}
