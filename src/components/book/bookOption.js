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
      cost,
      image,
      path,
      sleeps,
      title,
    } = this.props;
    return (
      <div className="bookOptionContainer">
        <img
          src={image}
          className="bookOptionImage"
          alt="bookingOption"
        />
        <div className="bookOptionDetails">
          <div className="bookOptionTitle">{title}</div>
          <div className="bookOptionCost">{`$${cost}`}</div>
          <div className="bookOptionCost">{sleeps}</div>
          <div>{descriptionFiller}</div>
          <Link className="bookOptionLink" to={path}>
            <button className="bookOptionButton">Availability</button>
          </Link>
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
