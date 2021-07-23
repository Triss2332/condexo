import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import like from '../assets/like.png'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    pos: {
        marginBottom: 12,
    },
    container: {
        marginTop: 150,
    },
    img: {
        maxWidth: 300,
        padding: 20,
    }
});

function ThankYouPage() {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Container align="center">
                <img src={like} id="img" alt="like" style={{ alignItems:'center'}}></img>
            </Container>
            <Typography variant="h1" color="textSecondary" align="center">
                Thank You
            </Typography>
            <Typography variant="h5" color="textSecondary" component="p" align="center">
                Grazie per esserti registrato!
            </Typography>
        </Container>
        );
    }


export default ThankYouPage;