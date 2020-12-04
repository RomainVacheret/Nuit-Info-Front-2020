import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
    Button, 
    Container, 
    CssBaseline, 
    TextField, 
    Typography, 
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
        width: '100%', 
        marginTop: theme.spacing(1),
    },
        submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const CreateAccount = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Se créer un compte
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="firstname"
                        label="Prénom"
                        name="firstname"
                        autoComplete="firstname"
                        
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="lastname"
                        label="Nom"
                        name="lastname"
                        autoComplete="lastname"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="pseudo"
                        label="Pseudo"
                        name="pseudo"
                        autoComplete="pseudo"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Adresse email"
                        name="email"
                        autoComplete="email"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Mot de passe"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        S'inscrire
                    </Button>
                </form>
            </div>
        </Container>
  );
}

export default CreateAccount;
