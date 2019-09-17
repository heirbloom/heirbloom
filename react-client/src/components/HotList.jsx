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
class HotList extends React.Component {
    constructor(props) {
        super(props)
        const { user, removeFromFavorites } = this.props;
        const { recipe_name, recipe_url, title, recipe_image, id } = this.props.favRecipe;
        this.state = {
            
        }
    }
    console.log("FavRecipeItem Props", props);

    removeFavoritesAndRedirect = (selectedRecipe) => {
        removeFromFavorites(selectedRecipe)
            .then(() => console.log("Recipe is on it's way to the void."))
            .catch(err => console.error(err));
    };

    render() {
        const { state } = this.state;
        return (
    
  );
    }
};

export default FavRecipeItem;
