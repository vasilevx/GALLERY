import React, { useState, useContext } from 'react';
import MainContext from './MainContext';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);

    const context = useContext(MainContext);

    const validateEmail = (email) => {
        const isValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return isValid.test(email);
    }

    const doAuth = () => {
        let users = getUsersFromStorage();
        
        for(let user of users) {
            if(user.email === email) {
                if (user.password === password) {
                    context.toggleUserEmail(email);
                    context.toggleAuth();
                    return;
                } else {
                    setIsValidEmail(false);
                    setIsValidPassword(false);
                    return;
                }
            }
        }

        addUserToStorage();
        context.toggleUserEmail(email);
        context.toggleAuth();
    }

    const getUsersFromStorage = () => {
        let users = JSON.parse(localStorage.getItem('users'));
        return users ? users : [];
    }

    const addUserToStorage = () => {
        let newUsers = getUsersFromStorage();
        newUsers.push({
            email: email,
            password: password
        });
        localStorage.setItem('users', JSON.stringify(newUsers));
    }

    return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                  Вход в аккаунт
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Ваш E-mail"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  error={!isValidEmail}
                  onChange={(event) => {
                      setEmail(event.target.value);

                      if(validateEmail(event.target.value)) {
                        setIsValidEmail(true);
                      } else {
                        setIsValidEmail(false);
                      }
                    }}
                    
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={!isValidPassword}
                  onChange={(event) => {
                    setPassword(event.target.value);

                    if(event.target.value.length === 0) {
                      setIsValidPassword(false);
                    } else {
                      setIsValidPassword(true);
                    }
                  }}
                />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={!isValidEmail || !isValidPassword}
                  onClick={doAuth}
                >
                  Вход
                </Button>
              </form>
            </div>
          </Container>
    );
}




























