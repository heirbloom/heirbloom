import React from "react";
import MarketListItem from "./MarketListItem.jsx";
import { Container, Row, Col } from "reactstrap";
import MarketMap from "./MarketMap.jsx";

const MarketList = () => {
  return (
    <Container>
      <Row className="mt-10">
        <MarketMap />
        <Col xs={{ size: 4, offest: 0 }}>
          <MarketListItem />
          <MarketListItem />
          <MarketListItem />
          <MarketListItem />
          <MarketListItem />
        </Col>
      </Row>
    </Container>
  );
};

export default MarketList;
