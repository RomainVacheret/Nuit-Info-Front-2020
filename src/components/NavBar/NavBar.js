import React from 'react';

import {AppBar, Toolbar, ListItem} from '@material-ui/core';

import FriendList from "../friends/FriendList/FriendList";
import Profile from "../users/UserPP/Profile";


const NavBar = (props) => {
    const friends = [
        { firstName: 'John', lastName: 'Doe' },
        { firstName: 'Mark', lastName: 'Smith'}
    ];

    const ListItemLink = (props_) =>  <ListItem button component="a" {...props_} />;

    return (
        <AppBar position="static" color="transparent" id="nav">
            <Toolbar  >
                <ListItemLink href="/" id="menu">
                    <img src="logo.png" id="logo" width="150" height="89"/>
                </ListItemLink>
                <FriendList friends={friends}/>
                <Profile/>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;

