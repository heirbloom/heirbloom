import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

const RecipeListItem = () => {
  return (
    <Card id="recipe-card" className="mb-2 bg-light">
      <CardBody>
        <CardTitle className="card-title">Strawberry Shortcake</CardTitle>
        <CardSubtitle className="card-subtitle">
          Makes 4-6 servings
        </CardSubtitle>
        <hr></hr>
        <Button className="card-button col-12">Show me how to make it</Button>
      </CardBody>
    </Card>
  );
};

export default RecipeListItem;
