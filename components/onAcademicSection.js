import React from "react"
import "react-multi-carousel/lib/styles.css";
import { Card, CardActionArea, CardContent, Grid, makeStyles, Typography } from "@material-ui/core";

const data = [
  {
    heading: "Facilities",
    description: ["Without disturbance practical lab", "Well Manage Outlines", "Experienced Teachers", "Full speed Wi-Fi", "Computer repairing Services", "Website development for Shop/Business"]
  },
  {
    heading: "Curriculum",
    description: ["Weekend Exam Program", "Quiz Program", "Webinar", "Motivation Class"]
  },


]
const useStyles = makeStyles({
  root: {
    margin: 10,
    height: 200,
    backgroundColor: "#f5f5f5",
    // width: 500,
    marginLeft: 40
  },
  heading: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: 500
  }
});
function OnAcademicSection(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        {data.map((item) => (
          <Grid item xs={12} sm={6} key={item.heading}>
            <Card className={classes.root} elevation={0}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" className={classes.heading} >
                    {item.heading}
                  </Typography>
                  {item.description.map((item2) => (
                    <Typography variant="body2" color="textSecondary" key={item2} style={{ textAlign: "center", }}>
                      {item2}
                    </Typography>
                  ))}

                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

        ))}
      </Grid>
    </div>
  )
}

export default OnAcademicSection;