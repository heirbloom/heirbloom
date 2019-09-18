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
import Axios from "axios";
import RecipeNotes from './RecipeNotes.jsx';

// This structures the FavRecipeItem component. props should be one recipe object.
class FavRecipeItem extends Component {
  constructor(props){
    super(props);
    this.state ={ 
      collapse: false,
      notes: ['fack sata', 'sckpada', 'trashPandas'],
      newNote: '',
    };
    this.toggleNotes = this.toggleNotes.bind(this);
    this.removeFavoritesAndRedirect = this.removeFavoritesAndRedirect.bind(this);
    this.saveRecipeNotes = this.saveRecipeNotes.bind(this);
  }
  // const { user, removeFromFavorites } = this.props;
  
  removeFavoritesAndRedirect (selectedRecipe) {
    this.props.removeFromFavorites(selectedRecipe)
    .then(() => console.log("Recipe is on it's way to the void."))
    .catch(err => console.error(err));
  };
  
  toggleNotes() {
    this.setState(state => ({ collapse : !state.collapse}));
  }

  saveRecipeNotes() {
    // console.log('yobro')
    return Axios.post('api/notes', {note: this.state.newNote, recipeId: this.props.favRecipe.id, userId: this.props.user.id })
      .then((response) =>{
        console.log(response, 'the save RecipieNotes response');
      })
  }

  render(){
    const { recipe_name, recipe_url, title, recipe_image, id } = this.props.favRecipe;
    const {state, notes, newNote} = this.state;
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
              this.removeFavoritesAndRedirect([
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
            onClick={() =>{this.toggleNotes()}}
          ></Button>
        </td>
      </tr>
      <tr>
      <Collapse isOpen={this.state.collapse}>
              <td>
                <Input type='textarea' placeholder="Type your notes for your fav recipe" value={newNote} onChange={e => this.setState({newNote: e.target.value})}></Input>
              </td>
              <td>
                <Button className='fas fa-utensils icon-food float-right' onClick={this.saveRecipeNotes}></Button> 
              </td>
      </Collapse>
      </tr>
      <tr>
        <h7>Personal Notes</h7>
        <RecipeNotes notes={notes}/>
      </tr>
    </tbody>
  );
  };
};

export default FavRecipeItem;
