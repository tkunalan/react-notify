function myHeaders (){
    const headers = {
        'user_id':sessionStorage.getItem('user_id'),
        'company_id':sessionStorage.getItem('company_id'),
        'client_id':sessionStorage.getItem('client_id'),
        'authorization':sessionStorage.getItem('authorization'),
    };

    return headers;
}


let getAllTrialBalance = (start_date,end_date,index,count,callingFrom) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/fnrpt/trial-balance?end_date='+end_date+'&start_date='+start_date;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {

                    if(FindResponse.trialbalance && FindResponse.trialbalance.length > 0){
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

let getTrialBalanceSum = (start_date,end_date,index,count,callingFrom) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/fnrpt/trial-balance-sum?end_date='+end_date+'&start_date='+start_date;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {

                    if(FindResponse.trialbalance_total && FindResponse.trialbalance_total.length > 0){
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

export {getAllTrialBalance,getTrialBalanceSum}