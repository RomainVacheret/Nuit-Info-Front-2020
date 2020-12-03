import React, { useState } from 'react';
import { MenuItem } from "@material-ui/core";
import UserPP from "./UserPP";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import ScrollingMenu from "../../NavBar/ScrollingMenu";


const Profile = () => {

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);


    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };


    return(
        <ScrollingMenu cpt1={ <UserPP letter='B' color='#B36BED'/> } cpt2={ <>
            <MenuItem onClick={handleClose}><AccountCircleIcon/>Profil</MenuItem>
            <MenuItem onClick={handleClose}><PowerSettingsNewIcon/> Déconnexion</MenuItem>
        </> }/>
    );
};

export default Profile;