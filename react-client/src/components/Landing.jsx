// not much here for the time being... just a header... need it to test authentication
// logged-in user's should re-direct here

import React, { Fragment } from 'react';
import NavBar from "./NavBar.jsx";
import '../App.css';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';


const Landing = (props) => {
  const { username, email, zipcode } = props.user;
  console.log('LANDING', [username, email, zipcode]);

  return (
    <Fragment>
      <NavBar user={props.user}/>
      <div className="bg pt-5">
      <Row className="mt-5">
      <Col
        xl={{ size: 4, offset: 7 }}
        md={{ size: 5, offset: 6 }}
        xs={{ size: 10, offset: 1 }}
        className="mt-5"
      >
        <div className="login-head">
          <h3 className="ml-3">Landing Page</h3>
        </div>
      </Col>
    </Row>
  </div>
  </Fragment>
  );
}

export default Landing;