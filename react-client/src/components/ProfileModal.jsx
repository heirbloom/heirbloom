import React, { useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input
} from "reactstrap";

// renders a modal that allows the user to update their user info
class ProfileModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      newUserInfo: {
        username: props.user.username,
        email: props.user.email,
        zipcode: props.user.zipcode,
        id: props.user.id
      }
    };
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleChange(event) {
    const { value, name } = event.target;
    const newUserInfo = this.state.newUserInfo;
    newUserInfo[name] = value;
    console.log(this.state);
    this.setState({ newUserInfo });
  }

  handleSubmit(newInfo) {
    const { handleUserUpdate } = this.props;
    handleUserUpdate(newInfo);
    this.toggle();
  }

  render() {
    const { username, email, zipcode } = this.state.newUserInfo;
    return (
      <FormGroup>
        <Button className="card-button btn-block" onClick={this.toggle}>
          Edit your profile
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Change your Profile Info
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Input
                onChange={this.handleChange}
                name="username"
                value={username}
                type="text"
                placeholder="username"
              />
            </FormGroup>
            <FormGroup>
              <Input
                onChange={this.handleChange}
                name="email"
                type="text"
                value={email}
                placeholder="email"
              />
            </FormGroup>
            <FormGroup>
              <Input
                onChange={this.handleChange}
                name="zipcode"
                type="text"
                value={zipcode}
                placeholder="zipcode"
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.handleSubmit(this.state.newUserInfo)}
            >
              Update
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </FormGroup>
    );
  }
}

export default ProfileModal;
