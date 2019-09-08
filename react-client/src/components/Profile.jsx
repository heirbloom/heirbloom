// nothing important here for the time being... just a header... need it to test authentication

import React from 'react';
import '../App.css';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';


const Profile = () => {
  return (
  <div class="bg pt-5">
    <Row className="mt-5">
      <Col
        xl={{ size: 4, offset: 7 }}
        md={{ size: 5, offset: 6 }}
        xs={{ size: 10, offset: 1 }}
        className="mt-5"
      >
        <div className="login-head">
          <h3 className="ml-3">PROFILE PAGE</h3>
        </div>
      </Col>
    </Row>
  </div>
  );
}

export default Profile;