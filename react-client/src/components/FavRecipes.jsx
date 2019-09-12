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
  Col,
  Table,
  Container
} from "reactstrap";

const FavRecipes = props => {
  const { username } = props.user;

  return (
    <Fragment>
      <NavBar user={props.user} />
      <Container>
        <Row className="mt-10 position-relative">
          <Col>
            <h5>{`${username}'s favorite recipes`}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table>
              <thead>
                <tr>
                  <th>Recipe</th>
                  <th>Link</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Strawberry Shortcake</td>
                  <td>
                    <Button size="sm" color="success">
                      Click to view
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="white"
                      className="far fa-heart float-right"
                    ></Button>
                  </td>
                </tr>
                <tr>
                  <td>Strawberry Ice Cream</td>
                  <td>
                    <Button size="sm" color="success">
                      Click to view
                    </Button>
                  </td>{" "}
                  <td>
                    <Button
                      color="white"
                      className="far fa-heart float-right"
                    ></Button>
                  </td>
                </tr>
                <tr>
                  <td>Strawberry Rhubarb Pie</td>
                  <td>
                    <Button size="sm" color="success">
                      Click to view
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="white"
                      className="far fa-heart float-right"
                    ></Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default FavRecipes;
