import React, { Component } from "react";
import RecipeListItem from "./RecipeListItem.jsx";
import { Col, Row, Container } from "reactstrap";

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className="headline mt-10 mb-2">
              Buy it fresh. Make it fresh.
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 8 }}>
            <RecipeListItem />
            <RecipeListItem />
            <RecipeListItem />
          </Col>
          <Col md={{ size: 3, offset: 1 }}>
            {" "}
            <img
              src="/Users/dan/Documents/immersion/seniorImmersion/heirbloom/react-client/src/images/farm-market-shopper.jpg"
              alt=""
            />{" "}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RecipeList;
