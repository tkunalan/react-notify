function myHeaders (auth){
    return {
        'user_id':auth.user_id,
        'company_id':auth.company_id,
        'client_id':auth.client_id,
        'authorization':auth.auth_token,
    }
}


const getService = (url,auth) => {

    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url') + url;

        fetch(URL_REGISTER, {
            method: "GET",
            headers: myHeaders(auth)
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if (FindResponse !== undefined && FindResponse.status !== 400
                        && FindResponse.status !== 404 && FindResponse.status !== 403) {
                        resolve(FindResponse);

                    } else {
                        reject(null)
                    }
                },
                (error) => {
                    reject(error)
                }
            )
    });
}

const companyDetails = () =>{

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
                    reject(error)
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
                    reject(error)
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
                    reject(error)
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
                    reject(error)
                }
            )
    });
};





export {
    companyDetails,settingsDetails,
    getUserByID,userDetails,getService
}
