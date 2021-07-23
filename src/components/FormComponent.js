import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TextField, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import clsx from 'clsx';
import Input from '@material-ui/core/Input';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    marginTop: 10,
  },
  spacingTop: {
    marginTop: 50,
  },
  submitText: {
    marginTop: 20,
    textAlign: 'center',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  forms: {
    padding: theme.spacing(1.5),
  },
  campiNonObbligatori: {
    marginTop: 45,
    fontSize: 17,
  },
  indirizzo: {
    marginTop: 15,
    fontSize: 15,
  }
}));


function FormComponent() {
  const classes = useStyles();

  //data
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  //genere
  const [gender, setGender] = React.useState('');
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  //via
  const [via, setVia] = React.useState('');
  const handleViaChange = (event) => {
    setVia(event.target.value);
  };

  //campi form
  const [nome, setNome] = useState('')
  const [cognome, setCognome] = useState('')
  const [email, setEmail] = useState('')
  const [emailConferma, setEmailConferma] = useState('')
  const [username, setUsername] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')

  //errori campi form
  const [nomeError, setNomeError] = useState(false)
  const [cognomeError, setCognomeError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [emailConfermaError, setEmailConfermaError] = useState(false)
  const [usernameError, setUsernameError] = useState(false)
  const [phoneNumberError, setphoneNumberError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  

  const handleSubmit = (evt) => {
    evt.preventDefault() //non esce l'errore appena apri la pagina e i campi sono vuoti
    setNomeError(false)
    setCognomeError(false)
    setEmailError(false)
    setEmailConfermaError(false)
    setUsernameError(false)
    setphoneNumberError(false)
    setPasswordError(false)
    

    if (nome === '' && cognome === '' && email === '' && emailConferma === '' && username === '' && phoneNumber === ''
      && password === '') {
      setNomeError(true)
      setCognomeError(true)
      setEmailError(true)
      setEmailConfermaError(true)
      setUsernameError(true)
      setphoneNumberError(true)
      setPasswordError(true)
    }


    if (nome && cognome && email === emailConferma && username && phoneNumber && password) {
      window.location.replace('/thankyou')
    } else {
      alert('Compila i campi obbligatori!')
    }

  }

  return (
    <Container maxWidth="md">
      <Typography
        className={classes.submitText}
        variant="h5"
        color="textSecondary">
        Form di registrazione
      </Typography>

      <form noValidate autoComplete="off" className={classes.root} onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth id="nome" label="Nome" placeholder="Nome"
              required
              onChange={(evt) => setNome(evt.target.value)}
              error={nomeError}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth id="cognome" label="Cognome" placeholder="Cognome"
              required
              onChange={(evt) => setCognome(evt.target.value)}
              error={cognomeError}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth id="username" label="Username" placeholder="Username"
              required
              onChange={(evt) => setUsername(evt.target.value)}
              error={usernameError}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth id="phone" label="Numero di telefono" placeholder="Numero di telefono" 
              required
              onChange={(evt) => setPhoneNumber(evt.target.value)}
              error={phoneNumberError}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} fullWidth>
          <Grid item xs={12} sm={6}>
            <TextField id="email" label="Email" placeholder="Email"
              type="email"
              fullWidth
              required
              onChange={(evt) => setEmail(evt.target.value)}
              error={emailError}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="emailConferma" label="Conferma Email" placeholder="Conferma Email"
              type="email"
              fullWidth
              required
              onChange={(evt) => setEmailConferma(evt.target.value)}
              error={emailConfermaError}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} >
            <FormControl className={clsx(classes.margin, classes.textField)} fullWidth>
              <InputLabel htmlFor="standard-adornment-password">Password*</InputLabel>
              <Input
                id="password"
                type="password"
                onChange={setPassword}
                required
                error={passwordError}         
              />
            </FormControl>
          </Grid>
        </Grid>


        <Typography
          className={classes.campiNonObbligatori}
          variant="h6"
          color="textSecondary">
          Campi non obbligatori:
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                fullWidth
                margin="normal"
                id="date-picker-dialog"
                label="Data di nascita"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel id="demo-simple-select-label">Genere</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                onChange={handleGenderChange}
              >
                <MenuItem value={10}>Maschio</MenuItem>
                <MenuItem value={20}>Femmina</MenuItem>
                <MenuItem value={30}>Altro</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Typography
          className={classes.indirizzo}
          variant="h6"
          color="textSecondary">
          Indirizzo:
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={4} sm={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Via/Piazza</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={via}
                onChange={handleViaChange}
              >
                <MenuItem value={10}>Via</MenuItem>
                <MenuItem value={20}>Viale</MenuItem>
                <MenuItem value={30}>Piazza</MenuItem>
                <MenuItem value={40}>Largo</MenuItem>
                <MenuItem value={50}>Strada</MenuItem>
                <MenuItem value={60}>Vicolo</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4} sm={6}>
            <TextField fullWidth id="indirizzo" label="Indirizzo" placeholder="Scrivi l'indirizzo" />
          </Grid>
          <Grid item xs={4} sm={2}>
            <TextField fullWidth id="civico" label="Civico" placeholder="N. Civico" type="number" />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
            <TextField fullWidth id="cap" label="CAP" placeholder="CAP" type="number" /> 
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField fullWidth id="città" label="Città" placeholder="Città" />
          </Grid>
          <Grid item xs={6} sm={2}>
            <TextField fullWidth id="provincia" label="Prov." placeholder="(RM)" />
          </Grid>
          <Grid item xs={6} sm={4}>
            <TextField fullWidth id="stato" label="Stato" placeholder="Stato" />
          </Grid>
        </Grid>

        <Button className={classes.spacingTop} variant="contained" color="secondary"
          type="submit">
          Invia
        </Button>

      </form>

    </Container>
  )
}

export default FormComponent;