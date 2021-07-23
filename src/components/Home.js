import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import welcome from '../assets/welc.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 20,
    },
}));


function Home() {
    const classes = useStyles();

    return (
        <Container align="center">
            <img src={welcome}alt="welcome"></img>
            <Typography
                variant="h5"
                color="textSecondary">
                Vai al form di registrazione
            </Typography>
            <Link to="/submit" style={{textDecoration: "none"}}>
                <Button variant="contained" color="secondary"  className={classes.root}>
                    Registrati!
                </Button>
            </Link>
        </Container>
    );
}


export default Home;