import React, { Fragment, useEffect } from "react";
import NavBar from "./NavBar.jsx";
import FavRecipeItem from "./FavRecipeItem.jsx";
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
  // This will be the container for all of our FavRecipes.
  const { user, favRecipes, getFavRecipes, removeFromFavorites } = props;
  const { username } = props.user;
  // useEffect is kinda like componentDidMount; once this component renders, useEffect calls the first parameter passed to it and then updates the DOM
  useEffect(() => {
    getFavRecipes(user);
    // pass an empty array to useEffect otherwise the component will keep on updating
  }, []);

  return (
    <Fragment>
      <div className="bg-recipe pt-5">
        <NavBar user={user} className="mb-3" />
        <Container md={{ size: 6, offset: 3 }}>
          <Row className="mt-5 position-relative bg-white recipe-table">
            <Col>
              <h5 className="text-capitalize pt-3">{`${username}'s favorite recipes`}</h5>
            </Col>
          </Row>
          <Row className="bg-white recipe-table">
            <Col>
              <Table hover>
                {favRecipes.map((favRecipe, index) => (
                  <FavRecipeItem
                    favRecipe={favRecipe}
                    removeFromFavorites={removeFromFavorites}
                    key={index}
                    user={user}
                  />
                ))}
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default FavRecipes;
