function myHeaders (){
    const headers = {
        'user_id':sessionStorage.getItem('user_id'),
        'company_id':sessionStorage.getItem('company_id'),
        'client_id':sessionStorage.getItem('client_id'),
        'authorization':sessionStorage.getItem('authorization'),
    };

    return headers;
}


let expenseTotal = (startDate,endDate,locationId) =>{

    return new Promise((resolve,reject) => {
        let URL_EXPENSE = sessionStorage.getItem('base_url')+'/api/rpt/expense/total?location_id='+locationId+'&end_date='+endDate+'&start_date='+startDate;

        fetch(URL_EXPENSE,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse !== undefined){
                        let expenesAmount = 0.00;
                        for(let data of FindResponse.expense){
                            expenesAmount += data.total
                        }
                        resolve((expenesAmount)*-1)
                    }
                },
                (error) => {
                    reject(0.00)
                }

            )
    })
};

let expenseCategory = (startDate,endDate,locationId) => {

    return new Promise((resolve,reject) =>{
        let URL_SALES = sessionStorage.getItem('base_url')+'/api/rpt/expense/total/categorywise/withoutsubcategory?location_id='+locationId+'&end_date='+endDate+'&start_date='+startDate+'&';
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




let getAllExpense = (start_date,end_date,location_id,index,count,callingFrom) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/expense/expenses?page_limit='+count+'&location_id='+location_id+'&&&start_date='+start_date+'&&page_offset='+index+'&&&end_date='+end_date+'&';

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponseTotal) => {
                    if(FindResponseTotal){
                        resolve(FindResponseTotal)
                    }
                },
                (error) => {
                    reject(0.00)
                })
    });
};

let getAllExpensesGetExpenseID = (expenseID) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/expense/expense/'+expenseID;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {

                    if(FindResponse.expense.length > 0){
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

export {expenseTotal,expenseCategory, getAllExpense,getAllExpensesGetExpenseID}
