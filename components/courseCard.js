import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router';
import { ArrowForward, CheckBoxRounded, CheckCircleOutline, CheckCircleOutlineOutlined } from '@material-ui/icons';
import { CardActions, Chip, Icon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  btnregister: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    float: "right",

  },
  cardChip: {
    marginTop: 10
  },
  root: {
    margin: 10,
    backgroundColor: "#eeeeee",
    "&:hover": { boxShadow: "grey" }
  },
}));


export default function CourseCard(props) {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Card className={classes.root} elevation={0}>
      <CardMedia
        component="img"
        alt={props.data.courseName}
        height="220"
        image={props.data.imgUrl}
        title={props.data.courseName}
      />


      <CardContent>
        <Typography gutterBottom variant="h6" >
          {props.data.courseName}
        </Typography>
        <Typography  color="textSecondary" component={'span'} variant="body2">
          {props.data.courseDescription.map((item) => (
            <Typography key={item} component={'p'} ><Icon style={{ color: "green",alignItems:"center" }}><CheckCircleOutline /></Icon> {item}</Typography>
            
          ))}
        </Typography>
        <Chip className={classes.cardChip} label={"Duraton " + props.data.courseDuraton + " Month" + " | " + "Fees" + " " + "NPR " + props.data.fees} color="secondary" />

        <div >
          <Button className={classes.btnregister} color="primary" onClick={() => router.push("/register")} variant="outlined" endIcon={<ArrowForward  />}>Register</Button>
        </div>
      </CardContent>
    </Card>
  );
}
