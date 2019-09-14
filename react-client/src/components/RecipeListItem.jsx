import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardImg,
  Col
} from "reactstrap";
import { withRouter } from "react-router-dom";
import Context from "../contexts/Context.jsx";

const RecipeListItem = props => {
  const handleFavoritesAndRedirect = selectedRecipe => {
    const { context, history } = props;
    context
      .addToFavorites(selectedRecipe)
      .then(() => history.push("/fav-recipes"));
  };

  const { email } = props.user || {};

  return props.recipes.map(recipe => {
    console.log(recipe);
    const { title, image_url, publisher } = recipe || {};

    return (
      <Col
        xl={{ size: 3, offset: 0 }}
        md={{ size: 4, offset: 0 }}
        xs={{ size: 10, offset: 1 }}
        className="mb-3"
      >
        <Card id="recipe-card" className="mb-2 bg-light">
          <CardBody>
            <CardTitle className="card-title">
              {title}
              <Button
                color="white"
                className="fas fa-heart float-right text-danger"
              ></Button>
            </CardTitle>
            <CardImg top width="25%" src={image_url} alt="Card image cap" />
            <CardSubtitle className="card-subtitle">{publisher}</CardSubtitle>
            <hr></hr>
            <Button className="card-button col-12">
              Show me how to make it
            </Button>
            <hr></hr>
            <Button
              onClick={() =>
                handleFavoritesAndRedirect([title, image_url, publisher, email])
              }
              className="card-button col-12"
            >
              Add to Favorites
            </Button>
          </CardBody>
        </Card>
      </Col>
    );
  });
};

const RecipeListItemWithContext = props => (
  <Context.Consumer>
    {value => {
      return <RecipeListItem context={value} {...props} />;
    }}
  </Context.Consumer>
);

export default withRouter(RecipeListItem);
