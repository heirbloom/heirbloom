import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = props => {
  // extract the properties passed down from App component
  const {
    path,
    isAuthenticated,
    component: Component,
    setAuth,
    user,
    recipes,
    ingredients,
    userLocation,
    localMarkets,
    marketCoordinates,
    sessionZipcode
  } = props;
  return (
    // render the private route dynamically
    <Route
      exact
      path={path}
      render={routeProps => {
        const { isLoggedIn } = routeProps.location.state || {};
        // if user is logged in, has a token but isn't authenticated
        if (
          isLoggedIn &&
          !!sessionStorage.getItem("token") &&
          !isAuthenticated
        ) {
          // call setAuth to set isAuthenticated to true and persist their authentication
          setAuth(isLoggedIn);
        }
        // else, if they are authenticated, pass down the user info to whatever component they visit
        // otherwise (menaing they aren't authenticated), redirect them to home
        return isAuthenticated ? (
          <Component
            user={user}
            localMarkets={localMarkets}
            recipes={recipes}
            ingredients={ingredients}
            userLocation={userLocation}
            marketCoordinates={marketCoordinates}
            sessionZipcode={sessionZipcode}
            {...routeProps}
          />
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};

export default PrivateRoute;
