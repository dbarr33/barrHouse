import React, {
  Component,
  PropTypes
} from 'react';
import { Link } from 'react-router'

import './roomCell.css'
class RoomCell extends Component {

  getRoomCost() {
    const {
      costHigh,
      costLow,
    } = this.props;
    return `$${costLow} - $${costHigh}`
  }
  render() {
    const {
      description,
      image,
      title,
    } = this.props;
    return (
      <div className="roomCellContainer">
        <Link className="roomCellLink" to={`rooms/${title}`}>
          <div>
            <div className="roomTitle">{title}</div>
            <div className="roomCellCost">{this.getRoomCost()}</div>
            <button className="roomCellBook" onClick={()=>{}}>BOOK NOW</button>
          </div>
          <div className="imageContainer">
            <img
              src={image}
              className="image"
              alt="room"
            />
          </div>
          <div className="roomDescription">{description}</div>
        </Link>
      </div>
    );
  }
}
RoomCell.propTypes = {
  costHigh: PropTypes.number,
  costLow: PropTypes.number,
  description: PropTypes.string,
  image: PropTypes.number,
  title: PropTypes.string,
};

export default RoomCell;
