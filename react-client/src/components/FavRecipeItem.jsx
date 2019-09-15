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
  console.log("FavRecipeItem Props", props);
  const { user, removeFromFavorites } = props;
  const { recipe_name, recipe_url, title, recipe_image, id } = props.favRecipe;

  const removeFavoritesAndRedirect = selectedRecipe => {
    removeFromFavorites(selectedRecipe)
      .then(() => console.log("The recipe was removed from the database"))
      .catch(err => console.error(err));
  };

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
            onClick={() =>
              removeFavoritesAndRedirect([
                recipe_url,
                recipe_name,
                recipe_image,
                id
              ])
            }
          ></Button>
        </td>
      </tr>
    </tbody>
  );
};

export default FavRecipeItem;
