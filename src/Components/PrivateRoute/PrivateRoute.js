import React, { useContext } from 'react';
import { Redirect} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { destinationContext } from '../../App';

const PrivateRoute = ({children,...rest}) => {
    const [loginuser,setLoginUser] = useContext(destinationContext);

    return (
        <Route
        {...rest}
        render={({ location }) =>
         loginuser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;