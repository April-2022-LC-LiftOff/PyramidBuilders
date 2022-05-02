//import "./styles.css";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from '@material-ui/core' 
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
//import { Radio } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: "#2160A0",
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
  HeaderButton: {
    margin: "0 2% 0 2%",
  },
  formStyles: {
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection:'column',
    margin: '3%'
  },
  imgStyles: {
    width: '35%',
    marginLeft: '2.5%',
    borderRadius: '150px',
  },
  formInputs: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    marginBottom: '2%',
  },
  input: {
    margin: '5%',
    marginRight: '50%',
    padding: '3%',
    borderRadius:'10px',
    fontSize: '1.25rem',
},
  input2: {
    margin: '5%',
    padding: '5%',
    borderRadius:'10px',
    fontSize: '1.25rem',
    marginLeft: '5%'
  },
  textStylingInputs: {
    padding: '0',
    margin:'1%',
    marginLeft: '15%',
    color:'rgb(0, 0, 0, 60%)',
    textAlign: 'center',
  }
}));
    

export default function Profile() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            App Logo
          </Typography>
          <Button className={classes.HeaderButton} color="inherit">
            Search Bar
          </Button>

          <Button className={classes.HeaderButton} color="inherit">
            Login/Logout
          </Button>
        </Toolbar>
      </AppBar>
      <section className='profile-page'>
        <form className={classes.formStyles}>
        <div id='aviurl' className={classes.formInputs}>
          <img src=
          "https://st4.depositphotos.com/1012074/25277/v/1600/depositphotos_252773324-stock-illustration-young-avatar-face-with-sunglasses.jpg" alt='' className={classes.imgStyles} />
        </div>
        <div className={classes.formInputs}>
          <label><p className={classes.textStylingInputs}> My Username: </p>
            <input name='userName' type='text'
            className={classes.input} />
          </label>
          <label><p className={classes.textStylingInputs}>Password:</p>
            <input name='password' type='text' className={classes.input2} />
          </label>
          <label><p className={classes.textStylingInputs}>Confirm Password: </p>
            <input name='password' type='text' className={classes.input2} />
          </label>
          <label><p className={classes.textStylingInputs}>Email: </p>
            <input name='email' type='email' className={classes.input} />
          </label>
          <label><p className={classes.textStylingInputs}>About Me: </p>
            <textarea name='bio' className={classes.input2} />
          </label>
            <p className={classes.textStylingRadios}>Social Media Apps??</p>
          </div>
        </form>
      </section>
    </div>
  );
}

