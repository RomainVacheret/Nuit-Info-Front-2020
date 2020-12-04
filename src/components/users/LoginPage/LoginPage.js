import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon  from '@material-ui/icons/LockOutlined';

import {
    Avatar, 
    Button, 
    Checkbox, 
    Container, 
    CssBaseline, 
    FormControlLabel, 
    Grid, 
    Link, 
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

const LoginPage = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Se connecter
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Adresse email"
                        name="email"
                        autoComplete="email"
                        autoFocus
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
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Se souvenir de moi"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Se connecter
                    </Button>
                    <Grid container>
                        <Grid item xs>
                        <Link href="#" variant="body2">
                            Mot de passe oublié ?
                        </Link>
                        </Grid>
                        <Grid item>
                        <Link href="#" variant="body2">
                            {"Vous avez déjà un compte ? Se connecter"}
                        </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
  );
}

export default LoginPage;
