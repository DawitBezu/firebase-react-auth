import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./fire.js";
import { AuthContext } from "./Auth.js";

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



const Login = ({ history }) => {
  const classes = useStyles();

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    
    <Container component="main" maxWidth="xs">
     
      <CssBaseline />
    <div className={classes.paper}>
      
      <Typography component="h1" variant="h5">
          Sign In
        </Typography> 
        <br/>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleLogin}>
        <Grid container spacing={2}>

          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                autoFocus
              />
          </Grid>
          
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="password"
                name="password"
                type="password"
                autoComplete="current-password"
              />
          </Grid>
          
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit">Log in
              </Button>
        </Grid>
      </form>

      </div>
    </Container>
  );
};

export default withRouter(Login);