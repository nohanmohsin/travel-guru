import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../../App';

const PrivateRoute = ({children,...rest}) => {
    const [loggedInuser, setLoggedInUser] = useContext(userContext);
    
    return (
        <Route
        {...rest}
        render={({ location }) =>
          loggedInuser.name || loggedInuser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/sign-in",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;