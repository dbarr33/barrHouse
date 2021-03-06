
import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';

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

  renderInput({ key, placeHolder }) {
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
          floatingLabelStyle={{ color: Colors.primary }}
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
    const { isActive } = this.props;
    return (
      <div className="userForm">
        <div className={'formCopy'}>
          Please fill out the form below and get started on planning your event at The Barr House Inn!
        </div>
        <div className={'row'}>
          {this.renderInput({ key: 'name', placeHolder: 'Name' })}
          {this.renderInput({ key: 'email', placeHolder: 'Email', type: 'email' })}
        </div>
        <div className={'row'}>
          {this.renderInput({ key: 'phone', placeHolder: 'Phone Number', type: 'tel' })}
          <DatePicker
            style={{ backgroundColor: 'white', marginBottom: 9, paddingLeft: 5, width: 255 }}
            floatingLabelText={'Date'}
            floatingLabelStyle={{ color: Colors.primary }}
            underlineShow={false}
            disableYearSelection
            formatDate={date => dateformat(new Date(date), 'dd/m/yy')}
            minDate={new Date()}
            onChange={(event, date) => {
              this.props.changeUserValue({ property: 'date', value: dateformat(new Date(date), 'dd/m/yy') });
            }}
          />
        </div>
        {this.renderInputMessage()}
        <RaisedButton
          disabled={!this.formIsReady() || isActive}
          className="userFormButton"
          primary
          label="Submit"
          buttonStyle={{ backgroundColor: isActive || !this.formIsReady() ? '#cccccc' : '#008080' }}
          onClick={() => this.props.sendEmail(this.props) }
        />
        {isActive && <CircularProgress size={'20'} style={{ marginLeft: -90, zIndex: 1 }} color={'#008080'} /> }
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
  date: state.user.date,
  isActive: state.user.isActive
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
