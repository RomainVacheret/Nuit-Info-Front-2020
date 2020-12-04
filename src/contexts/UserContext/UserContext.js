import React, { createContext, useState } from 'react';

const UserContext = createContext(null);
export default UserContext;

// const UserContextProvider = (props) => {
//     const [username, setUsername] = useState('');
//     const [lastname, setLastname] = useState('');
//     const [email, setemail] = useState('');
//     const [groups, setGroups] = useState([]);
//     const [friends, setFriends] = useState([]);
//     const [isAuthenticated, setIsAutenticated] = useState(false);
    
//     const logout = () => {
//         if(!isAuthenticated) {
//             throw new Error('User already logged out');
//         }
//         alert('Tout doux');
//     };

//     const login = () => {
//         if(isAuthenticated) {
//             throw new Error('User already logged in');
//         }
//         alert('Tout doux');
//     };

//     return (
//         <UserContext.Provider value={{
//             logout,
//             login,
//             username,
//             lastname,
//             email,
//             groups,
//             friends,
//             isAuthenticated
//         }}>
//             { props.children }
//         </UserContext.Provider>
//     );
// };

// export default UserContextProvider;