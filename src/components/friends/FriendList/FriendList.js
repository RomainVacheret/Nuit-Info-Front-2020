import React, { useState } from 'react';

import { Container, Menu, MenuItem, IconButton, Typography } from '@material-ui/core';

import './FriendList.css';

const FriendList = ({ friends }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    
    return (
        <Container container>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup='true'
                onClick={ handleClick }
            >
            <h1>Click me</h1>
            </IconButton>
            <Menu
                className='friendlist-menu'
                anchorEl={ anchorEl }
                keepMounted
                open={ open }
                onClose={ handleClose }
            >
                {
                    friends.map((friend, idx) => (
                        <MenuItem
                            className='friendlist-menu-item'
                            key={ idx }
                            onClick={ handleClose }
                        >
                            <Typography>
                                {`${ friend.firstName } ${ friend.lastName }`}
                            </Typography>
                        </MenuItem>
                    ))
                }
            </Menu>
        </Container>
    );
};

export default FriendList;