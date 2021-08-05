import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import {green} from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';
import {lightBlue} from "@material-ui/core/colors";
import {Slide} from "@material-ui/core";

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

const useStyles1 = makeStyles(theme => ({
    success: {
        color: green[600],
        backgroundColor: "#fff",
    },
    error: {
        color: theme.palette.error.dark,
        backgroundColor: "#fff",
    },
    info: {
        color: lightBlue,
        backgroundColor: "#fff",
    },
    warning: {
        color: "#FFBB1A",
        backgroundColor: "#fff",
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
    messageBody: {
        color: "#000",
        display: 'flex',
        alignItems: 'center',
    },
    iconClose: {
        color: "#000",
        fontSize: 20,
    },
}));

function MySnackbarContentWrapper(props) {
    const classes = useStyles1();
    const { className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    <Icon className={clsx(classes.icon, classes.iconVariant)} />
                    <span className={classes.messageBody}> {message}</span>
                 </span>
            }
            action={[
                <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                    <CloseIcon className={classes.iconClose} />
                </IconButton>,
            ]}
            {...other}
        />
    );
}

MySnackbarContentWrapper.propTypes = {
    className: PropTypes.string,
    message: PropTypes.string,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

export default function CustomizedSnackbars(props) {
    const [open, setOpen] = React.useState(true);
    const message = props.message;
    const severity = props.severity;
    const position = props.position;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        props.toastClickHandle();
        setOpen(false);
    };

    return (
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
            <Snackbar
                anchorOrigin={{vertical: 'bottom', horizontal: position}}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <MySnackbarContentWrapper
                    onClose={handleClose}
                    variant={severity}
                    message={message}
                />
            </Snackbar>
        </Slide>
    );
}
