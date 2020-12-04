import { MenuItem } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import React, { useContext } from 'react';
import ScrollingMenu from "../../NavBar/ScrollingMenu";
import UserPP from "./UserPP";

import UserContext from 'contexts/UserContext/UserContext';


const Profile = () => {

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const context = useContext(UserContext);

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    return(
        <ScrollingMenu cpt1={ <UserPP letter='B' color='#B36BED'/> } cpt2={ 
        <>
            {
                context.isAuthenticated ? (
                    <>
                    <MenuItem onClick={handleClose}><AccountCircleIcon/>Profil</MenuItem>
                    <MenuItem onClick={context.logout}><PowerSettingsNewIcon/> Déconnexion</MenuItem>
                    </>
                ) : (<MenuItem onClick={context.login}><PowerSettingsNewIcon/> Connexion</MenuItem>)
            }
            
        </> }/>
    );
};

export default Profile;