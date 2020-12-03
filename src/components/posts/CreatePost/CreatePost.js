import React from 'react';
import { 
    Container, 
    Grid, 
    TextField, 
    Typography, 
    Select, 
    MenuItem, 
    TextareaAutosize,
    Button
} from '@material-ui/core';
/*
    - name
    - author
    - content
    - group
*/
const CreatePost = ({ groups }) => {

    const handleClick = () =>  alert('Tout doux');

    return (
        <Container container>
            <Grid container>
                <Grid>
                    <Typography>Titre</Typography>
                    <TextField/>
                </Grid>
                <Grid>
                    <Typography>Contenu</Typography>
                    <TextareaAutosize/>
                </Grid>
                <Grid>
                    <Select>
                        {
                            groups.map(group =>  <MenuItem value={ group }>{ group }</MenuItem>)
                        }
                    </Select>
                </Grid>
            </Grid>
            <Button onClick={ handleClick }>Valider</Button>
        </Container>
    );
};

export default CreatePost;