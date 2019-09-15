import React from "react";
import { withRouter } from "react-router-dom";
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

// This renders an individual ingredient card
const Ingredient = props => {
  const handleRecipesAndRedirect = selectedIngredient => {
    const { handleRecipes } = props;
    // use App.Jsx's handleRecipes function which sends an api request to get the recipes with the selectedIngredient
    handleRecipes(selectedIngredient)
      .then(() => props.history.push("/recipe-list"))
      .catch(err => console.error(err));
  };

  return props.ingredients.map(ingredient => {
    return (
      <Col
        xl={{ size: 3, offset: 0 }}
        md={{ size: 4, offset: 0 }}
        xs={{ size: 10 }}
        className="mb-3"
      >
        <Card id="ingredient-card">
          <CardImg top width="100%" src={ingredient.URL} alt="Card image cap" />
          <CardBody className="bg-light">
            <CardTitle className="card-title">{ingredient.Name}</CardTitle>

            <hr></hr>
            <CardText>{ingredient.Description}</CardText>
            <hr></hr>
            <Button
              onClick={() => props.history.push("/market-list")}
              className="card-button col-12"
            >
              Where to find them
            </Button>
            <Button
              onClick={() => handleRecipesAndRedirect(ingredient.SearchTerm)}
              className="card-button col-12"
            >
              How to prepare them
            </Button>
          </CardBody>
        </Card>
      </Col>
    );
  });
};

export default withRouter(Ingredient);
