import Login from "./pages/login/Login";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Logout from "./pages/status/Logout";
import TransaksiPage from "./pages/transaksi/TransaksiPage";
import AuthorizedRoute from "./AuthorizedRoute";
import RestrictedWrapper from "./RestrictedWrapper";
import { AuthorizedContextProvider } from "./AuthorizedContext";

function App() {
  return (
    <AuthorizedContextProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <RestrictedWrapper>
              <Login />
            </RestrictedWrapper>
          </Route>
          <AuthorizedRoute path="/transaksi" exact component={TransaksiPage}></AuthorizedRoute>
          <Route path="/signout" exact component={Logout} />
          <AuthorizedRoute path="/home" exact component={Home}></AuthorizedRoute>
        </Switch>
      </Router>
    </AuthorizedContextProvider>
  );
}

export default App;
