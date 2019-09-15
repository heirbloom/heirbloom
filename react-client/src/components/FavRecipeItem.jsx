import React from "react";
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

const FavRecipeItem = props => {
  console.log('FavRecipeItem Props', props);
  const { user } = props;
  const { recipe_name, recipe_url } = props.favRecipe;

  return (
    <Col>
      <Table hover>
        <tbody>
          <tr>
            <td>{recipe_name}</td>
            <td>
              {/* open the recipe link (recipe_url) when this button is clicked */}
              <a href={recipe_url} className="float-right" size="sm" color="warning" target="_blank"> Click to view</a>
            </td>
            <td>
              <Button
                color="white"
                className="fas fa-heart float-right text-danger"
              ></Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Col>
  )
}

export default FavRecipeItem;