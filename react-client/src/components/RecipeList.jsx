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
            test text Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Architecto quo itaque eveniet dolorum nisi repellendus, quia sit
            nostrum, distinctio delectus dolorem nulla, deleniti labore illum
            doloremque numquam harum magni tempore?
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RecipeList;
