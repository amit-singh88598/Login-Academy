import React from "react"
import CourseCard from "../components/courseCard"
import "react-multi-carousel/lib/styles.css";
import { useRouter } from 'next/router'
import { Button, Grid, makeStyles } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import Divider from "../components/divider"

const useStyles = makeStyles((theme) => ({
    btnMore: {
        marginTop: 30,
        // display: "flex",
        // alignItems: "center",
        textAlign: "center"

    },
    heading: {
        color: theme.palette.secondary.main,
        textAlign: "center",
        textTransform: "uppercase"
    }
}));

const courses = [

    {
        courseName: "Diploma in Computer Application (DCA)",
        imgUrl: "/computer-app.svg",
        courseDescription: ["Include of CCA", "Adobe photoshop", "Adobe Pagemaker", "Basic Tally Accounting"],
        courseDuraton: "6",
        fees: "3000"
    },
    {
        courseName: "Certificate in Computer Application (CCA)",
        imgUrl: "/dev.svg",
        courseDescription: ["Fundamental of Computer", "Windows Overvew", "E-mail And Internet", "Virus", "Applcaton Software0", "Typping (Englsh+Nepali)"],
        courseDuraton: "6",
        fees: "6000"

    },
    {
        courseName: "Web Designing & Development",
        imgUrl: "/web-design.svg",
        courseDescription: ["Include of CCA", "HTML5+CSS3+JS", "PHP/JSP/ASP", "CMS (WP/JUMLA)", "6 month Free (1 Domain+Hosting)"],
        courseDuraton: "6",
        fees: "8000"
    }

]

function HomeCourses(props) {
    const router = useRouter()
    const classes = useStyles()
    return (
        <Grid>
            <h1 className={classes.heading}>Our Courses</h1>
            <Divider />
            <Grid container >
                {courses.map((item) => (
                    <Grid item xs={12} sm={4}>
                        <CourseCard data={item} key={item.courseName} />
                    </Grid>

                ))}
            </Grid>
            <div className={classes.btnMore}>
                <Button onClick={() => router.push("/courses")} color="white" variant="outlined" endIcon={<ArrowForward color="white" />}>More Courses</Button>
            </div>
        </Grid>


    )
}

export default HomeCourses