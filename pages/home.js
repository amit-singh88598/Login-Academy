import React from "react"
import Header from "../layouts/header";
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography } from "@material-ui/core";
import Heros from "../components/heros";
import CourseSection from "../components/courseSection";
import OnAcademicSection from "../components/onAcademicSection";
import ContactUs from "../components/contactUs";
import Footer from "../layouts/footer";
import HomeCourses from "../components/homeCourses";
import Divider from "../components/divider"
import Layout from "../layouts/layout";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 0,
    marginRight: 0,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  introSection: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 60,
    paddingBottom: 80,

    textAlign: "center"
  },
  ourCourses: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 60,
    paddingBottom: 80,
    backgroundColor: "#f5f5f5",

  },
  onAcademy: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 60,
    paddingBottom: 80,


  },
  contactUs: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 40,
    paddingBottom: 80,
    backgroundColor: "#f5f5f5",
    textAlign: "center"
  },
  headng: {

    textTransform: "uppercase",
    color: theme.palette.secondary.main
  }
}));


function Home() {
  const classes = useStyles();
  return (
    <Layout >
      <div className={classes.root}>
        <Heros />
        <div className={classes.introSection}>
          <h1 className={classes.headng}>INTRODUCTION</h1>
          <Divider />
          <Typography variant="h6">
            Now we are in an era of computers and it is very likely that you must either learnt them as a professional course or used casually. Either ways, computers have  truely transformed the the world operates
          </Typography>
        </div>

        <div className={classes.ourCourses}>
          <HomeCourses />
        </div>

        <div className={classes.onAcademy}>
          <h1 style={{ textTransform: "uppercase", color: "#F2BA49", textAlign: "center" }}>On Academic</h1>
          <Divider />
          <OnAcademicSection />
        </div>
        <div className={classes.contactUs}>
          <h1 style={{ marginBottom: 20, textTransform: "uppercase", color: "#F2BA49" }}>Contact Us
        </h1>
          <Divider />

          <ContactUs />
        </div>
      </div>
    </Layout >
  )
}

export default Home;
