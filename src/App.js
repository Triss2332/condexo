import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './components/Home'
import FormComponent from './components/FormComponent';
import ThankYouPage from './components/ThankYouPage';

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


function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" style={{textDecoration:'none', color:"white"}}>
                BB
              </Link>
            </Typography>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <Link to="/" style={{textDecoration:'none', color:"white"}}>
                <HomeIcon />
              </Link>
            </IconButton>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <Link to="/submit" style={{textDecoration:'none', color:"white"}}>
                <AccountCircle />
              </Link>
            </IconButton>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/submit">
            <FormComponent />
          </Route>
          <Route path="/thankyou">
           <ThankYouPage /> 
          </Route>
        </Switch>

      </div>
    </Router>
  );
}


export default App;
