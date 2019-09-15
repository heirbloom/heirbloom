import React, { Fragment } from "react";
import Ingredient from "./Ingredient.jsx";
import { Container, Row, Col } from "reactstrap";
import NavBar from "./NavBar.jsx";

// this is the main page, which will display all of the regional/seasonal ingredients for the user. 
const IngredientList = props => {
  
  const { user, ingredients, userLocation, sessionZipcode, handleRecipes } = props;
  const { city } = userLocation;
  return (
    <Fragment>
      <NavBar user={user} />
      <Container fluid>
        <Row className="mt-10 ml-1">
          <Col xs={{ size: 9 }}>
            <h1 className="headline">
              Here&rsquo;s what&rsquo;s fresh in {city}.
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
