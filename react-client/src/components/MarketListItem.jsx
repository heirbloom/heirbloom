import React from "react";
import { Route } from "react-router-dom";
import {
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const MarketListItem = (props) => {
  console.log('marketListItem Props!!!', props);
  const { Address, GoogleLink, Products, Schedule, marketname } = props.marketInfo;
  return (
    <Col className="mb-3">
      <Card id="market-card">
        <CardBody>
          <CardTitle className="card-title">{marketname}</CardTitle>
          <CardSubtitle className="card-subtitle">Schedule: {Schedule}</CardSubtitle>
          <hr></hr>
          <CardText>
            Address: {Address}
            <br/>
            <br/>
            Available Produce: {Products}
          </CardText>
          <hr></hr>
          <Button className="card-button col-12">Show it on the map</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MarketListItem;
