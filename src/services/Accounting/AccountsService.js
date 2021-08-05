function myHeaders (){
    const headers = {
        'user_id':sessionStorage.getItem('user_id'),
        'company_id':sessionStorage.getItem('company_id'),
        'client_id':sessionStorage.getItem('client_id'),
        'authorization':sessionStorage.getItem('authorization'),
    };

    return headers;
}

const sampleAccounts = {
    accounts :[
        {
            account_id:1000,
            account_name:"Assets",
            parent_account:null,
            financial_report:"Balance Sheet",
            account_type:"Assets"
        },
        {
            account_id:1100,
            account_name:"Cash",
            parent_account:null,
            financial_report:"Balance Sheet",
            account_type:"Current Assets"
        },
        {
            account_id:1101,
            account_name:"Cash A/C",
            parent_account:"Cash",
            financial_report:"Balance Sheet",
            account_type:"Current Assets"
        },
        {
            account_id:1102,
            account_name:"Petty Cash A/C",
            parent_account:"Cash",
            financial_report:"Balance Sheet",
            account_type:"Current Assets"
        },
        {
            account_id:1050,
            account_name:"Bank",
            parent_account:null,
            financial_report:"Balance Sheet",
            account_type:"Current Assets"
        },
        {
            account_id:1051,
            account_name:"Checking A/C",
            parent_account:"Bank",
            financial_report:"Balance Sheet",
            account_type:"Current Assets"
        },
        {
            account_id:1052,
            account_name:"Savings A/C",
            parent_account:"Bank",
            financial_report:"Balance Sheet",
            account_type:"Current Assets"
        },
    ]
};

const sampleParentAccounts = (account_name) => {
    switch (account_name) {
        case "Assets":
            return {
                parent_account : null,
                account_name :["Assets"]
            }
            break;
        case "Cash":
            return {
                parent_account : null,
                account_name :["Current Assets"]
            }
            break;
        case "Cash A/C":
            return {
                parent_account : [
                        "Cash"
                ],
                account_name :["Current Assets"]
            }
            break;
        case "Petty Cash A/C":
            return {
                parent_account : [
                        "Cash"
                ],
                account_name :["Current Assets"]
            }
            break;
        case "Bank":
            return {
                parent_account : null ,
                account_name :["Current Assets"]
            }
            break;
        case "Checking A/C":
            return {
                parent_account : [
                        "Bank"
                ],
                account_name :["Current Assets"]
            }
            break;
            case "Savings A/C":
                return {
                    parent_account : [
                        "Bank"
                    ],
                    account_name :["Current Assets"]
                }
                break;
        default:
            break;
    }
};

let getAccounts = () => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/acct/accounts';

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {

                    if(FindResponse.accounts && FindResponse.accounts.length == 0){
                        // resolve(FindResponse)
                        resolve(sampleAccounts)
                    }
                    else {
                        reject(0.00)
                    }
                },
                (error) => {
                    resolve(sampleAccounts)
                    // reject(0.00)
                }
            )
    });
};

let getParenrAccount = (account_name) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/acct/accounts';

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {

                    if(FindResponse.accounts && FindResponse.accounts.length == 0){
                        // resolve(FindResponse)
                        resolve(sampleParentAccounts(account_name))
                    }
                    else {
                        reject(0.00)
                    }
                },
                (error) => {
                    resolve(sampleParentAccounts(account_name))
                    // reject(0.00)
                }
            )
    });
};

let isNotExitsAccount = (account_id) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/acct/account/' + account_id;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {

                    if(FindResponse.account.length > 0){
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

let postAccount = (account) =>{

    // return new Promise((resolve, reject) =>{
    //     fetch (sessionStorage.getItem('base_url') + '/api/acct/account', {
    //         method: "POST",
    //         headers: myHeaders(),
    //         body: JSON.stringify(account),
    //     }).then(res => res.json())

    //         .catch(error => console.error('Error:', error))
    //         .then(
    //             (FindResponseAccount) => {
    //                 if (FindResponseAccount !== undefined && FindResponseAccount.status !== 400
    //                     && FindResponseAccount.status !== 404 && FindResponseAccount.status !== 403) {
    //                     resolve(FindResponseAccount.account[0])
    //                 } else {
    //                     reject("error")
    //                 }
    //             });
    // });

};

export {
    getAccounts,
    getParenrAccount,
    isNotExitsAccount,
    postAccount
}
