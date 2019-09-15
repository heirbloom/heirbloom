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
  console.log("FavRecipeItem Props", props);
  const { user, removeFromFavorites } = props;
  const {
    recipe_name,
    recipe_url,
    title,
    image_url,
    source_url,
    id
  } = props.favRecipe;

  const removeFavoritesAndRedirect = selectedRecipe => {
    const { removeFromFavorites } = props;
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
              removeFavoritesAndRedirect([title, image_url, source_url, id])
            }
          ></Button>
        </td>
      </tr>
    </tbody>
  );
};

export default FavRecipeItem;
