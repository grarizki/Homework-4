import React from 'react';
import './App.css';
import Navbar from './assets/components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/status/Home';
// import Reports from './pages/Reports';
// import  from './pages/Products';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
