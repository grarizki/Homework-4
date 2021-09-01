import React from 'react';
import './App.css';
import Navbar from './assets/components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/status/Home';
import Logout from './pages/status/Logout';
import Transaksi from './pages/status/Transaksi';
import './pages/status/Transaksi.css';
// import Transactions from './pages/status/Transactions';
// import Reports from './pages/Reports';
// import  from './pages/Products';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/transaksi' exact component={Transaksi} />
          <Route path='/signout' exact component={Logout} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
