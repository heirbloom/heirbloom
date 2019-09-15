import React, { Component, Fragment } from "react";
import RecipeListItem from "./RecipeListItem.jsx";
import { Col, Row, Container } from "reactstrap";
import NavBar from "./NavBar.jsx";

// renders all of our recipes from the Food2Fork API
class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { user, recipes, addToFavorites } = this.props;
    return (
      <Fragment>
        <NavBar user={user} />
        <Container fluid>
          <Row className="mt-10 ml-1">
            <Col xs={{ size: 9 }}>
              <h1 className="headline">Buy it fresh. Make it fresh.</h1>
            </Col>
          </Row>
          <Row className="ml-1">
            <RecipeListItem
              recipes={recipes}
              addToFavorites={addToFavorites}
              user={user}
            />
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default RecipeList;
