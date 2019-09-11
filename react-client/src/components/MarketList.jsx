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
        <Row className="mt-10 mb-2 w-100">
          <h1 className="headline ml-3">Find a market.</h1>
          <h2>Current Zip Code: {`${zipcode}`}</h2>
        </Row>
        <Row>
          <MarketMap />
          <Col md={{ size: 4, offest: 0 }}>
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
