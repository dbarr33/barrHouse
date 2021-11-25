import React, {
  Component,
  PropTypes,
} from 'react';

// Components
import ImageViewPager from '../home/imageViewPager';

// Styles
import './bookOption.css';

class BookOption extends Component {
  render() {
    const {
      room,
      images,
      title,
      text,
    } = this.props;
    return (
      <div className={'bookOptionContainer'} >
        <div className="bookOptionImageContainer">
          <div className="bookOptionTitle">{title}</div>
          <ImageViewPager images={images} />
        </div>
        <div className="bookOptionDetails">
          {/* <div className="bookOptionCost">{room.weekCost === room.weekendCost ? `$${room.weekCost}` : `$${room.weekCost} - $${room.weekendCost}`}</div> */}
          {/* <div className="bookOptionDate">{room.weekCost === room.weekendCost ? 'Sun - Sat' : 'Sun - Thu - Fri & Sat'}</div> */}
          <div className={'bookOptionDescription'}>{text}</div>
        </div>
      </div>
    );
  }
}
BookOption.propTypes = {
  room: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default BookOption;
