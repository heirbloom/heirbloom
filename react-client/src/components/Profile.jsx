// not much here for the time being... just a header... need it to set up routes

import React, { Fragment } from "react";
import NavBar from "./NavBar.jsx";
import "../App.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col
} from "reactstrap";

const Profile = props => {
  console.log("Profile PROPS", props);
  const { username, email, zipcode } = props.user;

  return (
    <Fragment>
      <NavBar user={props.user} />
      <div className="bg-profile pt-5">
        <Row className="mt-5">
          <Col
            xl={{ size: 4, offset: 7 }}
            md={{ size: 5, offset: 6 }}
            xs={{ size: 10, offset: 1 }}
            className="mt-5"
          >
            <div className="profile-head">
              <h3 className="ml-3 text-capitalize">
                {`${username}'s`} Profile
              </h3>
            </div>
            <div className="profile-body">
              <p>
                Username: {`${username}`}
                <br />
                Email: {`${email}`}
                <br />
                Zip Code: {`${zipcode}`}
              </p>
              <hr className="bg-white" />
              <h6>Options</h6>
              <Button className="card-button btn-block">
                Edit your profile
              </Button>

              <Button className="card-button btn-block">
                Show favorite recipes
              </Button>
              <Button className="card-button btn-block">Log Out</Button>
            </div>
            <hr />
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Profile;
