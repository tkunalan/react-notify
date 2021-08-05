
function myHeaders (){
    const headers = {
        'user_id':sessionStorage.getItem('user_id'),
        'company_id':sessionStorage.getItem('company_id'),
        'client_id':sessionStorage.getItem('client_id'),
        'authorization':sessionStorage.getItem('authorization'),
    };

    return headers;
}

let companyDetails = () =>{

    return new Promise((resolve,reject) => {
    let URL_REGISTER = sessionStorage.getItem('base_url') + '/api/com/companies';

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

let locationDetails = () =>{

    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url') + '/api/inv/inventory-locations';

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

let branchDetails = () =>{

    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url') + '/api/com/branches';

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


let bankDetails = () =>{

    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url') + '/api/sales/bank_accounts';

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


let userDetails = () =>{

    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url') + '/api/auth/users';

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

let exportDataDetails = (url) =>{

    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url') + url;

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


let taxDetails = () =>{

    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url') + '/api/sales/vatcodes';

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


let settingsDetails = () =>{

    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url') + '/api/com/prefs';

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

let getUserByID = (userId) =>{

    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url') + 'api/auth/user/'+userId;

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

let checkOrderExistCompany = () => {
    return new Promise((resolve,reject) =>{
        let URL_TOTAL_SALES = sessionStorage.getItem('base_url')+'/api/rpt/orders/total-orders';

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



export {
    companyDetails,settingsDetails,locationDetails,
    taxDetails,getUserByID,checkOrderExistCompany,
    exportDataDetails,userDetails,bankDetails,branchDetails
}
