import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';

const App = () => {
  return (
    <>
      <Navbar/>
      <Route exact path="/">
      <Home/>
      </Route>
     
      <Route path="/login">
      <Login/>
        </Route>
     
      <Route path="/signup">
      <Signup/>
        </Route>
    
    </>
  )
}

export default App