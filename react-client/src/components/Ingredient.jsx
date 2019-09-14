import React from "react";
import { withRouter } from "react-router-dom";
import Context from "../contexts/Context.jsx";
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

const Ingredient = props => {
// console.log('Ingredient Props', props);

const handleRecipesAndRedirect = (selectedIngredient) => {
  const { context, history } = props;
  context.handleRecipes(selectedIngredient)
    .then(() => history.push('/recipe-list'));
}

  return props.ingredients.map(ingredient => {
    // console.log('psekogkjsefklkldgsldjlhfdljlfh',ingredient);
    return (
      <Col
        xl={{ size: 3, offset: 0 }}
        md={{ size: 4, offset: 0 }}
        xs={{ size: 10, offset: 1 }}
        className="mb-3"
      >
        <Card id="ingredient-card">
          <CardImg top width="100%" src={ingredient.URL} alt="Card image cap" />
          <CardBody className="bg-light">
            <CardTitle className="card-title">{ingredient.Name}</CardTitle>

            <hr></hr>
            <CardText>{ingredient.Description}</CardText>
            <hr></hr>
            <Button onClick={() => props.history.push('/market-list')} className="card-button col-12">Where to find them</Button>
            <Button onClick={() => handleRecipesAndRedirect(ingredient.SearchTerm)} className="card-button col-12">How to prepare them</Button>
            <Button className="card-button col-12">Add to recipe</Button>
          </CardBody>
        </Card>
      </Col>
    );
  });
};

const IngredientWithContext = (props) => (
<Context.Consumer>
  {(value) => {
      return <Ingredient context={value} {...props} />;
    }}
</Context.Consumer>)

export default withRouter(IngredientWithContext);
