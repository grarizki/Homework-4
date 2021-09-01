import Login from "./pages/login/Login"
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Logout from './pages/status/Logout';
import Transaksi from './pages/transaksi/Transaksi'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/home' exact component={Home} />
          <Route path='/transaksi' exact component={Transaksi} />
          <Route path='/signout' exact component={Logout} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
