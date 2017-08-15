import React, {
  Component,
} from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

import './userForm.css';

const requiredFields = [
  'name',
  'phoneNumber',
  'email',
];

class UserForm extends Component{

  formIsReady() {
    return requiredFields.every(field => this.props[field]) && this.props.range;
  }

  renderInput({key, placeHolder, className}) {
    return (
      <div className="inputRow">
        <input
          className={'userInput'}
          placeholder={placeHolder}
          onChange={(event) => {
            this.props.changeUserValue({ property: key, value: event.target.value });
          }}
        />
      </div>
    );
  }

  renderInputMessage() {
    return (
      <div className="inputRow">
        <textarea
          className={'userInputMessage'}
          placeholder={'Message'}
          onChange={(event) => {
            this.props.changeUserValue({ property: 'message', value: event.target.value });
          }}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="userForm">
        <div className={'row'}>
          {this.renderInput({ key: 'name', placeHolder: 'Name' })}
          {this.renderInput({ key: 'email', placeHolder: 'Email' })}
        </div>
        <div className={'row'}>
          {this.renderInput({ key: 'phoneNumber', placeHolder: 'Phone Number' })}
          <DatePicker
              selected={this.props.range}
              onChange={(event) => {
                this.props.changeUserValue({ property: 'range', value: event});
              }}
          />
        </div>
        {this.renderInputMessage()}
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
