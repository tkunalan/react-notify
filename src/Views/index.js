import React, { useEffect } from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    IconButton,
    Typography,
} from "@material-ui/core";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import Icon1 from "@material-ui/icons/Loyalty";
import Icon2 from "@material-ui/icons/RadioButtonChecked";
import Icon3 from "@material-ui/icons/Redeem";
import Icon4 from "@material-ui/icons/Cancel";
import Icon5 from "@material-ui/icons/MonetizationOn";

const Home = () => {
    useEffect(() => {
        sessionStorage.setItem('user_id', 'M10@gmail.com');
        sessionStorage.setItem('base_url_gql', 'http://ondev.kaleapps.com');
        sessionStorage.setItem('prefSettings', JSON.stringify({"CurrencyType":"slr","industryType":"102","printerType":"80mm","itemDiscount":true,"wholesalePrice":true,"autoNumber":true,"chequesAlertPeriod":"0","expiryAlertPeriod":"0","selectedPrintStyle":"0","sendReceiptMethod":"1","selectedLanguage":"001","selectedTaxType":"0","receiptImage":false,"printerAutocut":false,"itemPicture":false,"editSellingPrice":true,"shortKeyStyle":"0","itemAutoEntry":true,"allowOrderConfirm":false,"orderConfPopup":true,"allowDualLanguagePrint":true,"allowMultiPrinters":false,"salesNoInventory":true,"holdOrderDelete":false,"splitPayment":true,"orderDiscount":true,"serviceCharge":true,"serviceChargePct":10,"batchIdPopup":true,"allowIMEI":false,"allowTax":false,"allowLoyalty":false,"allowProduction":true,"allowItemCombo":false,"allowCostingMethod":"LIFO","allowTog":true,"subscription":"KOPP","lotto":0,"lotto_winning":0,"lottery":0,"lottery_winning":0}));
        sessionStorage.setItem("companyInfo", JSON.stringify([{"company_description":"n/l","store_address":"n/l","industry":"shop","company_message":" ------------------IMPORTANT NOTICE-----------------           \nIN CASE OF A PRICE DISCREPANCY, RETURN THE ITEM & BILL WITHIN 4 DAYS TO REFUND THE DIFFERENCE. *************************************************** PLEASE CALL OUR HOTLINE FOR YOUR VALUED SUGGESTIONS AND COMMENTS *************************************************** THANK YOU! COME AGAIN!","last_updated":"2021-08-01T06:12:57Z","created":"2021-03-12T03:32:52Z","company_name":"Sharan Multi","company_address":"Nelliady","company_id":"bYfo2AU2BENhRhRnfLim","contact_name":"n/l","client_id":"eVG5vocCbjSehQuYYePO1ZdMkosoZtyFynmxo7nY","company_no":"0777123456"}]))
        sessionStorage.setItem("authorization", "GZyqJDD36t4y336Pti3Bm4QQUxDygYWI9Yybvmdut4Bhv6NrkpM7Gje8WpQhy01XGYkYe3FKfbs")
        sessionStorage.setItem("company_id", "bYfo2AU2BENhRhRnfLim")
        sessionStorage.setItem("user_designation", "ADMIN")
        sessionStorage.setItem("base_url", "http://ondev.kaleapps.com")
        sessionStorage.setItem("client_id", "eVG5vocCbjSehQuYYePO1ZdMkosoZtyFynmxo7nY")

        if (window.location.hostname === "localhost") {
            let proxyUrl = "https://cors-anywhere.herokuapp.com/";
            sessionStorage.setItem(
              "base_url",
              proxyUrl + "http://csdev.kaleapps.com:3000"
            );
            sessionStorage.setItem(
              "base_url_gql",
              proxyUrl + "http://gsdev.kaleapps.com:3000"
            );
          } else {
            let url = window.location.protocol + "//" + window.location.hostname;
            sessionStorage.setItem("base_url", url);
            sessionStorage.setItem("base_url_gql", url);
          }
    })

    return (
        <React.Fragment>
            <Container>
                <Box textAlign="center">
                    <Typography
                        variant="h6"
                        style={{
                            fontWeight: "bold",
                            marginTop: 25,
                        }}
                    >
                        👋 Welcome to Kale!
                    </Typography>
                    <Typography style={{ marginTop: 10 }}>
                        Integate item, order to kale
                        <br />
                        {''}
                    </Typography>
                    <Button
                        variant="contained"
                        endIcon={<VideoCallIcon />}
                        size="small"
                        style={{
                            marginTop: 15,
                            background: "#7280D1",
                            color: "white",
                            textTransform: "none",
                        }}
                    >
                        See How to Setup
                    </Button>
                </Box>
                <Grid container spacing={3} style={{ marginTop: 10 }}>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Card style={{ boxShadow: "0 0 1px black" }}>
                            <CardContent>
                                <Box style={{ display: "flex" }}>
                                    <Box style={{ flex: 2 }}>
                                        <IconButton
                                            style={{
                                                background: "#D9E1FF",
                                                color: "#3F77F1",
                                                padding: 15,
                                            }}
                                        >
                                            <Icon1 style={{ fontSize: 30 }} />
                                        </IconButton>
                                    </Box>
                                    <Box style={{ flex: 7 }}>
                                        <Typography
                                            variant="body1"
                                            style={{ fontWeight: "bold" }}
                                        >
                                            Add item
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            style={{ marginTop: 8 }}
                                        >
                                            Add item on shopify
                                        </Typography>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            style={{
                                                background: "white",
                                                marginTop: 10,
                                                textTransform: 'none'
                                            }}
                                        >
                                            + Add
                                        </Button>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Card style={{ boxShadow: "0 0 1px black" }}>
                            <CardContent>
                                <Box style={{ display: "flex" }}>
                                    <Box style={{ flex: 2 }}>
                                        <IconButton
                                            style={{
                                                background: "#FEF3DD",
                                                color: "#EDBF60",
                                                padding: 15,
                                            }}
                                        >
                                            <Icon2 style={{ fontSize: 30 }} />
                                        </IconButton>
                                    </Box>
                                    <Box style={{ flex: 7 }}>
                                        <Typography
                                            variant="body1"
                                            style={{ fontWeight: "bold" }}
                                        >
                                            Create Order
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            style={{ marginTop: 8 }}
                                        >
                                            Create order on shopify
                                        </Typography>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            style={{
                                                background: "white",
                                                marginTop: 10,
                                                textTransform: 'none'
                                            }}
                                        >
                                            + Create
                                        </Button>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Card style={{ boxShadow: "0 0 1px black" }}>
                            <CardContent>
                                <Box style={{ display: "flex" }}>
                                    <Box style={{ flex: 2 }}>
                                        <IconButton
                                            style={{
                                                background: "#FCE7EE",
                                                color: "#F590B7",
                                                padding: 15,
                                            }}
                                        >
                                            <Icon3 style={{ fontSize: 30 }} />
                                        </IconButton>
                                    </Box>
                                    <Box style={{ flex: 7 }}>
                                        <Typography
                                            variant="body1"
                                            style={{ fontWeight: "bold" }}
                                        >
                                            Cashback
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            style={{ marginTop: 8 }}
                                        >
                                            Create cashback on shopify
                                        </Typography>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            style={{
                                                background: "white",
                                                marginTop: 10,
                                                textTransform: 'none'
                                            }}
                                        >
                                            + Create
                                        </Button>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/*<Grid item xs={12} sm={12} md={6} lg={4}>
                        <Card style={{ boxShadow: "0 0 1px black" }}>
                            <CardContent>
                                <Box style={{ display: "flex" }}>
                                    <Box style={{ flex: 2 }}>
                                        <IconButton
                                            style={{
                                                background: "#DEF4DD",
                                                color: "#62CB5B",
                                                padding: 15,
                                            }}
                                        >
                                            <Icon4 style={{ fontSize: 30 }} />
                                        </IconButton>
                                    </Box>
                                    <Box style={{ flex: 7 }}>
                                        <Typography
                                            variant="body1"
                                            style={{ fontWeight: "bold" }}
                                        >
                                            Custom Fixed Value Discounts
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            style={{ marginTop: 8 }}
                                        >
                                            Offer certain fixed value discounts
                                            to UPSELL and products in your
                                            store.
                                        </Typography>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            style={{
                                                background: "white",
                                                marginTop: 10,
                                                textTransform: 'none'
                                            }}
                                        >
                                            + Create
                                        </Button>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>*/}
                    {/*<Grid item xs={12} sm={12} md={6} lg={4}>
                        <Card style={{ boxShadow: "0 0 1px black" }}>
                            <CardContent>
                                <Box style={{ display: "flex" }}>
                                    <Box style={{ flex: 2 }}>
                                        <IconButton
                                            style={{
                                                background: "#E4E0FF",
                                                color: "#8071FF",
                                                padding: 15,
                                            }}
                                        >
                                            <Icon5 style={{ fontSize: 30 }} />
                                        </IconButton>
                                    </Box>
                                    <Box style={{ flex: 7 }}>
                                        <Typography
                                            variant="body1"
                                            style={{ fontWeight: "bold" }}
                                        >
                                            No Discount
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            style={{ marginTop: 8 }}
                                        >
                                            Showcase certain products from your
                                            store for maximum visibility without
                                            any discounts.
                                        </Typography>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            style={{
                                                background: "white",
                                                marginTop: 10,
                                                textTransform: 'none'
                                            }}
                                        >
                                            + Create
                                        </Button>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>*/}
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default Home;