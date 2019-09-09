import React from "react";
import Ingredient from "./Ingredient.jsx";
import { Container, Row } from "reactstrap";

const IngredientList = props => {
  return (
    <Container fluid>
      <Row>
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
      </Row>
    </Container>
  );
};

export default IngredientList;
