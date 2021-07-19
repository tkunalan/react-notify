import React from "react";
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