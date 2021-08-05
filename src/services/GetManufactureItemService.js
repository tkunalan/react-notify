function myHeaders (){
    const headers = {
        'user_id':sessionStorage.getItem('user_id'),
        'company_id':sessionStorage.getItem('company_id'),
        'client_id':sessionStorage.getItem('client_id'),
        'authorization':sessionStorage.getItem('authorization'),
    };

    return headers;
}


let getCategoriesManufactureItems = (type,location) => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/item/cat/categories?type='+type+'&location_id='+location;

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


let getSubCategoriesManufactureItems = (type,location,subCategory) => {
    return new Promise((resolve,reject) => {

        // let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/item/cat/subcategories?location_id=1&category='+subCategory;
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/item/cat/subcategories?type='+type+'&location_id='+location+'&category='+subCategory;

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


let getManufactureItemsByCategory = (limit,offset,location,category) => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER = sessionStorage.getItem('base_url') + '/api/item/items/summary?page_limit='+limit+'&&location_id='+location+'&&&&&&page_offset='+offset+'&&category='+category+'&&&';

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

let getManufactureItemsBySubCategory = (limit,offset,location,category,subCategory) => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER = sessionStorage.getItem('base_url') + '/api/item/items/summary?page_limit='+limit+'&&location_id='+location+'&&&&&&page_offset='+offset+'&&category='+category+'&subcategory='+subCategory+'&&';

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

let getManufactureWorkOrders = (startDate,endDate,location_id,index,count,callingFrom) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/mnf/workorders?page_limit='+count+'&location_id='+location_id+'&start_date='+startDate+'&page_offset='+index+'&&&&end_date='+endDate;

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

let getManufactureWorkOrdersByOrderId = (orderId) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/mnf/workorder/'+orderId;

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

export {
    getCategoriesManufactureItems,getSubCategoriesManufactureItems,getManufactureItemsByCategory,
    getManufactureItemsBySubCategory,getManufactureWorkOrders,getManufactureWorkOrdersByOrderId
}
