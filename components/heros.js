import * as React from "react"
import Grid from '@material-ui/core/Grid';
import { Button, Card, CardActionArea, CardMedia, makeStyles, Typography } from "@material-ui/core";
import ReactCardCarousel from 'react-card-carousel';
import Link from "next/link";
import { useRouter } from 'next/router'
import { ArrowForward } from "@material-ui/icons";


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
         textAlign: "center",
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
   sloganText:{
        [theme.breakpoints.down('sm')]:{
      fontSize:'1.5em',
    }
   }

}))

function Heros(props) {
    const classes = useStyle();
    const router = useRouter();
    return (

        <Grid container item className={classes.root}>
            <Grid item xs={12} sm={6}>
                <Card elevation={0} className={classes.sloganCard}>
                    <div >
                        <h1 className={classes.sloganText}>Expand your horizons and pave the way for the future!
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