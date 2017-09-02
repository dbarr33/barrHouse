import React, { Component, PropTypes } from 'react';

// Styles
import './imagePage.css';

class ImagePage extends Component {

  render() {
    const { image } = this.props;
    return (
      <div ref="page" className="page">
        <img
          ref="imagePage"
          src={image}
          className="imagePage"
          alt="page"
        />
      </div>
    );
  }
}

ImagePage.propTypes = {
  image: PropTypes.any.isRequired,
};

export default ImagePage;
