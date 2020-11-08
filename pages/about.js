import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Footer from "../layouts/footer"
import Header from "../layouts/header"
import { Typography } from "@material-ui/core";
import Divider from "../components/divider"
import Layout from "../layouts/layout";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
  introSection: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 60,
    paddingBottom: 80,
    backgroundColor: "#f5f5f5",
    textAlign: "center"
  },
  headng: {

    textTransform: "uppercase",
    color: theme.palette.secondary.main
  }
}));

function About() {
  const classes = useStyles();
  return (
    <Layout >
      <div>
         <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>About Us</title>
      </Head>
        <div className={classes.introSection}>
          <h1 className={classes.headng}>INTRODUCTION</h1>
          <Divider />
          <Typography component="p">
            Now we are in an era of computers and it is very likely that you must either learnt them as a professional course or used casually. Either ways, computers have truely transformed the the world operates, Personal with a knowledge of Computers are greate demand all over the and get top mostpriority for going abroad. without a computer literacy or computer background , no one can be supposed to be graduated or educated now a days, so LOGIN ACADEMY has been established to emerge your power of knowlwdge as well as develop your career which helps you to seek new opportunities in the world's market.
          </Typography>
        </div>
      </div>
    </Layout >
  )
}

export default About
