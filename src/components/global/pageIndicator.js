import React, {
  Component,
  PropTypes,
} from 'react';
import './pageIndicator.css'

class PageIndicator extends Component {
  render() {
    const {
      index,
      numberOfPages
    } = this.props;
    let circles = [];
    for (let i = 0; i < numberOfPages; i++) {
      if (i === index) {
        circles.push(
          <li key={i} className="activeCircle"/>
        )
      } else {
        circles.push(
          <li key={i} className="circle"/>
        )
      }
    }
    return (
      <div>
        <div className="pageIndicator">
          {circles}
        </div>
      </div>
    );
  }
}

PageIndicator.propTypes = {
  index: PropTypes.number,
  numberOfPages: PropTypes.number
};

export default PageIndicator;
