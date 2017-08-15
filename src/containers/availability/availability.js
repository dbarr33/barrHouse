import React, {
  Component,
} from 'react';
import Moment from 'react-moment'
import { connect } from 'react-redux';

// Components
import UserForm  from '../../components/availability/userForm';

// Styles
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

  render() {
    return (
      <div className="availabilityContainer">
        <UserForm/>
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
