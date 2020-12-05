import React, { useState } from "react"
import Footer from "../layouts/footer"
import Header from "../layouts/header"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { Grid, TextField } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Divder from "../components/divider"
import Layout from "../layouts/layout";
import Head from "next/head";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#f5f5f5",
    paddingTop: 50,
    paddingBottom: 50
  },
  formCard: {
    minWidth: 275,
    backgroundColor: "#f5f5f5",
    padding: 20
  },
  TextField: {
    marginTop: 20,
    marginBottom: 20,
  },
  contantFormBtn: {
    marginTop: 20,
    padding: 10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 80,
  },
  // selectEmpty: {
  //   // marginTop: theme.spacing(2),
  // }
});

const coursesList = [
  {
    value: "(CCA)",
    label: "Certificate in Computer Application (CCA)"
  },
  {
    value: "(DCA)",
    label: "Diploma in Computer Application (DCA)"
  },
  {
    value: "Web Designing & Development",
    label: "Web Designing & Development"
  },
  {
    value: "Mobile App Development",
    label: "Mobile App Development"
  },
  {
    value: "Computer Hardware & Networking(HNE)",
    label: "Computer Hardware & Networking(HNE)"
  },
  {
    value: "Audio Video Editing(2D/3D Artist)",
    label: "Audio Video Editing(2D/3D Artist)"
  },
  {
    value: "AutoCAD Designing",
    label: "AutoCAD Designing"
  },
  {
    value: "Typping(Eng/Nep)",
    label: "Typping(Eng/Nep)"
  },
  {
    value: "UniCode",
    label: "UniCode"
  },
  {
    value: "Application Software",
    label: "Application Software"
  },
  {
    value: "Microsoft World",
    label: "Microsoft World"
  },
  {
    value: "Microsoft power point",
    label: "Microsoft power point"
  },
  {
    value: "Microsoft Excel",
    label: "Microsoft Excel"
  },
  {
    value: "Microsoft Access DB",
    label: "Microsoft Access DB"
  },
  {
    value: "PHP serverside",
    label: "PHP serverside"
  },
  {
    value: "JSP serverside",
    label: "JSP serverside"
  },
  {
    value: "ASP serverside",
    label: "ASP serverside"
  },
  {
    value: "Adobe Photoshop",
    label: "Adobe Photoshop"
  },
  {
    value: "Adobe Pagemaker",
    label: "Adobe Pagemaker"
  },
  {
    value: "Corel Draw",
    label: "Corel Draw"
  },
  {
    value: "C programming",
    label: "C programming"
  },
  {
    value: "C++ programing",
    label: "C++ programing"
  },
  {
    value: "Java core",
    label: "Java core"
  },
  {
    value: "java Advance",
    label: "java Advance"
  },
  {
    value: "Android",
    label: "Android"
  },
  {
    value: "Ios",
    label: "Ios"
  },
  {
    value: "Swift Ui",
    label: "Swift Ui"
  },
  {
    value: "VB Basic",
    label: "VB Basic"
  },
  {
    value: "VB.NET",
    label: "VB.NET"
  },
  {
    value: "Linux Os",
    label: "Linux Os"
  },
  {
    value: "Oracle",
    label: "Oracle"
  },
  {
    value: "SQL server",
    label: "SQL server"
  },
  {
    value: "Mysql server",
    label: "Mysql server"
  },
  {
    value: "HTML5+CSS3",
    label: "HTML5+CSS3"
  },
  {
    value: "JavaScript",
    label: "JavaScript"
  },
  {
    value: "shell Scripting",
    label: "shell Scripting"
  },
  {
    value: "Python ML",
    label: "Python ML"
  },
  {
    value: "Tally Accounting",
    label: "Tally Accounting"
  },
  {
    value: "FACT Accounting",
    label: "FACT Accounting"
  },
  {
    value: "E-mail & Internet",
    label: "E-mail & Internet"
  },
  {
    value: "AutoCad",
    label: "AutoCad"
  },
  {
    value: "Spoken English",
    label: "Spoken English"
  },
  {
    value: "Others",
    label: "Others"
  },
]

function Register() {
  const classes = useStyles();
  const [course, setCourse] = useState("")
  return (
    <Layout>
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <title>Register</title>
        </Head>
        <div className={classes.root}>
          <h1 style={{ textTransform: "uppercase", color: "#F2BA49", textAlign: "center" }}>Registration</h1>
          <Divder />
          <Grid container >
            <Grid item xs={12} sm={6}>
              <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>

                <img src="/hero1.svg" height="350" alt="hero1.svg" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className={classes.formCard} elevation={0}>
                <Grid container>
                  <Grid item xs={12} sm={12}>
                    <TextField label="Full Name" variant="outlined" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField label="Email" variant="outlined" fullWidth className={classes.TextField} />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField label="Mobile" variant="outlined" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      id="outlined-select-currency"
                      select
                      className={classes.TextField}
                      label="Select Course"
                      value={course}
                      fullWidth
                      onChange={(event) => setCourse(event.target.value)}
                      variant="outlined"
                    >
                      {coursesList.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Button size="small" color="primary" variant="contained" fullWidth className={classes.contantFormBtn}>Register</Button>
                  </Grid>

                </Grid>
              </Card>
            </Grid>

          </Grid>

        </div>
      </div>
    </Layout>
  )

}

export default Register