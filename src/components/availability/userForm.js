
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import RaisedButton from 'material-ui/RaisedButton';

// Actions
import { createEmail } from '../../actions/mailChip.actions';

// Styles
import './userForm.css';

const dateformat = require('dateformat');

const requiredFields = [
  'name',
  'phone',
  'email',
  'date',
  'message'
];

class UserForm extends Component {

  formIsReady() {
    return requiredFields.every(field => this.props[field]);
  }

  renderInput({ key, placeHolder, type }) {
    return (
      <div className="inputRow">
        <input
          type={type}
          value={this.props[key] || ''}
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
          {this.renderInput({ key: 'email', placeHolder: 'Email', type: 'email' })}
        </div>
        <div className={'row'}>
          {this.renderInput({ key: 'phone', placeHolder: 'Phone Number', type: 'tel' })}
          <DatePicker
            customInput={this.renderInput({ key: 'date', placeHolder: 'Date' })}
            onChange={(date) => {
              this.props.changeUserValue({ property: 'date', value: dateformat(new Date(date), 'dd/m/yy') });
            }}
          />
        </div>
        {this.renderInputMessage()}
        <RaisedButton
          disabled={!this.formIsReady()}
          className="userFormButton"
          primary
          label="Submit"
          buttonStyle={{ backgroundColor: !this.formIsReady() ? '#cccccc' : '#008080' }}
          onClick={() => this.props.sendEmail(this.props) }
        />
      </div>
    );
  }
}

// redux
const mapStateToProps = state => ({
  message: state.user.message,
  name: state.user.name,
  email: state.user.email,
  phone: state.user.phone,
  date: state.user.date
});

const mapDispatchToProps = dispatch => ({
  changeUserValue: ({ property, value }) => dispatch({
    type: 'CHANGE_USER_PROPERTY',
    payload: { property, value }
  }),
  sendEmail: payload => dispatch(createEmail(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
