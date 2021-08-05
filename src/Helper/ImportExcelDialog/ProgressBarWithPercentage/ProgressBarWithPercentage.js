import React from 'react';
import {createMuiTheme, makeStyles, MuiThemeProvider} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import green from "@material-ui/core/colors/green";

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
    typography: { useNextVariants: true },
});


export default function LinearDeterminate(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <MuiThemeProvider theme={theme}>
                <LinearProgress color="primary" variant="determinate" value={props.count} style={{height: 12}}/>
            </MuiThemeProvider>
        </div>
    );
}
