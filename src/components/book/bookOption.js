import React, {
  Component,
  PropTypes,
} from 'react';
// import { Link } from 'react-router'

import './bookOption.css';

class BookOption extends Component {
  render() {
    const {
      room,
      image,
      path,
      title,
      text,
    } = this.props;
    return (
      <div className={'bookOptionContainer'} >
        <div className="bookOptionImageContainer">
          <div className="bookOptionTitle">{title}</div>
          <img
            src={image}
            className="bookOptionImage"
            alt="bookingOption"
          />
        </div>
        <div className="bookOptionDetails">
          <div className="bookOptionCost">{`$${room.weekCost} - $${room.weekendCost}`}</div>
          <div className="bookOptionDate">{'Sun - Thu - Fri & Sat'}</div>
          <div className={'bookOptionDescription'}>{text}</div>
          {/* <Link className="bookOptionLink" to={path}>
            <button className="bookOptionButton">Availability</button>
          </Link> */}
        </div>
      </div>
    );
  }
}
BookOption.propTypes = {
  cost: PropTypes.number,
  image: PropTypes.number,
  path: PropTypes.string,
  sleeps: PropTypes.string,
  title: PropTypes.string,
};

export default BookOption;
