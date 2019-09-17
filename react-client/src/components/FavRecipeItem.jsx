import React, { Component } from "react";
import "../App.css";
import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col,
  Table,
  Container,
  Collapse,
} from "reactstrap";

// This structures the FavRecipeItem component. props should be one recipe object.
class FavRecipeItem extends Component {
  constructor(props){
    super(props);
    this.state ={ collapse: false };
    this.toggleNotes = this.toggleNotes.bind(this);
    this.removeFavoritesAndRedirect = this.removeFavoritesAndRedirect.bind(this);
  }
  // const { user, removeFromFavorites } = this.props;
  
  removeFavoritesAndRedirect (selectedRecipe) {
    removeFromFavorites(selectedRecipe)
    .then(() => console.log("Recipe is on it's way to the void."))
    .catch(err => console.error(err));
  };
  
  toggleNotes() {
    this.setState(state => ({ collapse : !state.collapse}));
  }
  render(){
    const { recipe_name, recipe_url, title, recipe_image, id } = this.props.favRecipe;
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
             <Button
            color="white"
            className="fas fa-scroll float-right text-f70f"
            onClick={() =>{this.toggleNotes}}
            style={{ marginBottom: '1rem' }}
          ></Button>
            <Collapse isOpen={this.state.collapse}>
              <h1>YO WHAT UP</h1>
          {/* <Card>
            <CardBody>
            Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
            </CardBody>
          </Card> */}
        </Collapse>
        </td>
      </tr>
    </tbody>
  );
  };
};

export default FavRecipeItem;
