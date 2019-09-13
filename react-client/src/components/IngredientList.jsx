import React, { Fragment } from "react";
import Ingredient from "./Ingredient.jsx";
import { Container, Row, Col } from "reactstrap";
import NavBar from "./NavBar.jsx";
import ZipcodeModal from "./ZipcodeModal.jsx";

const IngredientList = props => {
  const { user, ingredients, userLocation, sessionZipcode } = props;
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
            <ZipcodeModal userLocation={userLocation} />
          </Col>
        </Row>
        <Row className="ml-1">
          <Ingredient
            ingredients={ingredients}
            sessionZipcode={sessionZipcode}
          />
        </Row>
      </Container>
    </Fragment>
  );
};

export default IngredientList;
