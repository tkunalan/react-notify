import React from 'react';
import {createMuiTheme, makeStyles, MuiThemeProvider} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import green from "@material-ui/core/colors/green";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {ExcelRenderer} from "react-excel-renderer";
import {postItem} from "../../services/PostService";
import LinearDeterminate from "./ProgressBarWithPercentage/ProgressBarWithPercentage";
import SampleFile from "../../Images/Sample_File.xls";
import {getItemByNumber} from "../../services/GetItemService";


const theme = createMuiTheme({
    palette: {
        primary: green,
    },
    typography: { useNextVariants: true },
});


const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));

function ImportExcelDialog(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [fileName, setFileName] = React.useState('Choose your file');
    const [postDataCount, setPostDataCount] = React.useState(0);
    const [showProgress, setShowProgress] = React.useState(false);
    const [viewButton, setViewButton] = React.useState(false);

    const handleClose = () => {
        props.propsHandleImport('');
        setOpen(false);
    };

    const handleView = () => {
        props.propsHandleImport('done');
        setOpen(false);
    };

    const  fileHandler =  (event) => {
        setShowProgress(true);
        let fileObj = event.target.files[0];
        setFileName(fileObj.name);
        ExcelRenderer(fileObj, (error, resp) => {
            let totalRow = 0;

            for(let row of resp.rows){

                if(row.length > 0 && row[0] !== "Item Number") {
                    totalRow += 1;
                }
            }

            if (!error) {

                readData(resp.rows,totalRow).then(() => {

                    setShowProgress(false);
                    setViewButton(true);
                    // setCols(resp.cols);
                  //  setRows(resp.rows);

                }).catch((e) => {
                    console.log("DATA_POST_ITEM", "catch")
                });

            } else {
                console.log(error);
            }
        });
    };

    const readData = async (rowData,totalRows)=>{

        let countPostItem = 0;
        for (let columns of rowData){

            if(!columns[0]){
                break;
            }

            if(columns[0] === "Item Number"){
                continue;
            }

            let data ={
                'client_id':sessionStorage.getItem('client_id'),
                'company_id':sessionStorage.getItem('company_id'),
                "item_number":columns[0].toString(),
                "item_desc": columns[1] ? columns[1].toString() : "n/l",
                "qoh":columns[2] ? parseFloat(columns[2]) : 0.0,
                "qoh_count":columns[2] ? parseFloat(columns[2]) : 0.0,
                "selling_price":columns[3] ? parseFloat(columns[3]) : 0.0,
                "category":columns[4] ? columns[4].toString() : "Others",
                "subcategory": columns[5] ? columns[5].toString() : "Others",
                "reorder_qty":columns[6] ? parseFloat(columns[6]) : 0.0,
                "track_inventory": columns[7]  ? columns[7].toString() : "N",
                "uom":columns[8] ? columns[8].toString() : "No",
                "last_purchase_price":columns[9] ? parseFloat(columns[9]) : 0.0,
                "max_discount":columns[10] ? parseFloat(columns[10]) : 0.0,
                "max_discount_type":columns[11] ? parseInt(columns[11],0) : 0,
                "default_discount": columns[12] ? parseFloat(columns[12]) : 0,
                "default_discount_type": columns[13] ? parseInt(columns[13],0) : 0,
                "bid_exp_date": columns[14] ? columns[14].toString() : "n/l",
                "supplier_id":columns[18] ? columns[18].toString() : "0",
                "type":columns[19] ? columns[19].toString() : "P",
                "location_id":columns[20] ? columns[20].toString() : "1",
                "temp_bid":0,
                "bid":0,
                "item_desc1":"n/l".toString(),
                "vatcode1":undefined,
                "vatcode2":undefined,
                "vatcode3":undefined,
                "vatcode4":undefined,
                "bid_text":"n/l",
                "bid_rcd_qty":0.0,
                "allow_sales":"1"
            };

            try {
                let itemResponse = await getItemByNumber(columns[0]);
                if(itemResponse.item.length === 0) {
                    await postItem(data);
                    countPostItem = countPostItem + 1;
                    setPostDataCount(countPostItem/totalRows*100);
                }
                else {
                    countPostItem = countPostItem + 1;
                    setPostDataCount(countPostItem/totalRows*100);
                }
            }
            catch(e){
                console.log(e)
            }
        }
    };

    return (
        <React.Fragment>
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                maxWidth="sm"
                open={open}
                aria-labelledby="max-width-dialog-title"
            >
                <React.Fragment>
                    {showProgress ?
                        <LinearDeterminate count={postDataCount}/> : null
                    }
                </React.Fragment>
                <DialogTitle id="alert-dialog-title" className="dialogHeadingColor">
                    {"You can import your products (Items) information from an Excel Spreadsheet. "}
                    <span>
                        <a href={SampleFile} style={{fontSize: 14}} download>
                            [Download sample item]
                        </a>
                    </span>
                </DialogTitle>
                <MuiThemeProvider theme={theme}>
                    <DialogContent>
                        <div className={classes.root}>
                            <input
                                id="contained-button-file"
                                className={classes.input}
                                type="file"
                                accept=".xls,.xlsx,.csv"
                                onChange={fileHandler}
                            />
                            <label htmlFor="contained-button-file">
                                <span style={{marginLeft : -24, fontSize : 17,padding: "0px 15px", color:"#979797"}}>{fileName} </span>
                                <Button variant="contained" style={{backgroundColor:"#106e4a", color:"white",}} component="span" startIcon={<CloudUploadIcon style={{color:"white"}}/>}>
                                   {postDataCount > 0 ? "Uploading... " + Math.ceil(postDataCount) +"%" :  "Upload"}
                                </Button>
                            </label>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} style={{backgroundColor:"#ececec", color:"black"}}>
                            Close
                        </Button>
                        {viewButton &&
                        <Button onClick={handleView} style={{backgroundColor: "#106e4a", color: "white"}}>
                            View Items
                        </Button>
                        }
                    </DialogActions>
                </MuiThemeProvider>
            </Dialog>
        </React.Fragment>
    );
}

export default React.memo(ImportExcelDialog);
