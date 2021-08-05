import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import {createMuiTheme,MuiThemeProvider} from '@material-ui/core/styles';
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
    typography: { useNextVariants: true },
});


function CustomConfirmDialog(props) {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        props.handleDialog('');
        setOpen(false);
    };

    const handleOk =  () => {
        props.handleDialog(props.data);
    };

    return (
        <div>
            <Dialog
                open={open}
                keepMounted
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    {props.data ?
                        props.data.label :
                        props.lable
                    }
                </DialogTitle>
                <MuiThemeProvider theme={theme}>
                    <DialogActions>
                        <Button onClick={handleClose} style={{backgroundColor:"#ececec", color:"black"}}>
                            No
                        </Button>
                        <Button style={{backgroundColor: "#106E4A", color: "#FFF"}} variant="contained" color="secondary" onClick={handleOk}>
                            Yes
                        </Button>
                    </DialogActions>
                </MuiThemeProvider>
            </Dialog>
        </div>
    );
}

export default React.memo(CustomConfirmDialog)
