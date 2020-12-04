import logo from './logo.svg';
import './App.css';

import NavBar from 'components/NavBar/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'components/Home/Home';
import UserContext  from 'contexts/UserContext/UserContext';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [groups, setGroups] = useState([]);
  const [friends, setFriends] = useState([]);
  const [isAuthenticated, setIsAutenticated] = useState(false);

  const logout = () => {
        if(!isAuthenticated) {
            throw new Error('User already logged out');
        }
        setUsername('');
        setLastname('');
        setEmail('');
        setGroups([]);
        setFriends([]);
        setIsAutenticated(false);
    };
 
    const login = () => {
        if(isAuthenticated) {
            throw new Error('User already logged in');
        }
        alert('Tout doux');
    };


  console.log('CC', UserContext);
  return (
    <>
    <UserContext.Provider value={{
            logout,
            login,
            username,
            lastname,
            email,
            groups,
            friends,
            isAuthenticated
        }}>
      <NavBar/>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path='/'
              render={ () => <Home/>}
            />
          </Switch>
        </BrowserRouter> 
      </UserContext.Provider> 
    </> 
  );
}

export default App;
