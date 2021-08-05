function myHeaders (){
    const headers = {
        'user_id':sessionStorage.getItem('user_id'),
        'company_id':sessionStorage.getItem('company_id'),
        'client_id':sessionStorage.getItem('client_id'),
        'authorization':sessionStorage.getItem('authorization'),
    };

    return headers;
}

let getSupplierCount = () => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/rpt/suppliers/count';

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.customers && FindResponse.customers.length >0 ){
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

let getSupplierTotalBalDue = () => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/rpt/purchase/suppliers-total-balance-due';

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.suppliers && FindResponse.suppliers.length >0 ){
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

let getSupplierDetails = (index,count) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/purch/supplier/suppliers?page_offset='+index+'&page_limit='+count+'&&';

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

let getAllSuppliersGetSupplier = (name) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/purch/supplier/name/'+name;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {

                    if(FindResponse.supplier.length > 0){
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

let getSupplierByPhoneNumber = (phone_number) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/purch/supplier/phone/' + phone_number;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {

                    if(FindResponse.supplier.length > 0){
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

let isNotExitsSupplier = (phone_number) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/purch/supplier/phone/' + phone_number;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {

                    if(FindResponse.supplier.length > 0){
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

let getSupplierDetailsById = (supplier_id) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/purch/supplier/sid/'+supplier_id;

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

let getAllInvoice = (startDate,endDate,supplier_id) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/purch/purchases?start_date='+startDate+'&&supplier_id='+supplier_id+'&&&end_date='+endDate+'&balance_due=1';

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

let getSupplierChequeDetails = (startDate,endDate,index,count) => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/purch/supplier/payments?page_offset='+index+'&page_limit='+count+'&end_date='+endDate+'&start_date='+startDate+'&payment_method=1002&&';

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

let getSupplierChequeAlert = (startDate,endDate,location) => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/rpt/purchase/payment-checkdate-count?check_end_date='+endDate+'&check_start_date='+startDate+'&location_id='+location;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse){
                        resolve(FindResponse.supplier_payment[0].total_checks)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )
    });
};
export {
    getSupplierCount, getSupplierTotalBalDue, getSupplierDetails,
    getAllSuppliersGetSupplier, getAllInvoice, getSupplierDetailsById,
    getSupplierByPhoneNumber, isNotExitsSupplier,getSupplierChequeDetails,
    getSupplierChequeAlert,
}
