import React, {
  Component,
  PropTypes,
} from 'react';

// Styles
import './pageIndicator.css';

class PageIndicator extends Component {
  render() {
    const {
      index,
      numberOfPages
    } = this.props;
    const circles = [];
    for (let i = 0; i < numberOfPages; i++) {
      if (i === index) {
        circles.push(
          <div key={i} className="activeCircle" />
        );
      } else {
        circles.push(
          <div key={i} className="circle" />
        );
      }
    }
    return (
      <div className="pageIndicator">
        {circles}
      </div>
    );
  }
}

PageIndicator.propTypes = {
  index: PropTypes.number.isRequired,
  numberOfPages: PropTypes.number.isRequired
};

export default PageIndicator;
