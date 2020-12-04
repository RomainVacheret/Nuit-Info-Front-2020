import React, { useContext } from 'react';

import {AppBar, Toolbar, ListItem} from '@material-ui/core';

import FriendList from "../friends/FriendList/FriendList";
import Profile from "../users/UserPP/Profile";
import UserContext from 'contexts/UserContext/UserContext';

import './NavBar.css';

const NavBar = (props) => {
    const friends = [
        { firstName: 'John', lastName: 'Doe' },
        { firstName: 'Mark', lastName: 'Smith'}
    ];

    const value = useContext(UserContext);
    console.log('Context', value);
    // const toto = (<UserContext.Consumer>
    //             {value => console.log('vv', value)}
    //             </UserContext.Consumer>);

    const ListItemLink = (props_) =>  <ListItem button component="a" {...props_} />;

    return (
        <AppBar position="static" id="navbar">
            
            <Toolbar  >
                <ListItemLink href="/" className="menu">
                    <img src="logo.png" id="logo" width="150" height="89"/>
                </ListItemLink>
                <FriendList friends={friends}/>
                <Profile/>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;

