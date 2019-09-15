import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = props => {
  // destructure the properties passed down from App component
  const {
    // these are needed for auth; setAuth is the setAuthentication function
    path,
    isAuthenticated,
    component: Component,
    setAuth,
    // these are the non-auth functions being passed down
    getFavRecipes,
    handleRecipes,
    addToFavorites,
    handleUserUpdate,
    removeFromFavorites,
    // state props being passed down
    user,
    recipes,
    ingredients,
    userLocation,
    localMarkets,
    favRecipes,
    sessionZipcode
  } = props;

  return (
    // render the private route dynamically
    <Route
      exact
      path={path}
      render={routeProps => {
        const { isLoggedIn } = routeProps.location.state || {};
        // if user is logged in and has a token but isn't authenticated
        if (
          isLoggedIn &&
          !!sessionStorage.getItem("token") &&
          !isAuthenticated
        ) {
          // call setAuth to set isAuthenticated to true and persist their authentication
          setAuth(isLoggedIn);
        }
        // else, if they are authenticated, pass down the user info to whatever component they visit
        // otherwise (meaning they aren't authenticated), redirect them to home
        // NOTE: If you wanna pass down a prop to a PrivateRoute component, pass it here first!!!
        //       (also destructure it above to keep things uniform)
        return isAuthenticated ? (
          <Component
            user={user}
            handleUserUpdate={handleUserUpdate}
            handleRecipes={handleRecipes}
            getFavRecipes={getFavRecipes}
            addToFavorites={addToFavorites}
            localMarkets={localMarkets}
            recipes={recipes}
            favRecipes={favRecipes}
            ingredients={ingredients}
            userLocation={userLocation}
            sessionZipcode={sessionZipcode}
            removeFromFavorites={removeFromFavorites}
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
