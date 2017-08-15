import React, {
  Component,
  PropTypes,
} from 'react';

import "./bookOption.css";
import { Link } from 'react-router'

const descriptionFiller ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur quis libero at sagittis. Pellentesque orci nibh, ornare id arcu at, scelerisque rhoncus ligula. Donec posuere mattis leo, non porta erat fermentum at. Duis egestas vulputate sollicitudin. Fusce lacinia tincidunt pu."

class BookOption extends Component {
  render() {
    const {
      room,
      image,
      path,
      title,
      isAlt,
    } = this.props;
    return (
      <div className={isAlt ? 'bookOptionContainerAlt' : 'bookOptionContainer' }>
          <img
            src={image}
            className="bookOptionImage"
            alt="bookingOption"
          />
        <div className="bookOptionDetails">
          <div className="bookOptionTitle">{title}</div>
          <div className="bookOptionCost">{`$${room.weekCost} - $${room.weekendCost}`}</div>
          <div className="bookOptionDate">{'Sun - Thu - Fri & Sat'}</div>
          <div className={'bookOptionDescription'}>{descriptionFiller}</div>
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
