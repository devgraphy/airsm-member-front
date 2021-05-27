import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import Signin from './Signin';
import Signup from './Signup';

export default function App(){
  return(
    <BrowserRouter>
      <Route path="/" component={Home} exact/>
      <Route path="/signin" component={Signin}/>
      <Route path="/signup" component={Signup}/>
    </BrowserRouter>
  );
}