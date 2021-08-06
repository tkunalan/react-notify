import React, {useEffect} from "react";
import {Link as RouterLink, useNavigate} from 'react-router-dom'

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        textTransform: 'none'
    },
}));

export default function LogIn() {
    const classes = useStyles();
    const navigate = useNavigate();


    useEffect(()=>{
        window.fbAsyncInit = function() {
            window.FB.init({
                appId            : '2759697500978446',
                autoLogAppEvents : true,
                xfbml            : true,
                version          : 'v8.0'
            });
        };
    },[]);

    function myFunction() {
        /*prompt user for user name password and gets access token*/
        window.FB.init({
            appId            : '2759697500978446',
            autoLogAppEvents : true,
            xfbml            : true,
            version          : 'v8.0'
        });

        //document.getElementById("demo").style.color = "red";


        window.FB.login(function(response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                window.FB.api('/me', function(response) {

                    console.log('Good to see you, ' + response.name + '.');
                    navigate('/additem', { replace: true });
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });
        /*var request = {
          "access_token": FB.getAccessToken(),
          "requests": [
            {
              "method": "CREATE",
              "data": {
                "availability": "in stock",
                "description": "A Movie by sivakarthikeyan aka SK expected to be released on 2021 ",
                "image_url": "https://a10.gaanacdn.com/images/albums/78/3296978/crop_175x175_3296978.jpg",
                "name": "Doctor",
                "price": "5.00",
                "currency": "USD",
                "condition": "new",
                "url":"https://gaana.com/album/doctor-tamil",
              }
            }
          ]
        }*/
        var access_token =  window.FB.getAccessToken();

        window.FB.api("/1054421811682437/batch",'post',{
            "access_token":  window.FB.getAccessToken(),
            "requests": [
                {
                    "method": "CREATE",
                    "data": {
                        "availability": "in stock",
                        "description": "A Movie by sivakarthikeyan aka SK expected to be released on 2021 ",
                        "image_url": "https://a10.gaanacdn.com/images/albums/78/3296978/crop_175x175_3296978.jpg",
                        "name": "Doctor",
                        "price": "5.00",
                        "currency": "USD",
                        "condition": "new",
                        "url":"https://gaana.com/album/doctor-tamil",
                    }
                }
            ]
        },function(response){
            if (!response || response.error) {
                console.log('Batch, ' + response.error + '.');
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        })
        //https://gaana.com/album/doctor-tamil

        /*FB.api('/me/feed', 'post', { message: message_str}, function(response) {
        if (!response || response.error) {
          alert('Couldn't Publish Data');
        } else {
          alert("Message successfully posted to your wall");
        }
      });*/

        //catalogid= 1054421811682437
    }

    return (
        <Container component="main" style={{maxWidth: 400}}>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Log In
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Log In
                    </Button>
                    <Box style={{marginBottom: 10, textAlign: 'center'}}>or</Box>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={()=> myFunction()}
                        style={{ backgroundColor: "#4468B0", color: "#fff", textTransform: 'none' }}
                        startIcon={<FacebookIcon />}
                    >
                        Continue with Facebook
                    </Button>
                </form>
            </div>
        </Container>
    );
}
