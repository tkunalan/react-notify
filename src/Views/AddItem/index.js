import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import {dateFormat, isNumber, parseDoubleTwoDecimal} from "../../Utils/Validation";
import {getCategoriesItems, getItemByNumber,getSubCategories} from "../../services/GetItemService";
import {locationDetails, taxDetails} from "../../services/GetCommonService";
import {postItem} from "../../services/PostService";
import SnackBar from "../../Helper/SnackbarAlert";
import clsx from "clsx";
import UploadIcon from '@material-ui/icons/CloudUpload';
import ImportExcelDialog from "../../Helper/ImportExcelDialog";
import {loadSpinnerData, productionTypeToSever} from "../../Utils/Converstion";
import CustomAutocomplete from "../../Helper/CustomAutocomplete";
import CustomConfirmDialog from "../../Helper/CustomConfirmDialog";
import { postShopifyItem } from '../../services/GetSalesService';

const UOM = [
    {
        id: '1',
        label: 'pcs',
    },
    {
        id: '2',
        label: 'g',
    },
    {
        id: '3',
        label: 'kg',
    },
    {
        id: '4',
        label: 'ml',
    },
    {
        id: '5',
        label: 'l',
    },
    {
        id: '6',
        label: 'm',
    },
    {
        id: '7',
        label: 'mm',
    },
    {
        id: '8',
        label: 'yard',
    },
];

const drawerWidth = 240;

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
        marginTop: 25,
    },
    margin_radio:{
        margin: theme.spacing.unit,
        '@media (min-width: 854px)': {
            marginTop: 30,
        },
    },
    margin_width:{
        margin: theme.spacing.unit,
        marginTop: 25,
        width: 222,
    },
    margin_width_detail:{
        margin: theme.spacing.unit,
        marginTop: 25,
        width: 700,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
        width: 140,
        height: 44,
        backgroundColor: "#106E4A",
        color: 'white',
        "&:hover": {
            color: 'white',
            backgroundColor: "#106E4A",
        },
        "&:disabled":{
            opacity: 24,
            backgroundColor: "#8c8c8c70",
            color: "#0b0b0b",
        }
    },
    buttonMore: {
        margin: theme.spacing.unit,
        marginTop: 8,
        marginLeft : 10,
        width: 140,
        height: 44,
    },
    button_cancel: {
        margin: theme.spacing.unit,
        width: 140,
        height: 44,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        '@media (min-width: 1081px)': {
            marginLeft: +drawerWidth,
        }
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    track_with_inventory: {
        '@media (min-width: 854px)': {
            marginLeft:"241px",
        },
    },
    track_with_inventory_less: {
        '@media (min-width: 854px)': {
            marginLeft:"-3px",
        },
    }

});

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#106E4A'
        },
    },
    typography: { useNextVariants: true },
});


class AddItem  extends Component{
    prefSettings = JSON.parse(sessionStorage.getItem("prefSettings"));
    currentLocation = localStorage.getItem("currentLocation");
    vatCode1;
    vatCode2;
    vatCode3;
    vatCode4;
    p_vatCode1;
    p_vatCode2;
    p_vatCode3;
    p_vatCode4;
    alertSnackBar = [];

    constructor() {
        super();
        this.customAutoCompleteRef = React.createRef();
        this.customAutoCompleteRefCat = React.createRef();
        this.state = {
            itemNumber: '',
            itemName: '',
            itemDetail: '',
            quantity: '',
            sellingPrice: '',
            wholesalePrice: '',
            category: '',
            subcategory: '',
            purchasePrice: '',
            expiryDate: '',
            defaultDiscount:'',
            maxDiscount:'',
            reorderQuantity:'',
            itemCode:'',
            showWarning: true,
            clearDialog: false,
            vat:false,
            selectedValueDefault: '1',
            selectedValueMax: '1',
            checkedTrackInv: this.prefSettings.industryType !== "103",
            autoNumber: this.prefSettings.autoNumber,
            LocationArray:[],
            taxDataSales:[],
            taxDataPurchase: [],
            taxArray: [],
            location: this.currentLocation,
            valueTax: null,
            itemName2nd:'',
            categoryAll:[],
            subCategoryAll:[],
            addDisabled: false,
            openSnackBar : false,
            welcomeDialog : false,
            educationDialog : false,
            toggleDrawer : false,
            openExcel: false,
            confirmDialog: {},
            // selectedFile: null
        };

    }

    componentDidMount = async () => {
        await this.fetchData();
    }

    fetchData = async () => {
        await this.fetchCategories();
        let getLocationDetails = await locationDetails();
        this.setLocation(getLocationDetails);
        await this.fetchTaxData();
    };

    fetchTaxData = async () => {
        let getTaxDetails = await taxDetails();
        this.getTax(getTaxDetails);
    };


    fetchCategories = async () => {
        let getCategoriesItemsDetails = await getCategoriesItems('.*','.*');
        this.setCategoriesData(getCategoriesItemsDetails);
    };

    fetchSubCategories = async (category) => {
        let getSubCategoriesDetails = await getSubCategories('.*','.*',category);
        this.setSubCategoriesData(getSubCategoriesDetails);
    };

    setCategoriesData = (FindResponse) => {
        this.setState({
            categoryAll: FindResponse.categories
        });
    };

    setSubCategoriesData = (FindResponse) => {
        this.setState({
            subCategoryAll: FindResponse.items
        })
    };

    setLocation = (FindResponse) => {
        if (FindResponse.inventory_locations.length>0) {
            this.setState({locationArray : FindResponse.inventory_locations})
        }
    };

    getTax = (FindResponse) => {
        this.setState({
            taxArray: FindResponse.vatcode.reverse(),
        })
    };

    /*send item to server*/
    posAddItem = async () => {
        this.setState({addDisabled : true});
        let data ={
            'client_id':sessionStorage.getItem('client_id'),
            'company_id':sessionStorage.getItem('company_id'),
            "item_number":this.state.itemNumber.trim() || "0",
            "supplier_item_number": this.state.itemCode,
            "temp_bid":0,
            "bid":0,
            "track_inventory":this.state.checkedTrackInv ? "Y" : "N",
            "item_desc":this.state.itemName.trim() || "n/l",
            "item_desc1": this.state.itemName2nd.trim() || "n/l",
            "item_desc3": this.state.itemDetail.trim(),
            "category":this.state.category ? this.state.category.trim() : "Others",
            "subcategory": this.state.subcategory ? this.state.subcategory.trim() : "Others",
            "uom":this.state.uom || "pcs",
            "vatcode1":this.vatCode1,
            "vatcode2":this.vatCode2,
            "vatcode3":this.vatCode3,
            "vatcode4":this.vatCode4,
            "p_vatcode1":this.p_vatCode1,
            "p_vatcode2":this.p_vatCode2,
            "p_vatcode3":this.p_vatCode3,
            "p_vatcode4":this.p_vatCode4,
            "selling_price":parseDoubleTwoDecimal((this.state.sellingPrice).trim()) || 0.0,
            "wholesale_price":parseDoubleTwoDecimal((this.state.wholesalePrice).trim()) || 0.0,
            "max_discount":parseFloat((this.state.maxDiscount).trim()) || 0.0,
            "max_discount_type":parseInt(this.state.selectedValueMax,0),
            "default_discount":parseFloat((this.state.defaultDiscount).trim()) || 0.0,
            "default_discount_type":parseInt(this.state.selectedValueDefault,0),
            "type": productionTypeToSever(this.state.productType),
            "last_purchase_price":parseDoubleTwoDecimal((this.state.purchasePrice).trim()) || 0.0,
            "bid_exp_date": this.state.expiryDate ? dateFormat(this.state.expiryDate,2) : "n/l",
            "qoh":parseFloat((this.state.quantity).trim()) || 0.0,
            "qoh_count":parseFloat((this.state.quantity).trim()) || 0.0,
            "reorder_qty":parseFloat(this.state.reorderQuantity.trim()) || 0.0,
            "location_id":"1",
            "bid_text":"n/l",
            "bid_rcd_qty":0.0,
            "supplier_id":"n/l",
            "allow_sales":"1",
        };

        try {
            const response = await postItem(data);
            /*try{
            await postShopifyItem(response)
            }catch(e){
                console.log(e)
            }*/
            this.showAlertMessage("center","The item has been created successfully!","success");
            await this.fetchCategories();
            await this.clear_values();

        }
        catch (e) {
            this.showAlertMessage("center","Item Not create.","error");
        }
    };


    getVatCodeRates = () => {
        if(this.state.taxDataSales.length > 0){
            if(this.prefSettings.CurrencyType !== 'cad'){
                this.vatCode1 = this.state.taxDataSales;
            }
            else {
                this.generateTaxCode(this.state.taxDataSales.toUpperCase(),'sales');
            }

        }

        if(this.state.taxDataPurchase.length > 0){
            if(this.prefSettings.CurrencyType !== 'cad'){
                this.p_vatCode1 = this.state.taxDataPurchase;
            }
            else {
                this.generateTaxCode(this.state.taxDataPurchase.toUpperCase(),'purchase');
            }
        }
    };


    generateTaxCode = (taxGroup,taxType) => {
        if(taxType === 'sales'){
            if(taxGroup.toUpperCase() === "T1" || taxGroup.toUpperCase() === "T3"){
                for(let i = 0; i < this.state.taxArray.length;i++ ) {
                    let vatcodeDesc = this.state.taxArray[i].vatcode_desc;
                    if(vatcodeDesc !== undefined && vatcodeDesc.toUpperCase() ==="GST" || vatcodeDesc !== undefined && vatcodeDesc.toUpperCase() ==="HST"){
                        let vatCode = this.state.taxArray[i].vatcode;
                        this.vatCode1 = vatCode;
                        break;
                    }
                }
            }else if(taxGroup.toUpperCase() === "T2"){
                for(let i = 0; i < this.state.taxArray.length;i++ ) {
                    let vatcodeDesc = this.state.taxArray[i].vatcode_desc;
                    if(vatcodeDesc !== undefined && vatcodeDesc.toUpperCase() ==="GST"){
                        let vatCode = this.state.taxArray[i].vatcode;
                        this.vatCode1 = vatCode;
                    }
                    if(vatcodeDesc !== undefined && vatcodeDesc.toUpperCase() ==="PST"){
                        let vatCode = this.state.taxArray[i].vatcode;
                        this.vatCode2= vatCode;
                    }
                }
            }
        }else {
            if(taxGroup.toUpperCase() === "T1" || taxGroup.toUpperCase() === "T3"){
                for(let i = 0; i < this.state.taxArray.length;i++ ) {
                    let vatcodeDesc = this.state.taxArray[i].vatcode_desc;
                    if(vatcodeDesc !== undefined && vatcodeDesc.toUpperCase() ==="GST" || vatcodeDesc !== undefined && vatcodeDesc.toUpperCase() ==="HST"){
                        let vatCode = this.state.taxArray[i].vatcode;
                        this.p_vatCode1 = vatCode;
                        break;
                    }
                }
            }else if(taxGroup.toUpperCase() === "T2"){
                for(let i = 0; i < this.state.taxArray.length;i++ ) {
                    let vatcodeDesc = this.state.taxArray[i].vatcode_desc;
                    if(vatcodeDesc !== undefined && vatcodeDesc.toUpperCase() ==="GST"){
                        let vatCode = this.state.taxArray[i].vatcode;
                        this.p_vatCode1 = vatCode;
                    }
                    if(vatcodeDesc !== undefined && vatcodeDesc.toUpperCase() ==="PST"){
                        let vatCode = this.state.taxArray[i].vatcode;
                        this.p_vatCode2= vatCode;
                    }
                }
            }

        }

    };


    radioChangeMax = (e) =>{
        this.setState({
            selectedValueMax: e.currentTarget.value
        });
    };

    radioChangeDefault = (e) =>{
        this.setState({
            selectedValueDefault: e.currentTarget.value
        });
    };

    toggleMenu = () => {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    };

    handleClickOpenClearDialog = () => {
        if(this.state.itemName.length > 0){
            this.setState({ clearDialog: true });
        }
    };

    handleCloseClearDialog = () => {
        this.setState({ clearDialog: false });
    };

    handleClickOpenVat = () => {
        this.setState({ vat: true });
        this.getAllTax();
    };

    handleCloseVat = () => {
        this.setState({ vat: false });
    };

    handleOk = async () => {
        this.setState({ clearDialog: false });
        await this.clear_values();
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ open: false });
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    categoryChange = (category) =>{
       if(category){
           if (category.category){
               this.setState({category: category.category});
           }
           else {
               this.setState({category: category});
           }

           this.fetchSubCategories(category.category ? category.category : category);
       }
    };

    subCategoryChange = (subcategory) =>{
        if(subcategory){
            if (subcategory.subcategory){
                this.setState({subcategory: subcategory.subcategory })
            }
            else {
                this.setState({subcategory: subcategory })
            }
        }
    };

    handleChangeCheckBox = name => event => {
        if(name === "autoNumber"){
            this.setState({
                [name]: event.target.checked,
                itemNumber: '',
            });
        }
        else {
            this.setState({
                [name]: event.target.checked,
            });
        }

    };

    searchByNum = async () => {
        if(this.state.itemName.trim().length > 0 ){

            if(this.state.autoNumber){
                await this.handleAddItem()
            }
            else{
                this.setState({addDisabled : true});
                let getSearchItem = await getItemByNumber(this.state.itemNumber.trim());
                if (getSearchItem.item.length > 0 ){
                    this.setState({addDisabled : false});
                    this.showAlertMessage("center","item already exits","info");
                }
                else {
                    await this.handleAddItem()
                }
            }
        }
        else {
            this.showAlertMessage("center","Please enter details","error");
        }
    };

    handleAddItem = async () =>{
        if(this.checkPurchasePrice()){
            if(this.checkReorderQty()){
                if(this.prefSettings.allowTax){
                    this.getVatCodeRates();
                }
                if(this.checkDiscount()){
                    if(this.checkExpiryDate()){
                        await this.posAddItem();
                    }
                    else {
                        this.showAlertMessage("center","Check expiry date","info");
                    }
                }
                else {
                    this.showAlertMessage("center","Default discount greater than max discount","info");
                }
            }
            else {
                this.setState({confirmDialog: {
                        label : "Do you want to Allow? Re order Qty is greater than Add Qty",
                        caller: "reOrderQty"
                    }});
            }
        }
        else {
            if(this.checkReorderQty()){
                // Purchase price check
                this.setState({confirmDialog: {
                        label : "Do you want to Allow? Purchase price is greater than Selling price",
                        caller: "purchasePrice"
                    }});
            }
            else {
                // Re order Qty check
                this.setState({confirmDialog: {
                        label : "Do you want to Allow? Re order Qty is greater than Add Qty",
                        caller: "reOrderQty"
                    }});
            }
        }
    };

    checkPurchasePrice = () => {
        let sellingPrice =  (this.state.sellingPrice).trim() || "0";
        let purchasePrice = (this.state.purchasePrice).trim() || "0";

        if(parseFloat(sellingPrice) > 0) {
            return parseFloat(sellingPrice) >= parseFloat(purchasePrice);
        }
        else {
            return true;
        }
    };

    checkDiscount = () => {
        let maxDiscount = this.state.maxDiscount || "0";
        let maxDiscountType = this.state.selectedValueMax;
        let sellingPrice = this.state.sellingPrice;

        if(maxDiscountType === '0'){
            maxDiscount = sellingPrice * (maxDiscount/100);
        }

        let defaultDiscount = this.state.defaultDiscount || "0";
        let defaultDiscountType = this.state.selectedValueDefault;

        if(defaultDiscountType === '0'){
            defaultDiscount = sellingPrice * (defaultDiscount/100);
        }

        if(parseFloat(maxDiscount) > 0 && parseFloat(defaultDiscount) > 0){
            return parseFloat(maxDiscount) >= defaultDiscount
        }
        else{
            return true;
        }
    };

    checkExpiryDate= () => {
        return dateFormat(new Date(),2) <= dateFormat(this.state.expiryDate,2);
    };

    checkReorderQty = () => {
        let qty = (this.state.quantity).trim() || "0";
        let reorderQty = (this.state.reorderQuantity).trim() || "0";

        if(parseFloat(qty) > 0){
            return parseFloat(qty) > parseFloat(reorderQty);
        }
        else {
            return true;
        }
    };

    clear_values = async () => {

        this.setState({
            itemNumber: '',
            itemName: '',
            itemDetail : '',
            quantity: '',
            sellingPrice: '',
            wholesalePrice: '',
            category: '',
            categoryAll:[],
            subcategory: '',
            subCategoryAll:[],
            purchasePrice: '',
            expiryDate: '',
            defaultDiscount: '',
            maxDiscount: '',
            reorderQuantity: '',
            itemCode: '',
            taxArray: [],
            taxDataSales:[],
            taxDataPurchase: [],
            uom: '',
            productType: '',
            location: this.currentLocation,
            itemName2nd:'',
            addDisabled: false,
        });

        this.vatCode1 = undefined;
        this.vatCode2 = undefined;
        this.vatCode3 = undefined;
        this.vatCode4 = undefined;
        this.p_vatCode1 = undefined;
        this.p_vatCode2 = undefined;
        this.p_vatCode3 = undefined;
        this.p_vatCode4 = undefined;

        this.customAutoCompleteRef.current.handleClear();
        this.customAutoCompleteRefCat.current.handleClear();

        if(this.prefSettings.allowTax){
            await this.fetchTaxData();
        }
        await this.fetchCategories()
    };

    // SnackBar Toast function
    propsCloseToast = () => {
        this.alertSnackBar = [];
        this.setState({openSnackBar :false})
    };


    showAlertMessage = (position,message,type) => {
        this.alertSnackBar[0] = position;
        this.alertSnackBar[1] = message;
        this.alertSnackBar[2] = type;
        this.setState({openSnackBar :true})
    };

    propsHeaderDrawerClick = () => {
        this.setState({toggleDrawer : !this.state.toggleDrawer})
    };

    propsHelpHandleClick = () => {
        this.setState({welcomeDialog: true})
    };

    welcomeDialogClose = () => {
        this.setState({welcomeDialog: false})
    };

    propsEducationHandleClick = () => {
        this.setState({educationDialog: true})
    };

    educationDialogClose = () => {
        this.setState({educationDialog: false})
    };

    openExcelPopup = () => {
        this.setState({openExcel: true})
    };

   closeExcelPopup = (status) => {
        this.setState({openExcel: false});
        if(status === 'done'){
            this.props.history.push('/Inventorydashboard');
        }
    };

    closeConfirmDialog = async (data) => {
        switch (data) {
            case "reOrderQty":
                this.getVatCodeRates();
                if(this.checkDiscount()){
                    if(this.checkExpiryDate()){
                       await this.posAddItem();
                    }
                    else{
                        this.showAlertMessage("center","Check expiry date","info");
                    }

                }else {
                    this.showAlertMessage("center","Default discount greater than max discount","info");
                }
            break;
            case "purchasePrice":
                this.getVatCodeRates();
                if(this.checkDiscount()){
                    if(this.checkExpiryDate()){
                       await this.posAddItem();
                    }
                    else{
                        this.showAlertMessage("center","Check expiry date","info");
                    }
                }else {
                    this.showAlertMessage("center","Default discount greater than max discount","info");
                }
                break;
        }
        this.setState({confirmDialog: {}});
    }

    render(){
        const {classes} = this.props;
        return (
            <div>
                <Card>
                <main className={clsx(classes.content, {[classes.contentShift]: !this.state.toggleDrawer,})}>
                    <div className={this.state.toggleDrawer ? "container_main2" : "container_main"}>
                        <React.Fragment>
                            {this.state.openSnackBar ?
                                <SnackBar position={this.alertSnackBar[0]} message={this.alertSnackBar[1]} severity={this.alertSnackBar[2]} toastClickHandle={this.propsCloseToast}/>: null
                            }
                            {this.state.openExcel ?
                                <ImportExcelDialog propsHandleImport={this.closeExcelPopup} /> : null
                            }
                            {this.state.confirmDialog.label ?
                                <CustomConfirmDialog handleDialog={this.closeConfirmDialog} data={this.state.confirmDialog}/> : null
                            }

                        </React.Fragment>
                        <p style={{color: '#106e4a', fontSize: 21}}> Add Item </p>
                        { this.prefSettings.subscription !== "KOP" ?
                            <Button variant="contained"
                                    style={{backgroundColor:"#E0E0E0", color:"black", float:"right", marginRight: 20, marginTop : -55}}
                                    component="span"
                                    onClick={this.openExcelPopup}
                                    startIcon={<UploadIcon
                                        style={{color:"black"}}
                                    />}>
                                <span style={{marginTop : 5}}>Import Items</span>
                            </Button> : null
                        }
                        <MuiThemeProvider theme={theme}>
                            <div style={{height:"82.5%",overflowX:"auto"}}>
                                <div style={{width:"90%",margin:"0 auto"}}>
                                    {this.prefSettings.subscription !== "KOP" ?
                                        <div style={{float:"left",visibility: !this.prefSettings.autoNumber ? "hidden" : "visibles"}} >
                                            <FormControlLabel
                                                disabled={!this.prefSettings.autoNumber}
                                                label="Auto generate item number"
                                                control={
                                                    <Checkbox
                                                        style={{color: "#048647"}}
                                                        checked={this.state.autoNumber}
                                                        onChange={this.handleChangeCheckBox('autoNumber')}
                                                        value="autoNumber"
                                                        classes={{
                                                            palette: classes.root,
                                                            checked: classes.checked,
                                                        }}
                                                    />
                                                }
                                            />
                                        </div> :
                                        <div style={{float:"left",display: !this.prefSettings.autoNumber ? "none" : "block"}} >
                                        <FormControlLabel
                                            disabled={!this.prefSettings.autoNumber}
                                            label="Auto generate item number"
                                            control={
                                                <Checkbox
                                                    style={{color: "#048647"}}
                                                    checked={this.state.autoNumber}
                                                    onChange={this.handleChangeCheckBox('autoNumber')}
                                                    value="autoNumber"
                                                    classes={{
                                                        palette: classes.root,
                                                        checked: classes.checked,
                                                    }}
                                                />
                                            }
                                        />
                                    </div>
                                    }
                                    <div >
                                        {this.prefSettings.subscription !== "KOP" ?
                                        <FormControlLabel
                                            label="Track With Inventory"
                                            className={!this.state.autoNumber ? classes.track_with_inventory : classes.track_with_inventory_less}
                                            control={
                                                <Checkbox
                                                    style={{color: "#048647"}}
                                                    checked={this.state.checkedTrackInv}
                                                    onChange={this.handleChangeCheckBox('checkedTrackInv')}
                                                    value="checkedTrackInv"
                                                    classes={{
                                                        palette: classes.root,
                                                        checked: classes.checked,
                                                    }}
                                                />
                                            }
                                        /> : null
                                        }
                                    </div>
                                </div>

                                <div className="addDetailWrapper">
                                    { !this.state.autoNumber ?
                                        <TextField
                                            id="mui-theme-provider-outlined-input"
                                            required
                                            className={classes.margin_width}
                                            style={{marginLeft:"0px !important"}}
                                            label="Item No"
                                            autoComplete="off"
                                            variant="outlined"
                                            inputType="text"
                                            onChange={this.handleChange('itemNumber')}
                                            value={this.state.autoNumber ? "Auto generate" : this.state.itemNumber}
                                        /> : null
                                    }

                                    <TextField
                                        id="mui-theme-provider-outlined-input"
                                        required
                                        autoFocus
                                        className={classes.margin_width}
                                        label="Item Name"
                                        variant="outlined"
                                        autoComplete="off"
                                        inputType="text"
                                        onChange={this.handleChange('itemName')}
                                        value={this.state.itemName}
                                    />
                                    {this.prefSettings.allowDualLanguagePrint ?
                                        <TextField
                                            id="mui-theme-provider-outlined-input"
                                            className={classes.margin_width}
                                            label="Item Name(2nd lang)"
                                            variant="outlined"
                                            floatingLabelText="Item Name(2nd lang)"
                                            type="text"
                                            autoComplete="off"
                                            onChange={this.handleChange('itemName2nd')}
                                            value={this.state.itemName2nd}
                                        /> : null
                                    }
                                    {this.prefSettings.subscription !== "KOP" && this.state.checkedTrackInv  ?
                                        <TextField
                                            id="mui-theme-provider-outlined-input"
                                            className={classes.margin_width}
                                            label="Quantity"
                                            disabled={!this.state.checkedTrackInv}
                                            variant="outlined"
                                            autoComplete="off"
                                            type="number"
                                            onChange={this.handleChange('quantity')}
                                            value={this.state.quantity}
                                        /> : null
                                    }
                                    <TextField
                                        id="mui-theme-provider-outlined-input"
                                        className={classes.margin_width}
                                        autoComplete="off"
                                        label="Selling Price"
                                        variant="outlined"
                                        type="number"
                                        onKeyPress={isNumber}
                                        onChange={this.handleChange('sellingPrice')}
                                        value={this.state.sellingPrice}
                                    />
                                    <div style={{display: 'flex'}}>
                                    {this.prefSettings.wholesalePrice ?
                                    < TextField
                                        id="mui-theme-provider-outlined-input"
                                        className={classes.margin_width}
                                        autoComplete="off"
                                        label="Whole sale Price"
                                        variant="outlined"
                                        type="number"
                                        onKeyPress={isNumber}
                                        onChange={this.handleChange('wholesalePrice')}
                                        value={this.state.wholesalePrice}
                                        /> : null
                                    }
                                    <CustomAutocomplete setting={{
                                        array : this.state.categoryAll,
                                        label: "Category",
                                        arrayName: 'category',
                                        defaultValue: ''
                                    }} onChange={this.categoryChange}
                                                        ref={this.customAutoCompleteRefCat}
                                    />

                                    <CustomAutocomplete setting={
                                        {
                                            array : this.state.subCategoryAll,
                                            label: "Sub Category",
                                            arrayName: 'subcategory',
                                            defaultValue: ''
                                        }
                                    } onChange={this.subCategoryChange}
                                                        ref={this.customAutoCompleteRef}
                                    />
                                    
                                    {this.prefSettings.subscription !== "KOP" ?
                                        <TextField
                                            id="mui-theme-provider-outlined-input"
                                            className={classes.margin_width}
                                            label="Purchase Price"
                                            variant="outlined"
                                            autoComplete="off"
                                            type="number"
                                            onKeyPress={isNumber}
                                            onChange={this.handleChange('purchasePrice')}
                                            value={this.state.purchasePrice}
                                        /> : null
                                    }
                                    </div>
                                    {this.prefSettings.subscription !== "KOP" ?
                                        <TextField
                                            id="outlined-select-currency-native"
                                            select
                                            label="Product Type"
                                            className={classes.margin_width}
                                            value={this.state.productType}
                                            onChange={this.handleChange('productType')}
                                            SelectProps={{
                                                native: true,
                                                MenuProps: {
                                                    className: classes.menu,
                                                },
                                            }}
                                            margin="normal"
                                            variant="outlined"
                                        >
                                            {loadSpinnerData(this.prefSettings).map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField> : null
                                    }

                                </div>

                                <div className="addDetailWrapper">
                                    <Button onClick={this.toggleMenu} variant="contained" color="Orange" className={classes.buttonMore}>
                                        {this.state.showWarning ? 'More' : 'Less'}
                                    </Button>
                                    <Button disabled={this.state.addDisabled} onClick={this.searchByNum} variant="contained" className={classes.button}>
                                        Add
                                    </Button>
                                    <Button onClick={this.handleClickOpenClearDialog.bind()} variant="contained" color="Orange" className={classes.button_cancel}>
                                        Clear
                                    </Button>
                                </div>

                                <div className="addDetailWrapper" style={{display:this.state.showWarning ? "none" : "flex"}}>
                                    <div>
                                        <TextField
                                            id="mui-theme-provider-outlined-input"
                                            className={classes.margin_width}
                                            label="Max Discount"
                                            variant="outlined"
                                            autoComplete="off"
                                            onKeyPress={isNumber}
                                            type="number"
                                            onChange={this.handleChange('maxDiscount')}
                                            value={this.state.maxDiscount}
                                        />
                                        <FormControlLabel
                                            className={classes.margin_radio}
                                            label="0.00"
                                            control={<Radio
                                                style={{color: "#048647"}}
                                                type="radio"
                                                value="1"
                                                checked={this.state.selectedValueMax === "1"}
                                                onChange={this.radioChangeMax}
                                            />}
                                        />
                                        <FormControlLabel
                                            className={classes.margin_radio}
                                            label="%"
                                            control={<Radio
                                                style={{color: "#048647"}}
                                                type="radio"
                                                value="0"
                                                checked={this.state.selectedValueMax === "0"}
                                                onChange={this.radioChangeMax}
                                            />}
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            id="mui-theme-provider-outlined-input"
                                            className={classes.margin_width}
                                            label="Default Discount"
                                            variant="outlined"
                                            autoComplete="off"
                                            onKeyPress={isNumber}
                                            type="number"
                                            onChange={this.handleChange('defaultDiscount')}
                                            value={this.state.defaultDiscount}
                                        />
                                        <FormControlLabel
                                            className={classes.margin_radio}
                                            label="0.00"
                                            control={<Radio
                                                style={{color: "#048647"}}
                                                type="radio"
                                                value="1"
                                                checked={this.state.selectedValueDefault === "1"}
                                                onChange={this.radioChangeDefault}
                                            />}
                                        />
                                        <FormControlLabel
                                            className={classes.margin_radio}
                                            label="%"
                                            control={<Radio
                                                style={{color: "#048647"}}
                                                type="radio"
                                                value="0"
                                                checked={this.state.selectedValueDefault === "0"}
                                                onChange={this.radioChangeDefault}
                                            />}
                                        />
                                    </div>
                                </div>

                                <div className="addDetailWrapper" style={{display:this.state.showWarning ? "none" : "flex"}}>
                                    {this.prefSettings.subscription !== "KOP" ?
                                        <TextField
                                            id="mui-theme-provider-outlined-input"
                                            className={classes.margin_width}
                                            label="Reorder Quantity"
                                            variant="outlined"
                                            autoComplete="off"
                                            onKeyPress={isNumber}
                                            type="number"
                                            onChange={this.handleChange('reorderQuantity')}
                                            value={this.state.reorderQuantity}
                                        /> : null
                                    }
                                    {this.prefSettings.subscription !== "KOP" ?
                                        <TextField
                                            id="mui-theme-provider-outlined-input"
                                            type="date"
                                            label="Expiry date"
                                            className={classes.margin_width}
                                            variant="outlined"
                                            value={this.state.expiryDate}
                                            onChange={this.handleChange('expiryDate')}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        /> : null
                                    }
                                    <TextField
                                        id="outlined-select-currency-native"
                                        select
                                        label="Uom"
                                        className={classes.margin_width}
                                        value={this.state.uom}
                                        onChange={this.handleChange('uom')}
                                        SelectProps={{
                                            native: true,
                                            MenuProps: {
                                                className: classes.menu,
                                            },
                                        }}
                                        margin="normal"
                                        variant="outlined"
                                    >
                                        {UOM.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                    {this.prefSettings.subscription !== "KOP" ?
                                        <TextField
                                            id="outlined-select-currency-native"
                                            select
                                            label="Location"
                                            className={classes.margin_width}
                                            InputLabelProps={{shrink: true,}}
                                            value={this.state.location}
                                            onChange={this.handleChange('location')}
                                            SelectProps={{
                                                native: true,
                                                MenuProps: {
                                                    className: classes.menu,
                                                },
                                            }}
                                            margin="normal"
                                            variant="outlined"
                                        >
                                            {this.state.locationArray && this.state.locationArray.map(option => (
                                                <option key={option.location_id} value={option.location_id}>
                                                    {option.location_desc}
                                                </option>
                                            ))}
                                        </TextField> : null
                                    }
                                    {this.prefSettings.allowTax ?
                                        <TextField
                                            id="salesTax"
                                            select
                                            label="Sales Tax"
                                            className={classes.margin_width}
                                            InputLabelProps={{shrink: true,}}
                                            value={this.state.taxDataSales}
                                            onChange={this.handleChange('taxDataSales')}
                                            SelectProps={{
                                                native: true,
                                                MenuProps: {
                                                    className: classes.menu,
                                                },
                                            }}
                                            margin="normal"
                                            variant="outlined"
                                        >
                                            {this.prefSettings.CurrencyType !== 'cad' ?
                                                <>
                                                    {this.state.taxArray.map(option => (
                                                        <option key={option.vatcode} value={option.vatcode}>
                                                            {option.vatcode_desc + "- " + option.vat_rate + "%" }
                                                        </option>
                                                    ))}
                                                </> :
                                                <>
                                                    {this.state.taxArray.map(option => (
                                                        <option key={option.vatcode_group} value={option.vatcode_group}>
                                                            {option.vatcode_group}
                                                        </option>
                                                    ))}
                                                </> }
                                        </TextField> : null
                                    }
                                    {this.prefSettings.allowTax ?
                                        <TextField
                                            id="purchaseTax"
                                            select
                                            label="Purchase Tax"
                                            className={classes.margin_width}
                                            InputLabelProps={{shrink: true,}}
                                            value={this.state.taxDataPurchase}
                                            onChange={this.handleChange('taxDataPurchase')}
                                            SelectProps={{
                                                native: true,
                                                MenuProps: {
                                                    className: classes.menu,
                                                },
                                            }}
                                            margin="normal"
                                            variant="outlined"
                                        >
                                            {this.prefSettings.CurrencyType !== 'cad' ?
                                                <>
                                                    {this.state.taxArray.map(option => (
                                                        <option key={option.vatcode} value={option.vatcode}>
                                                            {option.vatcode_desc + "- " + option.vat_rate + "%" }
                                                        </option>
                                                    ))}
                                                </> :
                                                <>
                                                    {this.state.taxArray.map(option => (
                                                        <option key={option.vatcode_group} value={option.vatcode_group}>
                                                            {option.vatcode_group}
                                                        </option>
                                                    ))}
                                                </> }
                                        </TextField> : null
                                    }
                                    
                                </div>
                            </div>
                        </MuiThemeProvider>

                        <Dialog open={this.state.clearDialog}>
                            <DialogTitle>
                                {"Are you sure clear this item?"}
                            </DialogTitle>
                            <MuiThemeProvider theme={theme}>
                                <DialogActions>
                                    <Button onClick={this.handleCloseClearDialog}
                                            style={{backgroundColor: "#ececec", color: "black"}}>
                                        Cancel
                                    </Button>
                                    <Button autoFocus style={{backgroundColor: "#106e4a", color: "white"}} variant="contained"
                                            onClick={this.handleOk}>
                                        Ok
                                    </Button>
                                </DialogActions>
                            </MuiThemeProvider>
                        </Dialog>
                    </div>
                </main>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(AddItem);
