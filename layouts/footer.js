import { Button, Card, Chip, Grid, IconButton, Link, makeStyles, Typography } from "@material-ui/core";
import { Call, Facebook, Instagram, LinkedIn, LocationOn, MailOutline, Opacity } from "@material-ui/icons";
import { useRouter } from "next/router";
import React, { Component } from "react";

const useStyles = makeStyles((theme) => ({
    footer: {
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 40,
        paddingBottom: 40,
        backgroundColor: theme.palette.primary.main,
        // textAlign: "center",
        // position: "absolute",
        // bottom: 0,
        // left: 0,
        // right: 0
    },
    navLink: {
        color: "#ffffff",
        marginTop: 2,
        marginBottom: 2,
        '&:hover': {
            background: theme.palette.secondary.main,
            color: theme.palette.primary.main,
            marginTop: 2,
            marginBottom: 2,
        },
    },
    icon: {
        marginRight: 5,
        color: theme.palette.secondary.white
    },
    anchor: {
        fontSize: 14,
        color: theme.palette.secondary.white
    },
    flex: {
        display: "flex"
    }
}));



function Footer() {
    const classes = useStyles();
    const router = useRouter();
    return (
        <div>
            <div className={classes.footer}>

                <Grid container>
                    {/* this column use for logo and contact */}
                    <Grid item xs={12} md={3} sm={3}>

                        <img src="/login-acadmic.svg" width="150" height="80" />

                        {/* </Card> */}
                        <Grid item xs={12} sm={12}>

                            <Chip className={classes.navLink} color="primary" label="HOME" onClick={() => router.push("/about")} />
                        </Grid>
                        <Grid item xs={12} sm={12}>

                            <Chip className={classes.navLink} color="primary" label="ABOUT US" onClick={() => router.push("/about")} />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Chip className={classes.navLink} color="primary" label="OUR COURSES" onClick={() => router.push("/courses")} />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Chip className={classes.navLink} color="primary" label="REGISTER" onClick={() => router.push("/register")} />
                        </Grid>
                        <div>
                            <IconButton>
                                <Link href="https://m.facebook.com/Login-Academy-The-Best-Known-For-Quality-Of-Education-102231858231955/">
                                    <Facebook className={classes.icon} />
                                </Link>
                            </IconButton>
                            <IconButton>
                                <LinkedIn className={classes.icon} />
                            </IconButton>
                            <IconButton>
                                <Instagram className={classes.icon} />
                            </IconButton>
                        </div>
                    </Grid>

                    {/* this column use for header item */}
                    {/* <Grid item xs={12} md={9} sm={9}>
                        <div>
                            <IconButton>
                                <Facebook className={classes.icon} />
                            </IconButton>
                            <IconButton>
                                <LinkedIn className={classes.icon} />
                            </IconButton>
                            <IconButton>
                                <Instagram className={classes.icon} />
                            </IconButton>
                        </div>
                    </Grid> */}
                    {/* this column use for map */}
                    <Grid item xs={12} md={9} sm={9}>
                        <div className={classes.flex}>
                            <IconButton>
                                <Call className={classes.icon} />
                                <a href="tel:+977 9824841531" className={classes.anchor}>+977 9824841531 </a>
                            </IconButton>
                            <IconButton>
                                <MailOutline className={classes.icon} />
                                <a href="mailto:netkingyadav@gmail.com" className={classes.anchor}>netkingyadav@gmail.com</a>
                            </IconButton>
                            <IconButton>
                                <LocationOn className={classes.icon} />
                                <p className={classes.anchor}>Bardibas-Jaleshwor Highway, Jaleshwor 45700, Nepal</p>
                            </IconButton>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.4126809837067!2d85.78447161503973!3d26.66728098323385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec43eedcf7f6d3%3A0x19f93be5933395f5!2sLOGIN%20ACADEMY%20-%20Best%20known%20for%20Quality%20of%20Education%20(computer%20institute)!5e0!3m2!1sen!2sin!4v1604569862433!5m2!1sen!2sin" width="100%" height="200" frameborder="0" aria-hidden="false" tabindex="0" style={{ border: "3px dashed white" }}></iframe>
                    </Grid>
                </Grid>
            </div>
            <div style={{ backgroundColor: "black", height: 40, width: "100%", textAlign: "right", paddingRight: 20, paddingTop: 10 }}>
                <span style={{ fontWeight: "bold", color: "white", fontStyle: "italic" }}>Developed By - </span>  <a style={{ color: "orange" }} href="https://digaut.com/" target="_blank">Digaut</a>
            </div>
        </div>
    );
}

export default Footer;