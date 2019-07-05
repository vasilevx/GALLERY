import React, { useState, useContext } from 'react';
import MainContext from './MainContext';
import GalleriesList from './GalleriesList';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));



export default function Account() {
  const classes = useStyles();

  const [isGalleryEmpty, setIsGalleryEmpty] = useState(true);
  const context = useContext(MainContext);



  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Фотогалерея
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Фотогалерея пользователя {context.userEmail}
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={3} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={context.toggleDialogOpen}>
                    Создать новую галерею
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" onClick={context.toggleAuth}>
                    Выйти из аккаунта
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>


        { isGalleryEmpty ? 'НЕТ НИ ОДНОЙ ГАЛЕРЕИ' : <GalleriesList classes={classes} /> }



        


      </main>
    </React.Fragment>
  );
}