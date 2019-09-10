import React from "react";
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const Ingredient = props => {
  return (
    <Col
      xl={{ size: 3, offset: 0 }}
      md={{ size: 4, offset: 0 }}
      xs={{ size: 10, offset: 1 }}
      className="mt-5"
    >
      <Card id="ingredient-card">
        <CardImg
          top
          width="100%"
          src="https://media.daysoftheyear.com/20171223115009/strawberry-day1.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle className="card-title">Strawberries</CardTitle>
          <CardSubtitle className="card-subtitle">
            Strawberries are in season
          </CardSubtitle>
          <hr></hr>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <hr></hr>
          <Button className="card-button col-12">Where to find them</Button>
          <Button className="card-button col-12">How to prepare them</Button>
          <Button className="card-button col-12">Add to recipe</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Ingredient;
