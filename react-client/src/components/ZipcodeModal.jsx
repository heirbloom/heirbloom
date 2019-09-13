import React from "react";
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

class ZipcodeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <FormGroup>
        <Button className="card-button btn-sm mt-2 ml-3" onClick={this.toggle}>
          Not in {`${this.props.userLocation.city}`}? Click here.
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Change your Zip Code</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Input type="text" placeholder="zipcode" />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Update
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </FormGroup>
    );
  }
}

export default ZipcodeModal;
