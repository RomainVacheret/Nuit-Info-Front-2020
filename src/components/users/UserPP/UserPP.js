import React from 'react';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    svg: {
        width: 70,
        height: 70,
        stroke: 'black',
        strokeWidth: 5,
    },
    letter: {
        fontSize: '40px',
        strokeWidth: 2,
    },
    circle: {
        fontSize: '13px',
        stroke: 'black',
        strokeWidth: 3
    }
});

const UserPP = ({ letter, color }) => {
    const classes = useStyles(); 
    letter = letter.toUpperCase();
    return (
        <svg x='0' y='0' className={ classes.svg }>
            <circle cx="32" cy="32" r="30" className = { classes.circle } fill={ color } />
            <text x='20' y='45' className={ classes.letter }> { letter }</text>
        </svg>
    );
};

export default UserPP;