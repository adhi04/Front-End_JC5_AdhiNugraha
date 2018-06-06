import React, { Component } from 'react';
import Header from './component/Header';
import Content from './component/Content';
import Registration from './component/Registration';
import Login from './component/Login';
import Footer from './component/Footer';
import {Route} from 'react-router-dom';

class App extends Component {
  render() 
  {
    return (
      <div>
        <Header/>
        <Route exact path = "/" component = {Content} />
        <Route path = "/registration" component = {Registration} />
        <Route path = "/login" component = {Login} />
        <Footer/>
      </div>
    );
  }
}

export default App;
