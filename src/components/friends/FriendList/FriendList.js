import React, { useState } from 'react';
import GroupIcon from '@material-ui/icons/Group';

import {
    MenuItem,
    Typography
} from '@material-ui/core';
import ScrollingMenu from "../../NavBar/ScrollingMenu";


const FriendList = ({ friends }) => {

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

// return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <>
            <ScrollingMenu cpt1={ (<><GroupIcon /> Amis</>) } cpt2=
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
            }/>
        </>
    );
};

export default FriendList;