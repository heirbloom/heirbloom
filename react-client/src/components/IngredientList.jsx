import React from "react";
import Ingredient from "./Ingredient.jsx";
import { Container, Row } from "reactstrap";

const IngredientList = props => {
  return (
    <Container fluid>
      <Row className="mt-5">
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
      </Row>
    </Container>
  );
};

export default IngredientList;
