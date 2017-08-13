import React, {
  Component,
  PropTypes
} from 'react';

import { Link } from 'react-router'

import './imagePage.css';
import PageIndicator from '../global/pageIndicator';

class ImagePage extends Component {

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
      <div ref="page" className="page">
        <img
          ref="image"
          src={image}
          className="image"
          alt="page"
        />
        <div className="overlay"/>
        <div className="overlayContent">
          <div className="imageTitle">{title}</div>
          {this.renderImageDescription()}
          <div className="imageButtonContainer">
            <Link className="action" to={path}>
              {buttonTitle}
            </Link>
          </div>
        </div>
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

export default ImagePage;
