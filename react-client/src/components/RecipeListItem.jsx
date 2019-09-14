import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardImg } from "reactstrap";

const RecipeListItem = (props) => {
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
      </CardBody>
    </Card>
  );
};

export default RecipeListItem;
