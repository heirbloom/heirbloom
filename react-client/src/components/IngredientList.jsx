import React, { Fragment } from "react";
import Ingredient from "./Ingredient.jsx";
import { Container, Row, Col, Button } from "reactstrap";
import NavBar from "./NavBar.jsx";
import HotList from "./HotList.jsx";
import { toggleHot } from "./HotList.jsx";

// this is the main page, which will display all of the regional/seasonal ingredients for the user.
const IngredientList = props => {
  const {
    user,
    ingredients,
    userLocation,
    sessionZipcode,
    handleRecipes
  } = props;
  const { city } = userLocation;
  return (
    <Fragment>
      <NavBar user={user} />
      <Container fluid>
        <Row className="mt-10 ml-1">
          <Col>
            <h1 className="headline">
              Here&rsquo;s what&rsquo;s fresh in {city}.
            <HotList />
            </h1>
            {/* <ZipcodeModal userLocation={userLocation} /> */}
          </Col>
        </Row>
        <Row className="ml-1">
          <Ingredient
            ingredients={ingredients}
            handleRecipes={handleRecipes}
            sessionZipcode={sessionZipcode}
          />
        </Row>
      </Container>
    </Fragment>
  );
};

export default IngredientList;
