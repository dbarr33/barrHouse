import React, {
  Component,
} from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
const dateformat = require('dateformat');

import './userForm.css';
import 'react-datepicker/dist/react-datepicker.css';

const requiredFields = [
  'name',
  'phoneNumber',
  'email',
  'date',
  'message'
];

class UserForm extends Component{

  formIsReady() {
    console.log(this.props)
    return requiredFields.every(field => this.props[field]);
  }

  renderInput({key, placeHolder, className}) {
    return (
      <div className="inputRow">
        <input
          value={this.props[key]}
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
            customInput={this.renderInput({ key: 'date', placeHolder: 'Date' })}
            onChange={(date) => {
              this.props.changeUserValue({ property: 'date', value: dateformat(new Date(date), 'dd/m/yy')});
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
  message: state.user.message,
  name: state.user.name,
  email: state.user.email,
  phoneNumber: state.user.phoneNumber,
  date: state.user.date
});

const mapDispatchToProps = dispatch => ({
  changeUserValue: ({ property, value }) => dispatch({
    type: `CHANGE_USER_PROPERTY`,
    payload: { property, value }
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
