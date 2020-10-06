import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AllWork from './components/AllWork/AllWork';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path = "/home">
              <Home/>
            </Route>
            
            <PrivateRoute path = "/register">
              <Register/>
            </PrivateRoute>
            <Route path = "/login">
              <Login/>
            </Route>
            <Route path = "/allWork">
              <AllWork/>
            </Route>

            <Route exact path = "/">
            <Home/>
          </Route>
          <Route path = "*">
            <NoMatch/>
          </Route>
            </Switch>
        </Router>  
      </UserContext.Provider>
  );
}

export default App;
