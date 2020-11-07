import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const navLinks = [
  {
    href: "/",
    name: "Home"
  },
  {
    href: "/about",
    name: "About"
  },
  {
    href: "/courses",
    name: "Courses"
  },
  {
    href: "/register",
    name: "Register"
  }
]

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/home">

            <IconButton

              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              {/* <MenuIcon /> */}
              <img src="/login-acadmic.svg" width="150" height="60" style={{ marginTop: 5, marginBottom: 5, }} />
            </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
            {""}
          </Typography>
          {navLinks.map((item) => (
            <Link href={item.href} key={item.name}>
              <Button color="inherit" > {item.name}</Button>
            </Link>
          ))}

        </Toolbar>
      </AppBar>

    </div>
  );
}
