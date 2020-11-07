import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Head from 'next/head'
import * as React from 'react';
import styles from '../styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    parent: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginBottom: 10,
    },
    dividerStyle: {
        marginTop: -20,
        height: 3,
        width: 100,
        backgroundColor: '#F2BA49',
    }
}));

export default function Index() {
    const classes = useStyles();
    return (
        <div className={classes.parent}>

            <div className={classes.dividerStyle}>
            </div>
        </div>

    )
}
