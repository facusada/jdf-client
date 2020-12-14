import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import {connect} from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import { esES } from '@material-ui/core/locale';
import Login from './components/users/Login';
import Tools from './components/tools/Tools';
import Navbar from './components/modules/Navbar';
import Sidebar from './components/modules/Sidebar';
import Home from './components/home/Home';
import Customers from './components/customers/Customers';
import Orders from './components/orders/Orders'

function App() {

    const theme = createMuiTheme({
      palette: {
        primary: { main: '#2196f3' },
        secundary: { main: '#ff1744' }
      },
    }, esES);

  return (
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/home/" component={Navbar} />
      <Route path="/home/" component={Sidebar} />
      <Route exact path="/home" component={Home} /> 
      <Route exact path="/home/tools" component={Tools} />
      <Route exact path="/home/customers" component={Customers} />
      <Route exact path="/home/orders" component={Orders} />
    </div>
  );
}

export default connect(null, null)(App);
