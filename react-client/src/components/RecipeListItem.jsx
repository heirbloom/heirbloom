import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardImg } from "reactstrap";
import { withRouter } from "react-router-dom";
import Context from "../contexts/Context.jsx";

const RecipeListItem = (props) => {
  console.log('recipelistitemprops', props.user);
  
  const handleFavoritesAndRedirect = (selectedRecipe) => {
    const { context, history } = props;
    context.addToFavorites(selectedRecipe)
      .then(() => history.push('/fav-recipes'));
  }

  // const { email } = props.user;
  const { email } = props.user || {};
  const { title, image_url, publisher } = props.recipe || {};
  return (
    <Card id="recipe-card" className="mb-2 bg-light">
      <CardBody>
        <CardTitle className="card-title">{title}</CardTitle>
        <CardImg top width="25%" src={image_url} alt="Card image cap" />
        <CardSubtitle className="card-subtitle">
          {publisher}
        </CardSubtitle>
        <hr></hr>
        <Button className="card-button col-12">Show me how to make it</Button>
        <hr></hr>
        <Button onClick={() => handleFavoritesAndRedirect([title, image_url, publisher, email])} className="card-button col-12">Add to Favorites</Button>
      </CardBody>
    </Card>
  );
};

const RecipeListItemWithContext = (props) => (
  <Context.Consumer>
    {(value) => {
      return <RecipeListItem context={value} {...props} />;
    }}
  </Context.Consumer>)

export default withRouter(RecipeListItemWithContext);
