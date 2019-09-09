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
      xl={{ size: 4, offset: 1 }}
      md={{ size: 4, offset: 0 }}
      xs={{ size: 10, offset: 1 }}
      className="mt-5"
    >
      <Card inverse color="primary">
        <CardImg
          top
          width="100%"
          src="https://media.daysoftheyear.com/20171223115009/strawberry-day1.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Strawberries</CardTitle>
          <CardSubtitle>Strawberries are in season</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Where to find them</Button>
          <Button>How to eat them</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Ingredient;
