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

// This structures the FavRecipeItem component. props should be one recipe object. 
const FavRecipeItem = props => {
  const { user } = props;
  const { recipe_name, recipe_url } = props.favRecipe;

  return (
    <tbody>
      <tr>
        <td>
          <a
            href={recipe_url}
            className="float-left recipe-name"
            size="sm"
            color="warning"
            target="_blank"
          >
            {recipe_name}
          </a>
        </td>

        <td>
          <Button
            color="white"
            className="fas fa-heart float-right text-danger"
          ></Button>
        </td>
      </tr>
    </tbody>
  );
};

export default FavRecipeItem;
