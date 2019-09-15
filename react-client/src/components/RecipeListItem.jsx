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

const RecipeListItem = props => {
  const handleFavoritesAndRedirect = selectedRecipe => {
    const { addToFavorites } = props;
    addToFavorites(selectedRecipe)
      .then(() => console.log("The recipe was saved to the database"))
      .catch(err => console.error(err));
  };

  return props.recipes.map(recipe => {
    console.log(recipe);
    const { id } = props.user || {};
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
                className="far fa-heart float-right text-danger"
                onClick={() =>
                  handleFavoritesAndRedirect([title, image_url, source_url, id])
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

export default withRouter(RecipeListItem);
