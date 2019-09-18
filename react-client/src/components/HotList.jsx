import React from "react";
import "../App.css";
import {
    Button,
    Collapse,
    Input,
} from "reactstrap";
import Axios from "axios";

// This structures the FavRecipeItem component. props should be one recipe object.
class HotList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapse: false,
            recipes: [],
        }
        this.toggleHot= this.toggleHot.bind(this);
        this.getSomeHotStuff= this.getSomeHotStuff.bind(this);
    }

    getSomeHotStuff() {
        
    }

    toggleHot() {
        return Axios.get('/hotList')
        .then(response => {
            this.setState({
                recipes: response.data,
<<<<<<< HEAD
                collapse: !this.state.collapse,
=======
                collapse: !this.state.collapse
>>>>>>> 703ce8951560d72f8a6c191fee3097e7b90d2e07
            })
        })
    }

    render() {
        const { recipes } = this.state;
        const hotFive = recipes.map(recipe => (
            <li>{recipe}</li>
        ));
        return (
            <div>
            <Button className="float-right" onClick={this.toggleHot}>Check it</Button>
            <Collapse isOpen={this.state.collapse}>
                <ul>
                    {hotFive}
                </ul>
            </Collapse>
            </div>
        );
    }
};

export default HotList;
