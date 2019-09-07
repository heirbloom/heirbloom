import React from 'react';
import axios from 'axios';
import '../App.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { baseUrl } from '../constants';

class Login extends React.Component {
  state = {
    userCredentials: {
      email: '',
      password: ''
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state.userCredentials;
    // if either email or password fields are blank, alert the user
    if(!email || !password) {
      return alert('Email and Password are required!')
    }
    // else, send a post request to the login route with the input credentials to handle authentication
    axios.post(`${baseUrl}/api/login`, this.state.userCredentials)
      .then((response) => {
        // on successful login, response is an object with data property containing the token
        // console.log(response);
        // save the token in browser sessionStorage
        sessionStorage.setItem('token', response.data.token);
        // console.log('=====', this.props);
        // if user successfully logs in, redirect them to their profile page (NOTE: change to landing!!!)
        this.props.history.push('/profile');
      })
      .catch((err) => {
        console.log(err);
        alert('Problem logging in, check your credentials and try again!');
      })
  }

  handleChange = (event) => {
    // take the name ('email' and 'password') and input value for each from the form)
    const { value, name } = event.target;
    const userCredentials = this.state.userCredentials;
    // assign the email and password to their input value
    userCredentials[name] = value;
    // set the state to thos input values
    this.setState({userCredentials});
  }
  render() {
    return (
      <div className="container-fluid login-head position-relative">
        <div className="row" >
          <div className="col" >
            <div className="login-head">
              <h3>LOGIN</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="login-body">
                <div className="login-form">
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <Input onChange={this.handleChange} type="email" name="email" id="exampleEmail" placeholder="email" />
                    </FormGroup>
                    <FormGroup>
                      <Input onChange={this.handleChange} type="password" name="password" id="examplePassword" placeholder="password" />
                    </FormGroup>
                    <button type="submit">Login</button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>);
  }
}

export default Login;