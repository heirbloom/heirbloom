import React from "react";
import { Route } from "react-router-dom";
import {
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const MarketListItem = props => {
  const {
    Address,
    GoogleLink,
    Products,
    Schedule,
    marketname
  } = props.marketInfo;
  //If the schedule is just 3 <br> tags and there are no products, render the component without those sections
  if (Schedule.length === 16 && !Products.length) {
    return (
      <Col className="mb-3">
        <Card id="market-card">
          <CardBody className="bg-light">
            <CardTitle className="card-title">
              {marketname.slice(marketname.indexOf(" "))}
            </CardTitle>
            <hr></hr>
            <CardText>
              Address: {Address}
              <br />
            </CardText>
            <hr></hr>
            <Button className="card-button col-12">Show it on the map</Button>
          </CardBody>
        </Card>
      </Col>
    );
  } else if (Schedule.length === 16) {
    return (
      <Col className="mb-3">
        <Card id="market-card">
          <CardBody className="bg-light">
            <CardTitle className="card-title">
              {marketname.slice(marketname.indexOf(" "))}
            </CardTitle>
            <hr></hr>
            <CardText>
              Address: {Address}
              <br />
              <br />
              Available Produce: {Products}
            </CardText>
            <hr></hr>
            <Button className="card-button col-12">Show it on the map</Button>
          </CardBody>
        </Card>
      </Col>
    );
  } else if (!Products.length) {
    return (
      <Col className="mb-3">
        <Card id="market-card">
          <CardBody className="bg-light">
            <CardTitle className="card-title">
              {marketname.slice(marketname.indexOf(" "))}
            </CardTitle>
            <CardSubtitle className="card-subtitle">
              Schedule: {Schedule.slice(0, -16)}
            </CardSubtitle>
            <hr></hr>
            <CardText>
              Address: {Address}
              <br />
            </CardText>
            <hr></hr>
            <Button className="card-button col-12">Show it on the map</Button>
          </CardBody>
        </Card>
      </Col>
    );
  } else {
    return (
      <Col className="mb-3">
        <Card id="market-card">
          <CardBody className="bg-light">
            <CardTitle className="card-title">
              {marketname.slice(marketname.indexOf(" "))}
            </CardTitle>
            <CardSubtitle className="card-subtitle">
              Schedule: {Schedule.slice(0, -16)}
            </CardSubtitle>
            <hr></hr>
            <CardText>
              Address: {Address}
              <br />
              <br />
              Available Produce: {Products}
            </CardText>
            <hr></hr>
            <Button className="card-button col-12">Show it on the map</Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
};

export default MarketListItem;
