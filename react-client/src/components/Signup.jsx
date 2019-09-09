import React from "react";
import axios from "axios";
import "../App.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Col
} from "reactstrap";
import { baseUrl } from "../constants";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userCredentials: {
        username: "",
        email: "",
        password: "",
        zipcode: ""
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, email, password, zipcode } = this.state.userCredentials;
    // if any field is blank, alert the user
    if (!username || !email || !password || !zipcode) {
      return alert("All fields are required!");
    }
    // else, send a post request to the server to save login info in the database
    axios
      .post(`${baseUrl}/api/signup`, this.state.userCredentials)
      .then(response => {
        // console.log('RESPONSE', response.data)
        // reposnse is an object with a data property which is an object containing the signup info
        // if user successfully signs up, give them a user token and redirect to the landing page
        sessionStorage.setItem("token", response.data.token);
        this.props.history.push("/landing", { isLoggedIn: true });
        return alert("Thank you for signing up. Welcome to Heirbloom!");
      })
      .catch(err => {
        console.error(err);
        alert(
          "The username and/or e-mail are already taken. Please try again."
        );
      });
  }

  handleChange(event) {
    // take the name and input value for each from the form
    const { value, name } = event.target;
    const userCredentials = this.state.userCredentials;
    // assign the username, email, password and zipcode to their input value
    userCredentials[name] = value;
    // set the state to those input values
    this.setState({ userCredentials });
  }

  render() {
    return (
      <div className="signup-bg pt-5">
        <Row className="mt-5">
          <Col
            xl={{ size: 4, offset: 7 }}
            md={{ size: 5, offset: 6 }}
            xs={{ size: 10, offset: 1 }}
            className="mt-5"
          >
            <div className="login-head">
              <h3 className="ml-3">SIGN-UP</h3>
            </div>
            <div className="login-body pt-3">
              <div className="login-form">
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Input
                      onChange={this.handleChange}
                      type="text"
                      name="username"
                      id="exampleUsername"
                      placeholder="username"
                      className="ml-3 col-11"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      onChange={this.handleChange}
                      type="text"
                      name="zipcode"
                      id="exampleZipcode"
                      placeholder="zipcode"
                      className="ml-3 col-11"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      onChange={this.handleChange}
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="email"
                      className="ml-3 col-11"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      onChange={this.handleChange}
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="password"
                      className="ml-3 col-11"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      // onChange={this.handleChange}
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="confirm password"
                      className="ml-3 col-11"
                    />
                  </FormGroup>
                  <Row>
                    <Col className="col-12">
                      <Button
                        type="submit"
                        id="login-button"
                        className="float-right mr-4 mb-3"
                      >
                        sign me up!
                      </Button>
                    </Col>
                  </Row>
                  {/* <button type="submit">Login</button> */}
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Signup;
