
function myHeaders (){
    const headers = {
        'user_id':sessionStorage.getItem('user_id'),
        'company_id':sessionStorage.getItem('company_id'),
        'client_id':sessionStorage.getItem('client_id'),
        'authorization':sessionStorage.getItem('authorization'),
    };

    return headers;
}


let getAllLoyaltyCards = () => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/rewards/reg/cards';

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.cards && FindResponse.cards.length > 0){
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

let getLoyaltyCardDetailsByID = (ID) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/rewards/reg/card/'+ID;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.card && FindResponse.card.length > 0){
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
    getAllLoyaltyCards,getLoyaltyCardDetailsByID
}
