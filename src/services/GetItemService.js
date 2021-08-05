
function myHeaders (){
    const headers = {
        'user_id':sessionStorage.getItem('user_id'),
        'company_id':sessionStorage.getItem('company_id'),
        'client_id':sessionStorage.getItem('client_id'),
        'authorization':sessionStorage.getItem('authorization'),
    };
    return headers;
}


let  getReorderCount = (locId) => {
    return new Promise((resolve,reject)=>{
        const endpoint = sessionStorage.getItem('base_url_gql')+'/graphql';

        const query = /* GraphQL */`
        query  ReOrderItemCount(
        $client : String!,
        $userId : String!,
        $auth : String!,
        $comId : String!,
        $location : String,
       )
        {
        ReOrderItemCount(
        client_id: $client,
        company_id: $comId,
        auth_id: $auth,
        user_id: $userId,
        location_id: $location,
        )
       {
         count
       }
     }`;

        const variables = {
            client: sessionStorage.getItem('client_id'),
            userId: sessionStorage.getItem('user_id'),
            auth: sessionStorage.getItem('authorization'),
            comId: sessionStorage.getItem('company_id'),
            location: locId,

        };

        fetch(endpoint, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query, variables })
        })
            .then(response => response.json())
            .then(
                (FindResponse) => {
                    resolve(FindResponse.data.ReOrderItemCount.count);
                },
                (error) => {
                    reject(0.00)
                }
            )

            .catch((e) => {
                reject(0.00)
            })

    });

};

let  getStockValueSalesWise = (location) => {
    return new Promise((resolve,reject)=>{
        const endpoint = sessionStorage.getItem('base_url_gql')+'/graphql';

        const query = /* GraphQL */`
        query  TotalSalesValue(
        $client : String!,
        $userId : String!,
        $auth : String!,
        $comId : String!,
        $location : String,
        )
            {
            TotalSalesValue(
            client_id: $client,
            company_id: $comId,
            auth_id: $auth,
            user_id: $userId,
            location_id: $location,
            
            )
        {
            total
        }
        }`;

        const variables = {
            client: sessionStorage.getItem('client_id'),
            userId: sessionStorage.getItem('user_id'),
            auth: sessionStorage.getItem('authorization'),
            comId: sessionStorage.getItem('company_id'),
            location: location,
        };

        fetch(endpoint, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query, variables })
        })
            .then(response => response.json())
            .then(
                (FindResponse) => {
                    if (FindResponse.data.TotalSalesValue.total !== null){
                    resolve(FindResponse);
                    }
                    else{
                        reject(0.00)
                    }
                },
                (error) => {
                    reject(0.00)
                }
            )

            .catch((e) => {
                reject(0.00)
            })

    });

};

let getAllBasicItems = (location,index,count,callingFrom) => {
    return new Promise((resolve,reject) => {


        // let URL_REGISTER = sessionStorage.getItem('base_url') + '/api/item/items/summary?page_limit='+limit+'&&&location_id='+location+'&&&type=%5E(%3F!M%24).*%24&&&page_offset='+offset+'&&&&&';
        //todo canada lotto and lottery
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/item/items/summary?page_limit='+count+'&&&location_id='+location+'&&&type=M|I|P|S|T|U|V|W|X|Y|Z|F&&page_offset='+index+'&&&&&';

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

let getItemByProductType = (type, callingFrom) => {
    return new Promise((resolve,reject) => {


        // let URL_REGISTER = sessionStorage.getItem('base_url') + '/api/item/items/summary?page_limit='+limit+'&&&location_id='+location+'&&&type=%5E(%3F!M%24).*%24&&&page_offset='+offset+'&&&&&';
        //todo canada lotto and lottery
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/item/items?type='+type+'&&&&&&';

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

let getAllManufactureItems = (location,type,index,count,) => {
    return new Promise((resolve,reject) => {

        // let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/item/items/summary?page_limit='+count+'&&&location_id='+location+'&&&type=M&&&page_offset='+index+'&&&&&';
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/item/items/summary?page_limit='+count+'&&&location_id='+location+'&&type='+type+'&&page_offset='+index+'&&&&';

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


let getAllItems = (location,type,category,index,count,callingFrom) => {
    return new Promise((resolve,reject) => {
        // let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/inv/item/inventories?page_limit='+count+'&&location_id='+location+'&&type='+type+'&&page_offset='+index+'&&&&';
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/inv/item/inventories?page_limit='+count+'&&location_id='+location+'&&type='+type+'&&page_offset='+index+'&category='+category+'&&&';

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.inventories && FindResponse.inventories.length > 0){
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

let getAllItemsSummary = (location,type,index,count,callingFrom) => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/item/items/summary?page_limit='+count+'&&&location_id='+location+'&&type='+type+'&&&page_offset='+index+'&&&&';

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.items && FindResponse.items.length > 0){
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

let itemByCategory = (limit,offset,location,category) => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER = sessionStorage.getItem('base_url') + '/api/item/items/summary?page_limit='+limit+'&&location_id='+location+'&&&&&&page_offset='+offset+'&&category='+category+'&&&';

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.items && FindResponse.items.length > 0){
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

let itemBySubcategory = (limit,offset,location,category,subcategory) => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER = sessionStorage.getItem('base_url') + '/api/item/items/summary?page_limit='+limit+'&&location_id='+location+'&&&&&&page_offset='+offset+'&&category='+category+'&subcategory='+subcategory+'&&'

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.items && FindResponse.items.length > 0){
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

let getInvItemDetails = (itemNumber,itemBid,location) => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER = sessionStorage.getItem('base_url') + '/api/inv/item/inventory/'+itemNumber+'/'+itemBid+'?location_id='+location;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.item && FindResponse.item.length > 0){
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


let getAllInventoryItemSearch = (searchWord,location) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/inv/item/inventories/number-desc/'+searchWord+'?location_id='+location;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.item && FindResponse.item.length > 0){
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

let ItemInventoryCount = (location) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/rpt/items/total-inventories/count/loc?type=M|I|P|S|T|U|V|W|X|Y|Z&location_id='+location;


        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.items && FindResponse.items.length > 0 ){
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

let ItemCount = (location) => {
    return new Promise((resolve,reject) => {
        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/rpt/items/total-items?location_id='+location;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.items && FindResponse.items.length > 0 ){
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

let getCategoriesItems = (productType,location) => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/item/cat/categories?type='+productType+'&location_id='+location;

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

let getSubCategories = (productType,location,category) => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/item/cat/subcategories?type='+productType+'&location_id='+location+'&category='+category;

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

let getCategoriseWiseItems = (category) => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/inv/item/inventories?category='+category+'&&&';


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

let isExitsInventoryItem = (itemNumber,salesPrice,locationId,expiryDate) => {
    return new Promise((resolve, reject) => {
        let exitsUrl;

        if(expiryDate !== 'n/l' &&  expiryDate !== null && expiryDate !== "Invalid date" && expiryDate !== undefined){
            exitsUrl = sessionStorage.getItem('base_url') + '/api/inv/item/inventory/exits/by/'+ salesPrice
                +'?location_id='+ locationId +'&item_number=%5E'+ itemNumber +'%24&expiry_date='+expiryDate;
        }
        else{
            exitsUrl = sessionStorage.getItem('base_url') + '/api/inv/item/inventory/exits/by/'+ salesPrice
                +'?location_id='+ locationId +'&item_number=%5E'+ itemNumber +'%24&';
        }

        fetch(exitsUrl,{
            method: 'GET',
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.item){
                    resolve(FindResponse.item)
                    }
                },
                (error) => {
                    reject(0)
                })

    });

};


let getFindInventoryItem = (searchWord,isNum) => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER;
        if(isNum){
            URL_REGISTER = sessionStorage.getItem('base_url')+'/api/inv/item/inventory/'+searchWord;
        }
        else {
            // URL_REGISTER = sessionStorage.getItem('base_url')+'/api/inv/item/inventories/number-desc/%5E'+searchWord+'%24';
            URL_REGISTER = sessionStorage.getItem('base_url')+'/api/inv/item/inventories/number-desc/'+searchWord;
        }

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.item ){
                        resolve(FindResponse)
                    }
                    else {
                        reject(0)
                    }
                },
                (error) => {
                    reject(0)
                }
            )
    });

};

let getReorderByNumberAndSupplier = (itemNumber,location_id,supplier,index,count,) => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/inv/item/reorder?page_limit='+count+'&location_id='+location_id+'&supplier_name='+supplier+'&page_offset='+index+'&&&&item_number='+itemNumber;

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.items && FindResponse.items.length > 0){
                        resolve(FindResponse)
                    }
                    else {
                        reject(0)
                    }
                },
                (error) => {
                    reject(0)
                }
            )
    });

};


let getItemByNumber = (itemNumber) => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/item/item/'+itemNumber;

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
                    reject(0)
                }
            )
    });

};

let getItemByNumberBid = (itemNumber,itemBid) => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/item/item/'+itemNumber+'/'+itemBid;

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
                    reject(0)
                }
            )
    });

};

let getItemInvByNumber = (itemNumber,location) => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/inv/item/inventory/'+itemNumber+'?location_id='+location;

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
                    reject(0)
                }
            )
    });

};

let getFindSummaryItem = (searchWord,isNum) => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER;
        if(isNum){
            URL_REGISTER = sessionStorage.getItem('base_url')+'/api/item/items/summary?item_number='+searchWord;
        }
        else {
            URL_REGISTER = sessionStorage.getItem('base_url')+'/api/item/items/summary?item_desc='+searchWord+'&&&&&&&';
        }

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.items.length > 0 ){
                        resolve(FindResponse)
                    }
                    else {
                        reject(0)
                    }
                },
                (error) => {
                    reject(0)
                }
            )
    });
};

let getItemFullText = (searchText) => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/item/item/fulltext/'+searchText+'%3A*';

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.item && FindResponse.item.length > 0 ){
                        resolve(FindResponse)
                    }
                    else{
                        reject(0)
                    }
                },
                (error) => {
                    reject(0)
                }
            )
    });

};

let getItemSummaryFullText = (searchText) => {
    return new Promise((resolve,reject) => {

        let URL_REGISTER = sessionStorage.getItem('base_url')+'/api/item/item/summary/fulltext/'+`'${searchText}'`+'%3A*';

        fetch(URL_REGISTER,{
            method: "GET",
            headers: myHeaders()
        })
            .then(Response => Response.json())
            .then(
                (FindResponse) => {
                    if(FindResponse.item && FindResponse.item.length > 0 ){
                        resolve(FindResponse)
                    }
                    else{
                        reject(0)
                    }
                },
                (error) => {
                    reject(0)
                }
            )
    });

};

export {
        getAllItems,getAllItemsSummary,getAllInventoryItemSearch,ItemInventoryCount,ItemCount,getStockValueSalesWise,getCategoriesItems,
        getCategoriseWiseItems,getAllBasicItems,getReorderCount,isExitsInventoryItem,
        getItemByNumber,getFindSummaryItem,getSubCategories,getFindInventoryItem,
        getReorderByNumberAndSupplier,getItemFullText,getItemSummaryFullText, getItemInvByNumber,getAllManufactureItems,
        itemByCategory,itemBySubcategory,getInvItemDetails,getItemByNumberBid,getItemByProductType,
    }
