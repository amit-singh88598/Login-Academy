import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ArrowForward } from "@material-ui/icons";
import { Grid, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "#f5f5f5",
    padding: 20,
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
  TextField: {
    marginTop: 20,
    marginBottom: 20,
  },
  contantFormBtn: {
    marginTop: 20,
    padding: 10,
  }

});

function ContactUs() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid container >
      <Grid item xs={12} sm={6}>
        <Card className={classes.root} elevation={0}>
          <Grid container>
            <Grid item xs={12} sm={12}>
              <TextField label="Full Name" id="outlined-basic" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField label="Email" id="outlined-basic" variant="outlined" fullWidth className={classes.TextField} />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField label="Mobile" id="outlined-basic" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button size="small" color="primary" variant="contained" fullWidth className={classes.contantFormBtn}>Get In Touch</Button>
            </Grid>

          </Grid>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img src="/autoCade.svg" height="290" />
      </Grid>
    </Grid>

  );
}

export default ContactUs