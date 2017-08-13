import React, {
  Component,
  PropTypes
} from 'react';

import { Link } from 'react-router'

import './headerImage.css';
import PageIndicator from '../global/pageIndicator';

class HeaderImage extends Component {

  renderImageDescription() {
    const {
      description,
    } = this.props;
    if (description) {
      return <div className="imageDescription">{description}</div>;
    }
    return null;
  }
  render() {
    const {
      image,
      title,
      buttonTitle,
      path
    } = this.props;
    return (
      <div ref="imageContainer" className="imageContainer">
        <img
          ref="image"
          src={image}
          className="image"
          alt="page"
        />
      </div>
    );
  }
}

PageIndicator.propTypes = {
  image: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonTitle: PropTypes.string,
  path: PropTypes.string
};

export default HeaderImage;
