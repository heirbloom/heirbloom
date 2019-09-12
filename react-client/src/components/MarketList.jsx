import React, { Fragment } from "react";
import MarketListItem from "./MarketListItem.jsx";
import { Container, Row, Col } from "reactstrap";
import MarketMap from "./MarketMap.jsx";
import NavBar from "./NavBar.jsx";
import ZipcodeModal from "./ZipcodeModal.jsx";

const MarketList = props => {
  // console.log('MarketList props', props.localMarkets);
  const { localMarkets, user } = props;
  const { zipcode } = props.user;

  return (
    <Fragment>
      <NavBar user={user} />
      <Container>
        <Row className="mt-10 mb-2 w-100">
          <h1 className="headline ml-3">Find a market.</h1>
        </Row>
        <Row>
          <MarketMap />
          <Col>
            <div className="ml-3 mr-3">Home Zip Code: {`${zipcode}`}</div>
            <ZipcodeModal zipcode={zipcode} />
            <hr />
            {localMarkets.map((marketInfo, index) => (
              <MarketListItem marketInfo={marketInfo} key={index} />
            ))}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default MarketList;
