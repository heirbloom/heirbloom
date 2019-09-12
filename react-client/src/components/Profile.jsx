// not much here for the time being... just a header... need it to set up routes

import React, { Fragment } from 'react';
import NavBar from "./NavBar.jsx";
import '../App.css';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';

const Profile = (props) => {
  console.log('Profile PROPS', props);
  const { username } = props.user;

  return (
    <Fragment>
      <NavBar user={props.user} />
      <div className="bg pt-5">
        <Row className="mt-5">
          <Col
            xl={{ size: 4, offset: 7 }}
            md={{ size: 5, offset: 6 }}
            xs={{ size: 10, offset: 1 }}
            className="mt-5"
          >
            <div className="login-head">
              <h3 className="ml-3">{`${username}`.toUpperCase() + "'s"} Profile Page</h3>
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}

export default Profile;