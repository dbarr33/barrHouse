import React, {
  Component,
} from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';

import './userForm.css';

const requiredFields = [
  'firstName',
  'lastName',
  'phoneNumber',
  'email',
];

class UserForm extends Component{

  formIsReady() {
    return requiredFields.every(field => this.props[field]) && this.props.range;
  }

  renderInput({key, placeHolder}) {
    return (
      <div className="inputRow">
        <div className="astrisk">
          *
        </div>
        <input
          className="userInput"
          placeholder={placeHolder}
          onChange={(event) => {
            this.props.changeUserValue({ property: key, value: event.target.value });
          }}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="userForm">
        {this.renderInput({ key: 'firstName', placeHolder: 'First Name' })}
        {this.renderInput({ key: 'lastName', placeHolder: 'Last Name' })}
        {this.renderInput({ key: 'email', placeHolder: 'Email' })}
        {this.renderInput({ key: 'phoneNumber', placeHolder: 'Phone Number' })}
        <div className="astriskDescription">
          * Required Fields
        </div>
        <Link className="formLink" to="confirmation">
          <button disabled={!this.formIsReady()} className="userFormButton">
            Submit
          </button>
        </Link>
      </div>
    );
  }
};

// redux
const mapStateToProps = state => ({
  lastName: state.user.lastName,
  firstName: state.user.firstName,
  email: state.user.email,
  phoneNumber: state.user.phoneNumber,
  range: state.user.range
});

const mapDispatchToProps = dispatch => ({
  changeUserValue: ({ property, value }) => dispatch({
    type: `CHANGE_USER_PROPERTY`,
    payload: { property, value }
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
