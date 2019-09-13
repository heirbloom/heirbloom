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
      <div className="bg-recipe pt-5">
        <NavBar user={props.user} className="mb-3" />
        <Container md={{ size: 6, offset: 3 }}>
          <Row className="mt-5 position-relative bg-white recipe-table">
            <Col>
              <h5 className="text-capitalize pt-3">{`${username}'s favorite recipes`}</h5>
            </Col>
          </Row>
          <Row className="bg-white recipe-table">
            <Col>
              <Table hover>
                <tbody>
                  <tr>
                    <td>Strawberry Shortcake</td>
                    <td>
                      <Button className="float-right" size="sm" color="warning">
                        Click to view
                      </Button>
                    </td>
                    <td>
                      <Button
                        color="white"
                        className="fas fa-heart float-right text-danger"
                      ></Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Strawberry Shortcake</td>
                    <td>
                      <Button className="float-right" size="sm" color="warning">
                        Click to view
                      </Button>
                    </td>
                    <td>
                      <Button
                        color="white"
                        className="fas fa-heart float-right text-danger"
                      ></Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Strawberry Shortcake</td>
                    <td>
                      <Button className="float-right" size="sm" color="warning">
                        Click to view
                      </Button>
                    </td>
                    <td>
                      <Button
                        color="white"
                        className="fas fa-heart float-right text-danger"
                      ></Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default FavRecipes;
