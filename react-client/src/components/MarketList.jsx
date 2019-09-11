import React, { Fragment } from "react";
import MarketListItem from "./MarketListItem.jsx";
import { Container, Row, Col } from "reactstrap";
import MarketMap from "./MarketMap.jsx";
import NavBar from './NavBar.jsx';

const MarketList = (props) => {
  const { username, email, zipcode } = props.user;
  console.log('MarketList', [ username, email, zipcode ]);

  return (
    <Fragment>
      <NavBar user={props.user} />
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
    </Fragment>
  );
};

export default MarketList;
