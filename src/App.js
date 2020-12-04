import logo from './logo.svg';
import './App.css';

import NavBar from 'components/NavBar/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'components/Home/Home';

const groups = [
  'Un', 'Deux', 'Trois'
];

function App() {

  return (
    <>
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
    </> 
  );
}

export default App;
