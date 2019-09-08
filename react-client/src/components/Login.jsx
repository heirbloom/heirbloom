import React from 'react';
import axios from 'axios';
import '../App.css';
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
} from 'reactstrap';
import { baseUrl } from '../constants';
import Signup from './Signup';


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

  handleSignupClick = (event) => {
    return <Signup />
  }

  render() {
    return (
      <div class="bg pt-5">
        <Row className="mt-5">
          <Col
            xl={{ size: 4, offset: 7 }}
            md={{ size: 5, offset: 6 }}
            xs={{ size: 10, offset: 1 }}
            className="mt-5"
          >
            <div className="login-head">
              <h3 className="ml-3">LOGIN</h3>
            </div>
            <div className="login-body pt-3">
              <div className="login-form">
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Input onChange={this.handleChange} type="email" name="email" id="exampleEmail" placeholder="email" className="ml-3 col-11" />
                  </FormGroup>
                  <FormGroup>
                    <Input onChange={this.handleChange} type="password" name="password" id="examplePassword" placeholder="password" className="ml-3 col-11" />
                  </FormGroup>
                  <Row>
                    <Col className="col-12">
                      {/* First-time visitor? Please Sign-Up: 
                      <Button onClick={this.handleSignupClick} id="login-button" className="float-right mr-4 mb-1">
                        SIGN-UP
                      </Button> */}
                      <Button type="submit" id="login-button" className="float-right mr-4 mb-3">
                        LOGIN
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

export default Login;


// render() {
//     return (
//       <div className="container-fluid login-head position-relative">
//         <div className="row" >
//           <div className="col" >
//             <div className="login-head">
//               <h3>LOGIN</h3>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col">
//               <div className="login-body">
//                 <div className="login-form">
//                   <Form onSubmit={this.handleSubmit}>
//                     <FormGroup>
//                       <Input onChange={this.handleChange} type="email" name="email" id="exampleEmail" placeholder="email" />
//                     </FormGroup>
//                     <FormGroup>
//                       <Input onChange={this.handleChange} type="password" name="password" id="examplePassword" placeholder="password" />
//                     </FormGroup>
//                     <button type="submit">Login</button>
//                   </Form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>);
//   }
// }

// export default Login;
