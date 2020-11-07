import * as React from "react"
import Grid from '@material-ui/core/Grid';
import { Button, Card, CardActionArea, CardMedia, makeStyles, Typography } from "@material-ui/core";
import ReactCardCarousel from 'react-card-carousel';
import Link from "next/link";
import { useRouter } from 'next/router'
import { ArrowForward } from "@material-ui/icons";
import custom from '../styles/mystyle.module.css';


const useStyle = makeStyles((theme) => ({
    root: {
        padding: 20,
        backgroundColor: theme.palette.primary.background
    },
    content: {
        textAlign: "center",
        padding: 30,
    },
    sloganCard: {

        backgroundColor: theme.palette.primary.background,
        color: "white"
    },
    heroCard: {
        // backgroundColor: "#AE0000",
        maxWidth: 500,
        marginLeft: 80,
        marginTop: 30
    },
    media: {
        height: 300,
    },

}))

function Heros(props) {
    const classes = useStyle();
    const router = useRouter();
    return (

        <Grid container item className={classes.root}>
            <Grid item xs={12} sm={6}>
                <Card className={classes.content} elevation={0} className={classes.sloganCard}>
                    <div className={custom.heroHeading}>
                        <h1 className={custom.h1}>Expand your horizons and pave the way for the future!
               </h1>

                        <Button onClick={() => router.push("/courses")} color="secondary" variant="contained" style={{ borderRadius: 20 }} endIcon={<ArrowForward />}>Our Courses</Button>
                    </div>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} >
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>

                    <img src="/hero.svg" height="300" alt="hero images"/>
                </div>
            </Grid>
        </Grid>

    )
}

export default Heros;