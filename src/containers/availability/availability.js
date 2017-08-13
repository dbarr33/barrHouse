import React, {
  Component,
} from 'react';
import Moment from 'react-moment'
import { connect } from 'react-redux';

import Calendar  from '../../components/global/calendar';
import UserForm  from '../../components/availability/userForm';

import Arrow from '../../assets/arrow.png';

import './availability.css';

class Availability extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(range, states) {
    // range is a moment-range object
    this.props.changeUserValue({ property: 'range', value: range });
  }

  renderStartDate() {
    if(this.props.range) {
      return (
        <div className="dateText">
          <Moment format="MM/DD/YYYY">{this.props.range.start}</Moment>
        </div>
      );
    }
    return (
      <div className="dateText">
        Start Date
      </div>
    );
  }
  renderEndDate() {
    if(this.props.range) {
      console.log(this.props.range)
      return (
        <div className="dateText">
          <Moment format="MM/DD/YYYY">{this.props.range.end}</Moment>
        </div>
      );
    }
    return (
      <div className="dateText">
        End Date
      </div>
    );
  }

  render() {
    return (
      <div className="availabilityContainer">
        <div className="dateSelectionContainer">
          {this.renderStartDate()}
          <img
            alt="dateArrow"
            src={Arrow}
            className="dateArrow"
          />
          {this.renderEndDate()}
        </div>
        <div className="calendarContainer">
          <Calendar
            value={this.props.range}
            handleSelection={this.handleSelect.bind()}
          />
        </div>
        <div className="userFormContainer">
          <UserForm/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  range: state.user.range
});

const mapDispatchToProps = dispatch => ({
  changeUserValue: ({ property, value }) => dispatch({
    type: `CHANGE_USER_PROPERTY`,
    payload: { property, value }
  }),
});

export default connect(mapStateToProps,mapDispatchToProps)(Availability);
