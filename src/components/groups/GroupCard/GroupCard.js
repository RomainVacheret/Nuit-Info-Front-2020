import React from 'react';

import { Card, Grid, CardActionArea, Container, Typography } from '@material-ui/core';

const GroupCard = ({ name, nbSubs, nbPosts }) =>  {
    return (
        <Card style={{ maxWidth: '200px', background: '#85ffc6',
         }}>
            <CardActionArea>
                <Container container>
                    <Typography variant='h5' style={{ textDecoration: 'underline' }}>{ name }</Typography>
                    <Grid container direction='column' justify="space-evenly">
                        <Typography>{ nbSubs } abonnés</Typography>
                        <Typography>{ nbPosts } postes </Typography>
                    </Grid>
                </Container>
            </CardActionArea>
        </Card>
        
    );
};

export default GroupCard;