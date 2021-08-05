let getSalesWiseStockValue = (location) => {
    return new Promise((resolve, reject) => {
        const endpoint = sessionStorage.getItem('base_url_gql') + '/graphql';

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
            body: JSON.stringify({query, variables})
        })
            .then(response => response.json())
            .then(
                (stockValue) => {
                    if (stockValue.data.TotalSalesValue.total !== null) {
                        let totalSalesValue = stockValue.data.TotalSalesValue.total < 0 ?
                            stockValue.data.TotalSalesValue.total  : stockValue.data.TotalSalesValue.total;
                        resolve(totalSalesValue);
                    } else {
                        resolve(0.00)
                    }
                },
                (error) => {
                    reject(error);
                }
            )
            .catch((e) => {
                console.log(e)
            })
    });
};


let getAllStockValue = (location) => {
    return new Promise((resolve, reject) => {
        const endpoint = sessionStorage.getItem('base_url_gql') + '/graphql';

        const query = /* GraphQL */`
        query  TotalStockValue(
        $client : String!,
        $userId : String!,
        $auth : String!,
        $comId : String!,
        $location : String,
        
       )
        {
        TotalStockValue(
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
            body: JSON.stringify({query, variables})
        })
            .then(response => response.json())
            .then(
                (stockValue) => {
                    if (stockValue.data.TotalStockValue.total !== null) {
                        let TotalStockValue = stockValue.data.TotalStockValue.total < 0 ?
                            stockValue.data.TotalStockValue.total * -1 : stockValue.data.TotalStockValue.total;
                        resolve(TotalStockValue);
                    } else {
                        resolve(0.00);
                    }
                },
                (error) => {
                    reject(error);
                }
            )

            .catch((e) => {
                console.log(e)
            })
    });
};

let getAllStockValueAcct = (location) => {
    return new Promise((resolve, reject) => {
        const endpoint = sessionStorage.getItem('base_url_gql') + '/graphql';

        const query = /* GraphQL */`
        query  TotalStockValueAcct(
        $client : String!,
        $userId : String!,
        $auth : String!,
        $comId : String!,
        $location : String,
        
       )
        {
        TotalStockValueAcct(
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
            body: JSON.stringify({query, variables})
        })
            .then(response => response.json())
            .then(
                (stockValue) => {
                    if (stockValue.data.TotalStockValueAcct.total !== null) {
                        let TotalStockValueAcct = stockValue.data.TotalStockValueAcct.total < 0 ?
                            stockValue.data.TotalStockValueAcct.total  : stockValue.data.TotalStockValueAcct.total;
                        resolve(TotalStockValueAcct);
                    } else {
                        resolve(0.00);
                    }
                },
                (error) => {
                    reject(error);
                }
            )

            .catch((e) => {
                console.log(e)
            })
    });
};

let CustomerTotalCredit = () => {
    return new Promise((resolve, reject) => {
        const endpoint = sessionStorage.getItem('base_url_gql') + '/graphql';

        const query = /* GraphQL */`
        query  TotalReceivable(
        $client : String!,
        $userId : String!,
        $auth : String!,
        $comId : String!,
        
       )
        {
        TotalReceivable(
        client_id: $client,
        company_id: $comId,
        auth_id: $auth,
        user_id: $userId,
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
        };

        fetch(endpoint, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({query, variables})
        })
            .then(response => response.json())
            .then(
                (FindResponse) => {
                    if (FindResponse.data.TotalReceivable.total) {
                        resolve(FindResponse.data.TotalReceivable.total)
                    } else {
                        resolve(0.00)
                    }
                },
                (error) => {
                    reject(error)
                }
            )

            .catch((e) => {
                console.log(e)
            })

    });
};


let orderDiscountTotal = (startDate, endDate, location) => {
    return new Promise((resolve, reject) => {
        const endpoint = sessionStorage.getItem('base_url_gql') + '/graphql';

        const query = /* GraphQL */`
        query GetOrderDiscountTotal(
            $client : String!,
            $userId : String!,
            $auth : String!,
            $comId : String!,
            $start_date: String!,
            $end_date: String!, 
            $location_id: String!,           
        )
        {
            GetOrderDiscountTotal(
            client_id: $client,
            company_id: $comId,
            auth_id: $auth,
            user_id: $userId,
            start_date: $start_date,
            end_date: $end_date,
            location_id: $location_id,      
        )
       {
           discount_total
       }
     }`;


        const variables = {
            client: sessionStorage.getItem('client_id'),
            userId: sessionStorage.getItem('user_id'),
            auth: sessionStorage.getItem('authorization'),
            comId: sessionStorage.getItem('company_id'),
            start_date: startDate,
            end_date: endDate,
            location_id: location,
        };

        fetch(endpoint, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({query, variables})
        })
            .then(response => response.json())
            .then(
                (FindResponse) => {
                    if (FindResponse.data.GetOrderDiscountTotal) {
                        resolve(FindResponse.data.GetOrderDiscountTotal[0].discount_total)
                    } else {
                        resolve(0.00)
                    }
                },
                (error) => {
                    reject(error)
                }
            )

            .catch((e) => {
                console.log(e)
            })

    });
};



let getSubTotal = (startDate, endDate, location) => {
    return new Promise((resolve, reject) => {
        const endpoint = sessionStorage.getItem('base_url_gql') + '/graphql';

        const query = /* GraphQL */`
        query SalesTotalReport(
            $client : String!,
            $userId : String!,
            $auth : String!,
            $comId : String!,
            $start_date: String!,
            $end_date: String!, 
            $location_id: String!,           
        )
        {
            SalesTotalReport(
            client_id: $client,
            company_id: $comId,
            auth_id: $auth,
            user_id: $userId,
            start_date: $start_date,
            end_date: $end_date,
            location_id: $location_id,      
        )
       {
            txn_date,
            txn_type,
            txn_type_name,
            total,
            vat_total,
            sub_total,
            location_id,
            count,
            report_type,
       }
     }`;

        const variables = {
            client: sessionStorage.getItem('client_id'),
            userId: sessionStorage.getItem('user_id'),
            auth: sessionStorage.getItem('authorization'),
            comId: sessionStorage.getItem('company_id'),
            start_date: startDate,
            end_date: endDate,
            location_id: location,

        };
        fetch(endpoint, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({query, variables})
        })
            .then(response => response.json())
            .then(
                (FindResponse) => {
                    if (FindResponse.data.SalesTotalReport[0].sub_total > 0) {
                        let vat_total = FindResponse.data.SalesTotalReport[0].vat_total;
                        let sub_total = FindResponse.data.SalesTotalReport[0].sub_total;
                        let total = sub_total - vat_total;
                        resolve(total)
                    } else {
                        resolve(0.00)
                    }
                },
                (error) => {
                    reject(error)
                }
            )

            .catch((e) => {
                console.log(e)
            })

    });
};


let getTodayCashInHand = (startDate, endDate, location, cashier) => {
    return new Promise((resolve, reject) => {
        const endpoint = sessionStorage.getItem('base_url_gql') + '/graphql';

        const query = /* GraphQL */`
        query 
        PaymentTotalReport(
            $client : String!,
            $userId : String!,
            $auth : String!,
            $comId : String!,
            $start_date: String!,
            $end_date: String!, 
            $location_id: String!,           
            $cashier: String!,           
        )
        {
        PaymentTotalReport(
           client_id: $client,
            company_id: $comId,
            auth_id: $auth,
            user_id: $userId,
            start_date: $start_date,
            end_date: $end_date,
            location_id: $location_id,      
            cashier:$cashier,
        )
  {
    txn_type
    txn_date
    total
    
  }
  
  PaymentOutTotalReport(
          client_id: $client,
            company_id: $comId,
            auth_id: $auth,
            user_id: $userId,
            start_date: $start_date,
            end_date: $end_date,
            location_id: $location_id,   
             cashier:$cashier,         
        )
  {
    txn_date
    txn_type
    total
  }
  
}
        `;

        const variables = {
            client: sessionStorage.getItem('client_id'),
            userId: sessionStorage.getItem('user_id'),
            auth: sessionStorage.getItem('authorization'),
            comId: sessionStorage.getItem('company_id'),
            start_date: startDate,
            end_date: endDate,
            location_id: location,
            cashier: cashier,
        };
        fetch(endpoint, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({query, variables})
        })
            .then(response => response.json())
            .then(
                (FindResponse) => {

                    let salesTotal = 0;
                    let salesReturnTotal = 0;
                    let supplierTotal = 0;
                    let customerReceivedTotal = 0;
                    let expenseTotal = 0;

                    try {
                        for (let payTotal of FindResponse.data.PaymentTotalReport) {
                            if (payTotal.txn_date === '1001' && payTotal.txn_type === 1001) {
                                salesTotal += payTotal.total;
                            }

                            if (payTotal.txn_date === '1004' && payTotal.txn_type === 1001) {
                                customerReceivedTotal += payTotal.total;
                            }

                            if (payTotal.txn_date === '1002' && payTotal.txn_type === 1001) {
                                customerReceivedTotal += payTotal.total;
                            }

                            if (payTotal.txn_date === '1005' && payTotal.txn_type === 1001) {
                                expenseTotal += payTotal.total;
                            }

                            if (payTotal.txn_date === '1006' && payTotal.txn_type === 1001) {
                                salesReturnTotal += payTotal.total;
                            }
                        }

                    } catch (e) {
                        console.log(e)
                    }

                    try {
                        for (let payOutTotal of FindResponse.data.PaymentOutTotalReport) {
                            if (payOutTotal.txn_date === '1016' && payOutTotal.txn_type === 1001) {
                                supplierTotal += payOutTotal.total;
                            }

                            if (payOutTotal.txn_date === '1018' && payOutTotal.txn_type === 1001) {
                                supplierTotal += payOutTotal.total;
                            }
                        }
                    } catch (e) {
                        console.log(e)
                    }

                    resolve({
                        salesTotal,
                        salesReturnTotal,
                        supplierTotal,
                        customerReceivedTotal,
                        expenseTotal,
                    })
                },
                (error) => {
                    reject(error)
                }
            )

            .catch((e) => {
                console.log(e)
            })

    });
};

let getItemProfit = (startDate, endDate, location, reportType, category) => {
    return new Promise((resolve, reject) => {
        const endpoint = sessionStorage.getItem('base_url_gql') + '/graphql';

        const query = /* GraphQL */`
        query 
        PaymentTotalReport(
            $client : String!,
            $userId : String!,
            $auth : String!,
            $comId : String!,
            $start_date: String!,
            $end_date: String!, 
            $location_id: String!,           
            $reportType: String!, 
            $category : String!,                
        )
         {
         FinanceReport(
                  client_id: $client,
                    company_id: $comId,
                    auth_id: $auth,
                    user_id: $userId,
                    start_date: $start_date,
                    end_date: $end_date,
                    location_id: $location_id,     
                    report_type: $reportType,
                    category: $category       
                )
          {
            item_number
            item_desc
            total_qty
            ave_cost
            profit
            last_purchase_price
            item_discount
            total_sales
            total_cost
            profit
            txn_type
            sales_type
          }
        }
        `;

        const variables = {
            client: sessionStorage.getItem('client_id'),
            userId: sessionStorage.getItem('user_id'),
            auth: sessionStorage.getItem('authorization'),
            comId: sessionStorage.getItem('company_id'),
            start_date: startDate,
            end_date: endDate,
            location_id: location,
            reportType: reportType,
            category: category,
        };
        fetch(endpoint, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({query, variables})
        })
            .then(response => response.json())
            .then(
                (FindResponse) => {
                    resolve(FindResponse)
                },
                (error) => {
                    reject(error)
                }
            )

            .catch((e) => {
                console.log(e)
            })

    });
};

let getItemProfitTotal = (startDate, endDate, category) => {
    return new Promise((resolve, reject) => {
        const endpoint = sessionStorage.getItem('base_url_gql') + '/graphql';

        const query = /* GraphQL */`
        query 
        FinanceCategoryTotal(
            $client : String!,
            $userId : String!,
            $auth : String!,
            $comId : String!,
            $start_date: String!,
            $end_date: String!,
            $category : String!,                
        )
         {
           FinanceCategoryTotal(
                    client_id: $client,
                    company_id: $comId,
                    auth_id: $auth,
                    user_id: $userId,
                    start_date: $start_date,
                    end_date: $end_date,
                    category: $category  

              )
              {
               total_sales
                total_cost
                total_profit
                lifo_cost
                txn_type
              }
  
        }
        `;

        const variables = {
            client: sessionStorage.getItem('client_id'),
            userId: sessionStorage.getItem('user_id'),
            auth: sessionStorage.getItem('authorization'),
            comId: sessionStorage.getItem('company_id'),
            start_date: startDate,
            end_date: endDate,
            category: category,
        };

        fetch(endpoint, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({query, variables})
        })
            .then(response => response.json())
            .then(
                (FindResponse) => {
                    let totalSales = 0;
                    let totalCost = 0;
                    let totalProfit = 0;
                    let totalLifoCost = 0;


                    try {
                        for (let profitTotal of FindResponse.data.FinanceCategoryTotal) {
                            if (profitTotal.txn_type === 1001) {
                                totalSales += profitTotal.total_sales;
                                totalCost += profitTotal.total_cost;
                                totalProfit += profitTotal.total_profit;
                                totalLifoCost += profitTotal.lifo_cost;
                            }
                            if (profitTotal.txn_type === 1002) {
                                totalSales += profitTotal.total_sales;
                                totalCost += profitTotal.total_cost;
                                totalProfit += profitTotal.total_profit;
                                totalLifoCost += profitTotal.lifo_cost;
                            }
                            if (profitTotal.txn_type === 1101) {
                                totalSales -= profitTotal.total_sales;
                                totalCost -= profitTotal.total_cost;
                                totalProfit -= profitTotal.total_profit;
                                totalLifoCost -= profitTotal.lifo_cost;
                            }
                        }
                    } catch (e) {
                        console.log(e)
                    }
                    resolve({
                        totalSales,
                        totalCost,
                        totalProfit,
                        totalLifoCost,
                    })
                },
                (error) => {
                    reject(error)
                }
            )

            .catch((e) => {
                console.log(e)
            })

    });
};

let getItemProfitRefresh = (reportType) => {
    return new Promise((resolve, reject) => {
        const endpoint = sessionStorage.getItem('base_url_gql') + '/graphql';

        const query = /* GraphQL */`
          query 
        FinanceReportRefresh(
            $client : String!,
            $userId : String!,
            $auth : String!,
            $comId : String!,         
            $reportType: String!,      
        )
   
         {
           FinanceReportRefresh(
                  client_id: $client,
                    company_id: $comId,
                    auth_id: $auth,
                    user_id: $userId,
                    report_type: $reportType,            
                )
          {
            total
          }
        }
        `;

        const variables = {
            client: sessionStorage.getItem('client_id'),
            userId: sessionStorage.getItem('user_id'),
            auth: sessionStorage.getItem('authorization'),
            comId: sessionStorage.getItem('company_id'),
            reportType: reportType,
        };
        fetch(endpoint, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({query, variables})
        })
            .then(response => response.json())
            .then(
                (FindResponse) => {
                    resolve(FindResponse)
                },
                (error) => {
                    reject(error)
                }
            )

            .catch((e) => {
                console.log(e)
            })

    });
};

let getItemActivity = (location,itemNo,page_offset,page_limit) => {
    return new Promise((resolve, reject) => {
        const endpoint = sessionStorage.getItem('base_url_gql') + '/graphql';

        const query = /* GraphQL */`
        query 
        StockAuditReport(
            $client : String!,
            $userId : String!,
            $auth : String!,
            $comId : String!,
            $location_id: String!,                        
            $item_no: String!,                        
            $limit: Int!,                        
            $offSet: Int!,                        
        )
         {
            StockAuditReport(
                    client_id: $client,
                    company_id: $comId,
                    auth_id: $auth,
                    user_id: $userId,
                    location_id: $location_id,          
                    item_no: $item_no,          
                    limit: $limit,          
                    offSet: $offSet,          
                )
          {
            item_number,
            item_desc,
            sales,
            invoice,
            receive,
            sales_return,
            purch_return,
            qoh_total
          }
        }
        `;

        const variables = {
            client: sessionStorage.getItem('client_id'),
            userId: sessionStorage.getItem('user_id'),
            auth: sessionStorage.getItem('authorization'),
            comId: sessionStorage.getItem('company_id'),
            location_id: location,
            item_no: itemNo,
            limit: page_limit,
            offSet: page_offset,
        };
        fetch(endpoint, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({query, variables})
        })
            .then(response => response.json())
            .then(
                (FindResponse) => {
                    resolve(FindResponse)
                },
                (error) => {
                    reject(error)
                }
            )

            .catch((e) => {
                console.log(e)
            })

    });
};

let postOpeningBalance = (location, balance, type, startDate, endDate, manualBalance, different,userName) => {
    return new Promise((resolve, reject) => {
        const endpoint = sessionStorage.getItem('base_url_gql') + '/graphql';

        const query = `mutation AddOpeningBalance(
        $client : String!,
        $userId : String!,
        $auth : String!,
        $comId : String!,
        $location_id : Int!,
        $balance: Float!,
        $type: String!,
        $created : String!,
        $last_updated : String!,
        $manual_balance : Float!,
        $different : Float!,
        $user_name : String!
        ) {
  addOpeningBalance(
            client_id : $client,
            company_id : $comId ,
            user_id :  $userId,
            auth_id : $auth,
            balance:  $balance,
            location_id: $location_id,
            type: $type,
            created: $created,
            last_updated : $last_updated,
            manual_balance:  $manual_balance,
            different: $different,
            user_name : $user_name
  ) {
    balance
  }
}`;
        const variables = {
            client: sessionStorage.getItem('client_id'),
            userId: sessionStorage.getItem('user_id'),
            auth: sessionStorage.getItem('authorization'),
            comId: sessionStorage.getItem('company_id'),
            location_id: location,
            balance: balance,
            type: type,
            created: startDate,
            last_updated: endDate,
            manual_balance: manualBalance,
            different: different,
            user_name: userName,
        };

        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({query, variables})
        })
            .then(response => response.json())
            .then(
                (FindResponse) => {
                    resolve(FindResponse)
                },
                (error) => {
                    reject(error)
                }
            )
            .catch((e) => {
                console.log(e)
            })
    });
};

let getOpeningBalanceTotal = (startDate,endDate,location) => {
    return new Promise((resolve, reject) => {
        const endpoint = sessionStorage.getItem('base_url_gql') + '/graphql';

        const query = /* GraphQL */`
          query 
        GetTodayOpeningBalance(
            $client : String!,
            $userId : String!,
            $auth : String!,
            $comId : String!,         
            $location_id: String!,      
            $start_date: String!,      
            $end_date: String!,      
        )
   
         {
           GetTodayOpeningBalance(
                   client_id: $client,
                    company_id: $comId,
                    auth_id: $auth,
                    user_id: $userId,
                    location_id: $location_id,      
                    start_date: $start_date,      
                    end_date: $end_date,             
                )
          {
            total
          }
        }
        `;

        const variables = {
            client: sessionStorage.getItem('client_id'),
            userId: sessionStorage.getItem('user_id'),
            auth: sessionStorage.getItem('authorization'),
            comId: sessionStorage.getItem('company_id'),
            location_id: location,
            start_date:startDate,
            end_date: endDate,
        };
        fetch(endpoint, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({query, variables})
        })
            .then(response => response.json())
            .then(
                (FindResponse) => {
                    if (FindResponse.data.GetTodayOpeningBalance.total > 0) {
                        resolve(FindResponse.data.GetTodayOpeningBalance.total);
                    } else {
                        resolve(0.00)
                    }
                },
                (error) => {
                    reject(error)
                }
            )

            .catch((e) => {
                console.log(e)
            })

    });
};

let postItemImage = (data) => {
    return new Promise((resolve, reject) => {
        const endpoint = sessionStorage.getItem('base_url_gql') + '/graphql';

        const query = `mutation addItemImage(
        $client : String!,
        $userId : String!,
        $auth : String!,
        $comId : String!,
        $location_id : Int!,
        $created : String!,
        $last_updated : String!,
        $image : String!,
        $item_number : String!,
        ) {
  addItemImage(
            client_id : $client,
            company_id : $comId ,
            user_id :  $userId,
            auth_id : $auth,
            location_id: $location_id,
            created: $created,
            last_updated : $last_updated,
            image:  $image,
            item_number: $item_number,
  ) {
   item_number,
    image
  }
}`;

        const variables = {
            client: sessionStorage.getItem('client_id'),
            userId: sessionStorage.getItem('user_id'),
            auth: sessionStorage.getItem('authorization'),
            comId: sessionStorage.getItem('company_id'),
            location_id: data.get('location'),
            created: data.get('created'),
            last_updated: data.get('last_updated'),
            image : data.get('image'),
            item_number : data.get('item_number'),
        };

        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({query, variables})
        })
            .then(response => response.json())
            .then(
                (FindResponse) => {
                    resolve(FindResponse)
                },
                (error) => {
                    reject(error)
                }
            )
            .catch((e) => {
                console.log(e)
            })
    });
};

let getProfitAndLossReport = (startDate, endDate, location) => {
    const prefSettings = JSON.parse(sessionStorage.getItem("prefSettings"));
    return new Promise((resolve, reject) => {
        const endpoint = sessionStorage.getItem('base_url_gql') + '/graphql';

        const query = /* GraphQL */`
        query 
        ProfitAndLossReport(
            $client : String!,
            $userId : String!,
            $auth : String!,
            $comId : String!,
            $start_date: String!,
            $end_date: String!, 
            $location_id: String!,           
        )
        {
        ProfitAndLossReport(
           client_id: $client,
            company_id: $comId,
            auth_id: $auth,
            user_id: $userId,
            start_date: $start_date,
            end_date: $end_date,
            location_id: $location_id,      
        )
  {
    total
    txn_type
    txn_type_name
  }
  
  TotalSaleCostfinance(
          client_id: $client,
            company_id: $comId,
            auth_id: $auth,
            user_id: $userId,
            start_date: $start_date,
            end_date: $end_date,
            location_id: $location_id,            
        )
  {
   cost_total,
   total
  }
  
  TotalReturnCostfinance(
          client_id: $client,
            company_id: $comId,
            auth_id: $auth,
            user_id: $userId,
            start_date: $start_date,
            end_date: $end_date,
            location_id: $location_id,             
        )
  {
    cost_total,
    total
  }
}
`;

        const variables = {
            client: sessionStorage.getItem('client_id'),
            userId: sessionStorage.getItem('user_id'),
            auth: sessionStorage.getItem('authorization'),
            comId: sessionStorage.getItem('company_id'),
            start_date: startDate,
            end_date: endDate,
            location_id: location,

        };
        fetch(endpoint, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({query, variables})
        })
            .then(response => response.json())
            .then(
                (FindResponse) => {
                    let salesTotal = 0;
                    let invoiceTotal = 0;
                    let salesReturnTotal = 0;
                    let expenseTotal = 0;
                    let totalSaleCost = 0;
                    let totalReturnCost = 0;

                    try {
                        for (let PLTotal of FindResponse.data.ProfitAndLossReport) {
                            if (PLTotal.txn_type === 1001) {
                                salesTotal += PLTotal.total;
                            }

                            if (PLTotal.txn_type === 1002) {
                                invoiceTotal += PLTotal.total;
                            }

                            if (PLTotal.txn_type === 1101) {
                                salesReturnTotal += PLTotal.total;
                            }

                            if (PLTotal.txn_type === 1301) {
                                expenseTotal += PLTotal.total;
                            }

                        }

                    } catch (e) {
                        console.log(e)
                    }

                    try {
                        if(prefSettings.allowCostingMethod === "LIFO"){
                            totalSaleCost =  FindResponse.data.TotalSaleCostfinance.cost_total
                        }
                        else {
                            totalSaleCost =  FindResponse.data.TotalSaleCostfinance.total
                        }

                    } catch (e) {
                        console.log(e)
                    }

                    try {
                        if(prefSettings.allowCostingMethod === "LIFO") {
                            totalReturnCost = FindResponse.data.TotalReturnCostfinance.cost_total
                        }
                        else {
                            totalReturnCost = FindResponse.data.TotalReturnCostfinance.total
                        }
                    } catch (e) {
                        console.log(e)
                    }

                    resolve({
                        salesTotal,
                        invoiceTotal,
                        salesReturnTotal,
                        expenseTotal,
                        totalSaleCost,
                        totalReturnCost,
                    })
                },
                (error) => {
                    reject(error)
                }
            )

            .catch((e) => {
                console.log(e)
            })

    });
};


// let getReturnSubTotal = (startDate,endDate,location) =>{
//     return new Promise((resolve, reject) => {
//         const endpoint = sessionStorage.getItem('base_url_gql')+'/graphql';
//
//         const query = /* GraphQL */`
//         query SalesTotalReport(
//             $client : String!,
//             $userId : String!,
//             $auth : String!,
//             $comId : String!,
//             $start_date: String!,
//             $end_date: String!,
//             $location_id: String!,
//         )
//         {
//             SalesTotalReport(
//             client_id: $client,
//             company_id: $comId,
//             auth_id: $auth,
//             user_id: $userId,
//             start_date: $start_date,
//             end_date: $end_date,
//             location_id: $location_id,
//         )
//        {
//             txn_date,
//             txn_type,
//             txn_type_name,
//             total,
//             vat_total,
//             sub_total,
//             location_id,
//             count,
//             report_type,
//        }
//      }`;
//
//         const variables = {
//             client: sessionStorage.getItem('client_id'),
//             userId: sessionStorage.getItem('user_id'),
//             auth: sessionStorage.getItem('authorization'),
//             comId: sessionStorage.getItem('company_id'),
//             start_date:startDate,
//             end_date:endDate,
//             location_id: location,
//
//         };
//         fetch(endpoint, {
//             method: 'post',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({query, variables})
//         })
//             .then(response => response.json())
//             .then(
//                 (FindResponse) => {
//                     if(FindResponse.data.SalesTotalReport[0].sub_total > 0){
//                         let vat_total = FindResponse.data.SalesTotalReport[0].vat_total;
//                         let sub_total = FindResponse.data.SalesTotalReport[0].sub_total;
//                         let total = sub_total - vat_total;
//                         resolve(total)
//                     }else{
//                         resolve(0.00)
//                     }
//                 },
//                 (error) => {
//                     reject(error)
//                 }
//             )
//
//             .catch((e) => {
//                 console.log(e)
//             })
//
//     });
// };

let getCustomerAging = (page_offset,page_limit,customer_id) => {
    return new Promise((resolve, reject) => {
        const endpoint = sessionStorage.getItem('base_url_gql') + '/graphql';

        const query = /* GraphQL */`
        query  AllCustomerCredit(
        $client : String!,
        $userId : String!,
        $auth : String!,
        $comId : String!,
        $customerId: String!,                        
        $limit: Int!,                        
        $offSet: Int!,       
       )
        {
            AllCustomerCredit(
        client_id: $client,
        company_id: $comId,
        auth_id: $auth,
        user_id: $userId,
        customer_id: $customerId,
        limit: $limit,
        offSet: $offSet,
       )
       {
        customer_id,
        customer_name,
        balance_due,
    		customerAgingDetails{
          case,
          balance_due
        }
       }
     }`;

        const variables = {
            client: sessionStorage.getItem('client_id'),
            userId: sessionStorage.getItem('user_id'),
            auth: sessionStorage.getItem('authorization'),
            comId: sessionStorage.getItem('company_id'),
            customerId: customer_id,
            limit: page_limit,
            offSet: page_offset,
        };
        fetch(endpoint, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({query, variables})
        })
            .then(response => response.json())
            .then(
                (FindResponse) => {
                    resolve(FindResponse)
                },
                (error) => {
                    reject(error)
                }
            )

            .catch((e) => {
                console.log(e)
            })

    });
};

let getAgingReportTotal = () => {
    return new Promise((resolve, reject) => {
        const endpoint = sessionStorage.getItem('base_url_gql') + '/graphql';

        const query = /* GraphQL */`
        query  AgingReportTotal(
        $client : String!,
        $userId : String!,
        $auth : String!,
        $comId : String!,   
       )
        {
            AgingReportTotal(
        client_id: $client,
        company_id: $comId,
        auth_id: $auth,
        user_id: $userId,
       )
       {
        case
        balance_due
       }
     }`;

        const variables = {
            client: sessionStorage.getItem('client_id'),
            userId: sessionStorage.getItem('user_id'),
            auth: sessionStorage.getItem('authorization'),
            comId: sessionStorage.getItem('company_id'),
        };
        fetch(endpoint, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({query, variables})
        })
            .then(response => response.json())
            .then(
                (FindResponse) => {
                    resolve(FindResponse)
                },
                (error) => {
                    reject(error)
                }
            )

            .catch((e) => {
                console.log(e)
            })

    });
};

let getCustomerSummary = (page_offset,page_limit,customer_id) => {
    return new Promise((resolve, reject) => {
        const endpoint = sessionStorage.getItem('base_url_gql') + '/graphql';

        const query = /* GraphQL */`
        query  GetAllSalesByCustomer(
        $client : String!,
        $userId : String!,
        $auth : String!,
        $comId : String!,  
        $customerId: String!,
        $limit: Int!,                        
        $offSet: Int!,     
       )
        {
            GetAllSalesByCustomer(
        client_id: $client,
        company_id: $comId,
        auth_id: $auth,
        user_id: $userId,
        customer_id: $customerId,
        limit: $limit,
        offSet: $offSet,
       )
       {
        customer_id,
        customer_name,
        phone_number,
        total
       }
     }`;

        const variables = {
            client: sessionStorage.getItem('client_id'),
            userId: sessionStorage.getItem('user_id'),
            auth: sessionStorage.getItem('authorization'),
            comId: sessionStorage.getItem('company_id'),
            customerId: customer_id,
            limit: page_limit,
            offSet: page_offset,
        };
        fetch(endpoint, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({query, variables})
        })
            .then(response => response.json())
            .then(
                (FindResponse) => {
                    resolve(FindResponse)
                },
                (error) => {
                    reject(error)
                }
            )

            .catch((e) => {
                console.log(e)
            })

    });
};

let getCustomerSummaryByID = (start_date,end_date,customer_id) => {
    return new Promise((resolve, reject) => {
        const endpoint = sessionStorage.getItem('base_url_gql') + '/graphql';

        const query = /* GraphQL */`
        query  GetAllSalesByCustomerName(
        $client : String!,
        $userId : String!,
        $auth : String!,
        $comId : String!,  
        $customerId: String!,
        $start_date: String!,
        $end_date: String!,     
       )
        {
            GetAllSalesByCustomerName(
        client_id: $client,
        company_id: $comId,
        auth_id: $auth,
        user_id: $userId,
        customer_id: $customerId,
        start_date: $start_date,
            end_date: $end_date,
       )
       {
        order_id,
        txn_date,
        nonposting_total,
        total_payment,
        balance_due
       }
     }`;

        const variables = {
            client: sessionStorage.getItem('client_id'),
            userId: sessionStorage.getItem('user_id'),
            auth: sessionStorage.getItem('authorization'),
            comId: sessionStorage.getItem('company_id'),
            customerId: customer_id,
            start_date: start_date,
            end_date: end_date,
        };
        fetch(endpoint, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({query, variables})
        })
            .then(response => response.json())
            .then(
                (FindResponse) => {
                    resolve(FindResponse)
                },
                (error) => {
                    reject(error)
                }
            )

            .catch((e) => {
                console.log(e)
            })

    });
};

let getCustomerSummaryTotalByID = (start_date,end_date,customer_id) => {
    return new Promise((resolve, reject) => {
        const endpoint = sessionStorage.getItem('base_url_gql') + '/graphql';

        const query = /* GraphQL */`
        query  GetSalesTotalByCustomerName(
        $client : String!,
        $userId : String!,
        $auth : String!,
        $comId : String!,  
        $customerId: String!,
        $start_date: String!,
        $end_date: String!,     
       )
        {
            GetSalesTotalByCustomerName(
        client_id: $client,
        company_id: $comId,
        auth_id: $auth,
        user_id: $userId,
        customer_id: $customerId,
        start_date: $start_date,
            end_date: $end_date,
       )
       {
        nonposting_total
        total_payment
        balance_due
       }
     }`;

        const variables = {
            client: sessionStorage.getItem('client_id'),
            userId: sessionStorage.getItem('user_id'),
            auth: sessionStorage.getItem('authorization'),
            comId: sessionStorage.getItem('company_id'),
            customerId: customer_id,
            start_date: start_date,
            end_date: end_date,
        };
        fetch(endpoint, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({query, variables})
        })
            .then(response => response.json())
            .then(
                (FindResponse) => {
                    resolve(FindResponse)
                },
                (error) => {
                    reject(error)
                }
            )

            .catch((e) => {
                console.log(e)
            })

    });
};


let postSMSReceipt = (orderID) => {
    return new Promise((resolve, reject) => {
        const endpoint = sessionStorage.getItem('base_url_gql') + '/messaging/sales_invoice_sms?order_id='+orderID;
        const companyData = JSON.parse(sessionStorage.getItem('companyInfo'));
        const headers = {
            'Content-Type': 'application/json',
            'client_id': sessionStorage.getItem('client_id'),
            'company_id': sessionStorage.getItem('company_id'),
            'user_id': sessionStorage.getItem('user_id'),
            'authorization': sessionStorage.getItem('authorization'),
            'company_name': companyData[0].company_name,
        }

        fetch(endpoint, {
            method: 'post',
            headers: headers,
        })
            .then(response => response.json())
            .then(
                (FindResponse) => {
                    resolve(FindResponse)
                },
                (error) => {
                    reject(error)
                }
            )

            .catch((e) => {
                console.log(e)
            })

    });
};

let GetAllPurchaseDetails = (startDate,endDate,page_offset,page_limit,search_key) => {
    return new Promise((resolve, reject) => {
        const endpoint = sessionStorage.getItem('base_url_gql') + '/graphql';

        const query = /* GraphQL */`
        query 
        GetAllPurchaseDetails(
            $client : String!,
            $userId : String!,
            $auth : String!,
            $comId : String!,
            $start_date : String!,
            $end_date : String!,
            $search_key : String!,
            $limit : Int!,
            $offset : Int!,                       
        )
         {
            GetAllPurchaseDetails(
                client_id: $client,
                company_id: $comId,
                user_id: $userId,
                auth_id: $auth,
                start_date: $start_date,
                end_date: $end_date,
                search_key : $search_key,
                limit: $limit,
                offSet: $offset,       
            )
          {
            item_number,
            item_desc,
            qoh,
            selling_price,
            bid,
            location_id,
            category,
            subcategory,
            vatcode1,
            vatcode2,
            vatcode3,
            vatcode4,
            uom,
            max_discount,
            max_discount_type,
            custom1,
            custom2,
            default_discount,
            default_discount_type,
            track_inventory,
            type,
            qty,
            qoh_item_total,
            reorder_qty,
            ave_purchase_price,
            item_price,
            final_price,
            bid_exp_date,
            purchase_price,
            image,
            last_updated_by,
            created,
            client_id,
            company_id,
            discount,
            supplier_id,
            transaction_id,
            invoice_number,
            date,
            search_key
          }
        }
        `;

        const variables = {
            client: sessionStorage.getItem('client_id'),
            userId: sessionStorage.getItem('user_id'),
            auth: sessionStorage.getItem('authorization'),
            comId: sessionStorage.getItem('company_id'),
            start_date: startDate,
            end_date: endDate,
            search_key: search_key,
            limit: page_limit,
            offset: page_offset,
        };
        fetch(endpoint, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({query, variables})
        })
            .then(response => response.json())
            .then(
                (FindResponse) => {
                    resolve(FindResponse)
                },
                (error) => {
                    reject(error)
                }
            )

            .catch((e) => {
                console.log(e)
            })

    });
};

export {
    getSalesWiseStockValue, getAllStockValue, CustomerTotalCredit,
    getSubTotal, getTodayCashInHand, getItemProfit, getItemProfitRefresh,
    getItemProfitTotal,getItemActivity, getAllStockValueAcct, postOpeningBalance,getOpeningBalanceTotal,
    postItemImage,getProfitAndLossReport,getCustomerAging,getAgingReportTotal,postSMSReceipt,getCustomerSummaryTotalByID,
    getCustomerSummaryByID,getCustomerSummary,GetAllPurchaseDetails,orderDiscountTotal
}
