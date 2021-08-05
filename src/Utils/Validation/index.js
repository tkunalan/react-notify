import moment from "moment";

export const getLocalFromUTCDate = (utcDate) =>{
    if(utcDate){
        let localDate = new Date(utcDate);
    return moment(localDate).format("DD-MM-YYYY HH:mm");
    } else{
        return '-';
    }
}

export const getPostTimeFormat = () => {
    let date = new Date();
    let h = `${date.getHours()}`.padStart(2, "0");
    let m = `${date.getMinutes()}`.padStart(2, "0");
    let s = `${date.getSeconds()}`.padStart(2, "0");

    return h + ":" + m + ":" + s;
};

export const refreshTime = (utcDate) => {
    let localDate = new Date(utcDate);
    return moment(localDate).format("DD-MM-YYYY hh:mm A");
}

export const startEndDayOfYear = (today) => {
    const year = [];
    year[0] = today.getFullYear() + '-01-01';
    year[1] = today.getFullYear() + '-12-31';

    return year;
}

export const decimalFormat = (value) => {
    return  parseFloat(value).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const reverseDecimalFormat = (value) => {
    return  parseFloat(value.replace(/,/g, ''));

}

export const parseDoubleTwoDecimal = (amt) => {
    return parseFloat(parseFloat(amt).toFixed(2));
}

export const localToUtc = (localDate) =>  {
    return new Date(localDate).toISOString();
}

export const getEndTrailDate = (date,month) => {
    return new Date(date.setMonth(date.getMonth()+month)).toISOString();
}

export const getLocalFromUTCDateExport = (utcDate) => {
    let localDate = new Date(utcDate);
    return moment(localDate).format("MM-DD-YYYY HH:mm");

}

export const dateFormat = (value,style = 1) => {
    let format;
    switch (style) {
        case 1 :
            format = moment(value).format("DD-MM-YYYY");
            break;
        case 2 :
            format = moment(value).format("YYYY-MM-DD");
            break;
    }
   return format;
}

export const getServerDateFromLocalDate = (period) => {
    const date = [];
    const  todayDate = moment(new Date()).format('YYYY-MM-DD');
    switch(period){
        case "Today":
            date[0] = new Date(todayDate +'T00:00:00').toISOString();
            date[1] = new Date(todayDate +'T23:59:59').toISOString();
            date[2] = "Today";
            break;
        case "Yesterday":
            const yesterdayDate = moment(new Date()).subtract(1, 'days').format('YYYY-MM-DD');
            date[0] = new Date(yesterdayDate +'T00:00:00').toISOString();
            date[1] = new Date(yesterdayDate +'T23:59:59').toISOString();
            date[2] = "Yesterday";
            break;
        case "Weekly":
            const weekly = moment(new Date()).subtract(6, 'days').format('YYYY-MM-DD');
            date[0] = new Date(weekly +'T00:00:00').toISOString();
            date[1] = new Date(todayDate +'T23:59:59').toISOString();
            date[2] = "Weekly";
            break;
        case "TwoWeekly":
            const twoWeekly = moment(new Date()).subtract(12, 'days').format('YYYY-MM-DD');
            date[0] = new Date(twoWeekly +'T00:00:00').toISOString();
            date[1] = new Date(todayDate +'T23:59:59').toISOString();
            date[2] = "TwoWeekly";
            break;
        case "Monthly":
            const sm = moment().startOf('month').format('YYYY-MM-DD');
            const em =  moment().endOf('month').format('YYYY-MM-DD');
            date[0] = new Date(sm +'T00:00:00').toISOString();
            date[1] = new Date(em +'T23:59:59').toISOString();
            date[2] = "Monthly";
            break;
        case "LastMonth":
            const lsm = moment().subtract(1, 'month').startOf('month').format('YYYY-MM-DD');
            const lem = moment().subtract(1, 'month').endOf('month').format('YYYY-MM-DD');
            date[0] = new Date(lsm +'T00:00:00').toISOString();
            date[1] = new Date(lem +'T23:59:59').toISOString();
            date[2] = "LastMonth";
            break;
        case "Yearly":
            const ysm = moment().startOf('year').format('YYYY-MM-DD');
            const yem =  moment().endOf('year').format('YYYY-MM-DD');
            date[0] = new Date(ysm +'T00:00:00').toISOString();
            date[1] = new Date(yem +'T23:59:59').toISOString();
            date[2] = "Yearly";
            break;
    }

    return date;
}

export const getLocalToUTC = (today) => {
    const date = [];
    let  todayDate = moment(today).format('YYYY-MM-DD');

    date[0] = new Date(todayDate +'T00:00:00').toISOString();
    date[1] = new Date(todayDate +'T23:59:59').toISOString();

    return date;
}

export const getBeforeCashierName = (str) => {
    return str.split("@")[0];
    /* This splits the string into an array using the "+"
       character as a delimiter.
       Then it gets the first element of the split string.
    */
}

export const hiddenNavBar = (pathName) => {
    switch (pathName) {
        case '/sales/createsales' :
            return false;
        case '/sales/createsalesreturn' :
            return false;
        case '/sales/createquotation' :
            return false;
        case '/inventory/createinventory' :
            return false;
        case '/inventory/createinventoryreturn' :
            return false;
        case '/inventory/createpurchaseorder' :
            return false;
        case '/add/tog' :
            return false;
        case '/manufacture/createitembom' :
            return false;
        case '/manufacture/createworkorder' :
            return false;
        case '/manufacture/createitemcombo' :
            return false;
        default :  return true;
    }
}

export const hiddenIconNavBarSales = (pathName) => {
    switch (pathName) {
        case '/sales/createsales' :
            return false;
        case '/inventory/createinventory' :
            return false;
        case '/inventory/createinventoryreturn' :
            return false;
        case '/sales/createsalesreturn' :
            return false;
        case '/inventory/createpurchaseorder' :
            return false;
        case '/inventory/createpurchaseinvoice' :
            return false;
        case '/add/tog' :
            return false;
        case '/manufacture/createitembom' :
            return false;
        case '/manufacture/createworkorder' :
            return false;
        case '/manufacture/createitemcombo' :
            return false;
        default :  return true;
    }
}

export const numOnlyRegExp = () => {
    return  /^[0-9\b]+$/;
}

export const isNumber = (evt) => {
    evt = (evt) ? evt : window.event;
    let charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
    } else {
        return true;
    }
}

export const  sliceName = (input,Characters) => input.length > Characters ? `${input.slice(0, Characters)}...` : input;

export const  animateValue = (obj, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

export const stringSplit = (str,splitBy) => {
    return str.split(splitBy);
}

export const createLocObj = (location) => {
    let locObj= [];
    for (const loc of location){
        if(loc.label !== "All" && loc.label !== ''){
            locObj.push(loc)
        }
    }
    return locObj;
}

const comparer = (otherArray) => {
    return function(current){
        return otherArray.filter(function(other){
            return other.item_number == current.item_number
                && other.bid == current.bid;
        }).length == 0;
    }
}

export const compereInvHoldAndNew = (holdArray, orderArray) => {
    return {removeItemArray:holdArray.filter(comparer(orderArray))}
}

//todo sir need change
export const compereHoldAndOrder = (holdArray, orderArray) => {
    let onlyInHold = holdArray.filter(comparer(orderArray));
    let onlyInOrder = orderArray.filter(comparer(holdArray));
    let addItemArray = []
    let removeItemArray = []

    if(onlyInHold.length === 0 && onlyInOrder.length === 0){

        const qtyArray = addOrMinusQtyInHold(holdArray,orderArray);

        addItemArray = qtyArray.addQtyArray;
        removeItemArray = qtyArray.removeQtyArray;

    }
    else if(onlyInHold.length > 0 || onlyInOrder.length > 0){
        removeItemArray = onlyInHold;
        addItemArray = onlyInOrder;
        for(let hold of onlyInHold){
            holdArray = [...holdArray].splice(holdArray.indexOf(hold),1);
        }

        for(let order of onlyInOrder){
            orderArray.splice(orderArray.indexOf(order),1);
        }

        let qtyArray = addOrMinusQtyInHold(holdArray,orderArray);

        for(let qty of qtyArray.addQtyArray){
            addItemArray.push(qty)
        }

        for(let qty of qtyArray.removeQtyArray){
            removeItemArray.push(qty)
        }

    }
    return {addArray:addItemArray, removeArray:removeItemArray}
}


const addOrMinusQtyInHold = (holdDetailsArray,orderArray) => {
    const addQtyArray = [];
    const removeQtyArray = []

    for(let orderItem of orderArray){
        for(let holdItem of holdDetailsArray){
            if(orderItem.item_number === holdItem.item_number && orderItem.bid === holdItem.bid){
                if(orderItem.qty !== holdItem.qty){
                    if(orderItem.qty > holdItem.qty){
                        orderItem.qty = orderItem.qty - holdItem.qty;
                        addQtyArray.push(orderItem)
                    }else{
                        orderItem.qty = orderItem.qty - holdItem.qty;
                        addQtyArray.push(orderItem)
                    }

                }
                else{
                    if(orderItem.item_discount !== holdItem.item_discount){
                        orderItem.qty = 0 // kk
                        addQtyArray.push(orderItem)
                    }
                }
            }
        }
    }
    return {addQtyArray:addQtyArray,removeQtyArray:removeQtyArray};
}


export const getLocalFromUTCDateOnly = (utcDate) => {
    let localDate = new Date(utcDate);
    return moment(localDate).format("DD-MM-YYYY");

}

export const getLocalFromUTCTimeOnly = (utcDate) => {
    let localDate = new Date(utcDate);
    return moment(localDate).format("HH:mm");

}

export const dateDiff = (first, second) =>  {
// Take the difference between the dates and divide by milliseconds per day.
// Round to nearest whole number to deal with DST.
    return Math.round((second-first)/(1000*60*60*24));
}

export const  parseDate = (str) => {
    let mdy = str.split('-');
    //new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]])
    return new Date(mdy[0], mdy[1]-1, mdy[2]);
}

export const parsePaymentDate = (str) =>  {
    let mdy = str.split('-');
    //new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]])
    return new Date(mdy[2], mdy[1]-1, mdy[0]);
}

export const dateFormatShow = (date) => {
    let showDate;
    if(date !== "n/l" && date !== null){
        showDate = moment(date).format("DD-MM-YYYY")
    }
    else {
        showDate = "n/l"
    }

    return showDate;
}

export const checkDiscountType = (discountType) => {
    let type = discountType;
    let value = '';

    if(type === 0){
        value = "%"
    }
    else {
        value = ".00"
    }

    return value;
}

export const getTimeZone = () => {
    return new Date().toTimeString().slice(9).split(' ')[0]
}
