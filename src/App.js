import React, { createContext, useState } from 'react';

import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './components/Booking-page/Booking';
import SignIn from './components/Auth/SignIn';
import PrivateRoute from './components/hotels/PrivateRoute';
import Hotels from './components/hotels/Hotels';


export const userContext = createContext();
function App() {
  const [loggedInuser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value= {[loggedInuser, setLoggedInUser]}>
    <Router>
      
        <Switch>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path="/home/:name">
            <Home></Home>
          </Route>
          <Route path="/booking/:pname">
            <Booking></Booking>
          </Route>
          <Route path="/sign-in"><SignIn></SignIn></Route>
          <PrivateRoute path="/hotels/:name"><Hotels></Hotels></PrivateRoute>
          
        </Switch>
        
      
      
    </Router>
    </userContext.Provider>
  );
}

export default App;
