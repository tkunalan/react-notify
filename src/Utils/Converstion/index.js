
const paymentMethod = (method) => {
    let value;
    switch (method){
        case '1001':
            value = 'Cash';
            break;
        case '1002':
            value = 'Cheque';
            break;
        case '1003':
            value = 'Debit';
            break;
        case '1004':
            value = 'Credit';
            break;
        case '1016':
            value = 'Online Transfer';
            break;
        case '1011':
            value = 'Master';
            break;
        case '1012':
            value = 'Visa';
            break;
        case '1013':
            value = 'Other card';
            break;
        case '1008':
            value = 'Exchange';
            break;
        default:
            value = method;
    }
    return value;
};

const orderMethod = (method) => {
    let value;
    switch (method){
        case 'TABLE':
            value = "1001";
            break;
        case 'TAKEAWAY':
            value = "1002";
            break;
        case 'DELIVERY':
            value = "1003";
            break;
        case 'ROOM':
            value = "1005";
            break;
        default:
            value = "0";
    }
    return value;
};

const orderMethodByID = (method)=>{
    let value;
    switch (method){
        case '1001':
            value = "Dine In";
            break;
        case '1002':
            value = "Takeaway";
            break;
        case '1003':
            value = "Delivery";
            break;
        case '1005':
            value = "Room";
            break;
        default:
            value = '';
    }
    return value;
};

const holdOrderMethodByID = (method)=>{
    let value;
    switch (method){
        case '1001':
            value = "TABLE";
            break;
        case '1002':
            value = "TAKEAWAY";
            break;
        case '1003':
            value = "DELIVERY";
            break;
        case '1005':
            value = "ROOM";
            break;
        default:
            value = 'TABLE';
    }
    return value;
};

const productionTypeToSever = (productType) => {
    let type;
    switch (productType) {
        case "RC":
            type = "R";
            break;
        case "Lotto":
            type = "S";
            break;
        case "Lotto Winning":
            type = "T";
            break;
        case "Lottery":
            type = "U";
            break;
        case "Lottery Winning":
            type = "V";
            break;
        case "OTC":
            type = "W";
            break;
        case "Add-Ons":
            type = "X";
            break;
        case "Combo Items":
            type = "Y";
            break;
        case "BOM Items":
            type = "B";
            break;
        case "MI":
        case "Prepared Items":
            type = "Z";
            break;
        case "Ingredient Items":
        case "Manufacturer":
            type = "M";
            break;
        case "IMEI":
        case "Serial Number":
            type = "I";
            break;
        case "Resale Items":
            type = "P";
            break;
        case "PhoneCard":
            type = "N";
            break;
        case "Shopify":
            type = "F";
            break;
        default:
            type = "P";
    }

    return type;
};


const productionTypeToLocal = (productType,pref) => {
    let type;
    switch (productType) {
        case "M":
            type = pref.industryType === "103" ? 'Ingredient Items' : 'Manufacturer';
            break;
        case "I":
            type = pref.industryType === "105" ?  'IMEI' : "Serial Number";
            break;
        case "P":
            type = "Resale Items";
            break;
        case "R":
            type = "RC";
            break;
        case "S":
            type = "Lotto";
            break;
        case "T":
            type = "Lotto Winning";
            break;
        case "U":
            type = "Lottery";
            break;
        case "V":
            type = "Lottery Winning";
            break;
        case "W":
            type = "OTC";
            break;
        case "X":
            type = "Add-Ons";
            break;
        case "Y":
            type = "Combo Items";
            break;
        case "Z":
            type = "MI";
            break;
        case "B":
            type = "BOM Items";
            break;
        case "F":
            type = "Shopify";
            break;
        default:
            type = productType;
    }

    return type;
};

const loadSpinnerData = (pref) => {
    let product_Type;
    if(pref.CurrencyType === 'cad'){
        product_Type = [
            {
                label: 'Resale Items'
            },
            {
                label: 'Manufacturer'
            },
            {
                label: 'IMEI'
            },
            {
                label: 'Lotto'
            },
            {
                label: 'Lotto Winning'
            },
            {
                label: 'Lottery'
            },
            {
                label: 'Lottery Winning'
            }
        ];
    }
    else{

        // 103 resturant
        if(pref.industryType === "103"){
            product_Type = [
                {
                    label: 'Resale Items'
                },
                {
                    label: 'Ingredient Items'
                },
                {
                    label: 'Combo Items'
                },
                // {
                //     label: 'Production / Food Costing'
                // },
            ];
        }
        else {
            product_Type = [
                {
                    label: 'Resale Items'
                },
                {
                    label: 'Manufacturer'
                },
                {
                    label: pref.industryType === "105" ?  'IMEI' : "Serial Number"
                },
            ];
        }

    }
    return product_Type;
}

const setColor = (i) => {
    let color;
    switch (i) {
        case 0 :
        case 16 :
        case 32 :
            color = '#ffebee';
            break;
        case 1 :
        case 17:
        case 33 :
            color = '#FCE4EC';
            break;
        case 2 :
        case 18:
        case 34 :
            color = '#F3E5F5';
            break;
        case 3 :
        case 19:
        case 35 :
            color = '#EDE7F6';
            break;
        case 4 :
        case 20:
        case 36 :
            color = '#E8EAF6';
            break;
        case 5 :
        case 21:
        case 37 :
            color = '#E3F2FD';
            break;
        case 6 :
        case 22:
        case 38 :
            color = '#E1F5FE';
            break;
        case 7 :
        case 23:
        case 39 :
            color = '#E0F7FA';
            break;
        case 8 :
        case 24:
        case 40 :
            color = '#E0F2F1';
            break;
        case 9 :
        case 25:
        case 41 :
            color = '#E8F5E9';
            break;
        case 10 :
        case 26:
        case 42 :
            color = '#F1F8E9';
            break;
        case 11 :
        case 27:
        case 43 :
            color = '#F9FBE7';
            break;
        case 12 :
        case 28:
        case 44 :
            color = '#FFFDE7';
            break;
        case 13 :
        case 29:
        case 45 :
            color = '#FFF8E1';
            break;
        case 14 :
        case 30:
        case 46 :
            color = '#FFF3E0';
            break;
        case 15 :
        case 31:
        case 47 :
            color = '#FBE9E7';
    }
    return color;
}

const getLocalStorageSize = () => {
    let _lsTotal = 0,
        _xLen, _x;
    for (_x in localStorage) {
        if (!localStorage.hasOwnProperty(_x)) {
            continue;
        }
        _xLen = ((localStorage[_x].length + _x.length) * 2);
        _lsTotal += _xLen;
        console.log(_x.substr(0, 50) + " = " + (_xLen / 1024).toFixed(2) + " KB")
    }
    console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");
}

const orderType = (orderType) => {
    let value;
    switch (orderType){
        case 1003:
            value = 'Cancelled Sales';
            break;
        case 1001:
            value = 'Sales';
            break;
        case 1002:
            value = 'Sales';
            break;
        case 1006:
            value = 'Quotation';
            break;
        // case '1004':
        //     value = 'Sales Order';
        //     break;
        // case '1005':
        //     value = 'Create';
        //     break;
        // case '1006':
        //     value = 'Start';
        //     break;
        // case '1007':
        //     value = 'Finish';
        //     break;
        default:
            value = orderType;
    }
    return value;
};


export {orderMethodByID,productionTypeToSever,productionTypeToLocal,
    paymentMethod,orderMethod,holdOrderMethodByID,loadSpinnerData,setColor,orderType,
    }
