import React from 'react';

import GroupCard from 'components/groups/GroupCard/GroupCard';

import { Container,  Grid, Typography } from '@material-ui/core';

const GroupList = ({ groups }) => {
    return (
        <Container container>
            <Typography>Ensemble des groupes</Typography>
            {
                groups.map(({ name, nbSubs, nbPosts }) => (
                    <Grid item>
                        <GroupCard name= { name } nbSubs={ nbSubs } nbPosts={ nbPosts }/>
                    </Grid>
                ))
            }
        </Container>
    );
};

export default GroupList;