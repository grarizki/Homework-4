import React from "react";
import { Route, useHistory } from "react-router-dom";
import { useAuthorizedContext } from "./AuthorizedContext";

const AuthorizedRoute = (props) => {
  const { isLoggedIn } = useAuthorizedContext();
  const history = useHistory();

  React.useEffect(() => {
    if (!isLoggedIn) {
      history.push("/");
    }
  }, [isLoggedIn, history]);

  return <Route {...props} />;
};

export default AuthorizedRoute;