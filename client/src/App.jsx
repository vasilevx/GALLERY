import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { makeStyles } from '@material-ui/core/styles';

import MainContext from './MainContext';
import SignIn from './SignIn';
import Account from './Account';

const useStyles = makeStyles(theme => ({
	paper: {
	  position: 'absolute',
	  width: 400,
	  backgroundColor: theme.palette.background.paper,
	  boxShadow: theme.shadows[5],
	  padding: theme.spacing(4),
	  outline: 'none',
	},
  }));

export default function App() {
	const [isAuth, setIsAuth] = useState(false);
	const [userEmail, setUserEmail] = useState(null);
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const toggleAuth = () => {
		setIsAuth(!isAuth);
	}

	const toggleUserEmail = (userEmail) => {
		setUserEmail(userEmail);
	}

	const toggleDialogOpen = () => {
		setIsDialogOpen(!isDialogOpen);
	}

	const handleClose = () => {
		
	}




	const classes = useStyles();
	
    return (
		<MainContext.Provider value={{ toggleAuth, userEmail, toggleUserEmail, toggleDialogOpen }}>
			{isAuth ? <Account /> : <SignIn />}

			  <Dialog open={isDialogOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Новая галерея</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Чтобы создать новую галерею, нужно заполнить все поля ниже.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Название галереи"
            type="text"
            fullWidth
          />

<TextField
margin="dense"
label="Описание галереи"
id="description"
  multiline={true}
  rows={5}
  rowsMax={50}
  fullWidth
/>

<Button

  variant="contained"
  component="label"
  fullWidth
>
  Upload File
  <input
    type="file"
    style={{ display: "none" }}
  />
</Button>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отменить
          </Button>
          <Button onClick={handleClose} color="primary">
            Создать
          </Button>
        </DialogActions>
      </Dialog>



		</MainContext.Provider>
    );
}






































  	// componentDidMount() {
    // 	fetch('/users')
    //   	.then(res => res.json())
    //   	.then(users => this.setState({ users }));
  	// }

  	// render() {
    // 	return (
	// 		<div className="App">
    // 			<h1>Users</h1>
    //     		{this.state.users.map(user =>
    //       			<div key={user.id}>{user.username}</div>
    //     		)}
    //   		</div>
    // 	);
  	// }



