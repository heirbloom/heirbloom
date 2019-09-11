import React from "react";
import {
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const MarketListItem = () => {
  return (
    <Col className="mb-3">
      <Card id="market-card">
        <CardBody>
          <CardTitle className="card-title">Farmers Market USA</CardTitle>
          <CardSubtitle className="card-subtitle">Hours here</CardSubtitle>
          <hr></hr>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <hr></hr>
          <Button className="card-button col-12">Show it on the map</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MarketListItem;
