import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toggleButton: {
    
    [theme.breakpoints.between('sm','xl')]: {
      display:'none'
    },
  },
  navLink: {
    [theme.breakpoints.down('sm')]:{
      display: 'none'
    }
  },
  title: {
    flexGrow: 1,
  },
  sidebar:{
   
    backgrounColor: theme.palette.primary.main
  }
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
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = ()=> {
    if(open==true){
      setOpen(false);
    }
    else{

      setOpen(true);
    }
  };

  const list = () => (
    <div
      role="presentation"
      className={classes.sidebar}
    >
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.name}>
            <Link href={item.href} key={item.name}>
              <Button color="inherit" > {item.name}</Button>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );


  return (
    <div >
          <SwipeableDrawer
            anchor="right"
            open={open}
            onClose={()=>setOpen(false)}
            onOpen={()=>setOpen(true)}
             className={classes.sidebar}
          >
           {list()}
          </SwipeableDrawer>


      <AppBar position="static">
        <Toolbar>
          <Link href="/">
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
         <div className={classes.navLink}>
            {navLinks.map((item) => (
            <Link href={item.href} key={item.name}>
              <Button color="inherit" > {item.name}</Button>
            </Link>
          ))}
         </div>
          <IconButton
              edge="start"
              className={classes.toggleButton}
              onClick={toggleDrawer}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
        </Toolbar>
      </AppBar>

    </div>
  );
}
