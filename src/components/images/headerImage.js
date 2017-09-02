import React, {
  Component,
  PropTypes
} from 'react';

import './headerImage.css';

class HeaderImage extends Component {

  render() {
    const {
      image,
      className
    } = this.props;
    return (
      <div ref="imageContainer" className="imageContainer" >
        <img
          ref="image"
          src={image}
          className={className}
          alt="page"
        />
      </div>
    );
  }
}

HeaderImage.propTypes = {
  image: PropTypes.number.isRequired,
  className: PropTypes.string,
};

HeaderImage.defaultProps = {
  className: 'image',
};


export default HeaderImage;
