import React from 'react';

import GroupCard from 'components/groups/GroupCard/GroupCard';

import { Container,  Grid, Typography } from '@material-ui/core';

import './GroupList.css';

const GroupList = ({ groups }) => {
    return (
        <Container container>
            <Typography className='Titre_Groupe' variant='h4'>Ensemble des groupes</Typography>
            <br/>
            <Grid container justify='space-evenly'>
                {
                    groups.map(({ name, nbSubs, nbPosts }) => (
                        <Grid item className='Group_Grid' justify={"space-around"}>
                            <GroupCard name= { name } nbSubs={ nbSubs } nbPosts={ nbPosts }/>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default GroupList;