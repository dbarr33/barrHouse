
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

// Actions
import { createEmail } from '../../actions/mailChip.actions';
import { clearUserForm } from '../../actions/userForm.actions';

// Styles
import './userForm.css';

// Constants
import Colors from '../../constants/colors';

const dateformat = require('dateformat');

const requiredFields = [
  'name',
  'phone',
  'email',
  'date',
  'message'
];

class UserForm extends Component {

  componentWillUnmount() {
      this.props.clearForm();
  }

  formIsReady() {
    return requiredFields.every(field => this.props[field]);
  }

  renderInput({ key, placeHolder, type }) {
    return (
      <div className="inputRow">
        <TextField
          className={'userInput'}
          floatingLabelStyle={{ color: Colors.primary }}
          floatingLabelText={placeHolder}
          value={this.props[key] || ''}
          style={{ backgroundColor: 'white', }}
          underlineShow={false}
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
        <TextField
          className={'userInputMessage'}
          multiLine
          rows={4}
          floatingLabelStyle={{ color: Colors.primary  }}
          floatingLabelText={'Message'}
          value={this.props.message || ''}
          style={{ backgroundColor: 'white', height: 150, width: 525 }}
          underlineShow={false}
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
  sendEmail: payload => dispatch(createEmail(payload)),
  clearForm: () => dispatch(clearUserForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
