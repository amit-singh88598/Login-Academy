import React from "react"
import CourseCard from "../components/courseCard"
import "react-multi-carousel/lib/styles.css";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    ourCourses: {
        paddingLeft: 50,
        paddingRight: 50,
        // paddingTop: 60,
        paddingBottom: 80,
        backgroundColor: "#f5f5f5",
    },
    ourCours: {
        marginLeft: 540
    }

}));



const courses1 = [

    {
        courseName: "Diploma in Computer Application (DCA)",
        imgUrl: "/computer-app.svg",
        courseDescription: ["Include of CCA", "Adobe photoshop", "Adobe Pagemaker", "Basic Tally Accounting"],
        courseDuraton: "6",
        fees: "3000",
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
        fees: "8000",
    }

]

const courses2 = [

    {
        courseName: "Mobile App Development",
        imgUrl: "/app-dev.svg",
        courseDescription: ["Include of CCA", "core Java/ Swift Ui", "Android / IOS", "6 month Free (1 Domain+Hosting)"],
        courseDuraton: "6",
        fees: "10000",
    },
    {
        courseName: "Computer Hardware & Networking(HNE)",
        imgUrl: "/networking.svg",
        courseDescription: ["Basic Electronic", "Fundamental of PCB tracking", "Wifi configuring", "N-Plus Networking"],
        courseDuraton: "9",
        fees: "15000",
    },
    {
        courseName: "Audio Video Editing(2D/3D Artist)",
        imgUrl: "/video.svg",
        courseDescription: ["Include of CCA", "Fundamental of Editing", "Live Project handling(wedding)", "FCP/EdiusX/premire pro"],
        courseDuraton: "6",
        fees: "15000",
    }
]

const courses3 = [
    {
        courseName: "AutoCAD Designing",
        imgUrl: "/autoCade.svg",
        courseDescription: ["Drafting+2d/3d designing"],
        courseDuraton: "6",
        fees: "8000",
    }
]

function CourseSection(props) {
    const classes = useStyles();
    return (
        <div className={classes.ourCourses}>
            <div className={classes.ourCours}>

            </div>
            <Grid>
                <Grid container >
                    {courses1.map((item) => (
                        <Grid item xs={12} sm={4}>
                            <CourseCard data={item} key={item.courseName} />
                        </Grid>
                    ))}
                </Grid>
                <Grid container >
                    {courses2.map((item) => (
                        <Grid item xs={12} sm={4}>
                            <CourseCard data={item} key={item.courseName} />
                        </Grid>
                    ))}
                </Grid>
                <Grid container >
                    {courses3.map((item) => (
                        <Grid item xs={12} sm={4}>
                            <CourseCard data={item} key={item.courseName} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </div>



    )
}

export default CourseSection