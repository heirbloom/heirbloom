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
    const { title, image_url, publisher, source_url } = recipe || {};

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
              <a href={source_url} target="_blank">
                {title}
              </a>

              <Button
                color="white"
                className="fas fa-heart float-right text-danger"
                onClick={() =>
                  handleFavoritesAndRedirect([
                    title,
                    image_url,
                    publisher,
                    email
                  ])
                }
              ></Button>
            </CardTitle>
            <CardImg top width="25%" src={image_url} alt="Card image cap" />
            <CardSubtitle className="card-subtitle">{publisher}</CardSubtitle>
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
