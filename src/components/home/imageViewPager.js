import React, {
  Component,
} from 'react';
import house from '../../assets/barr-house.jpg';
import backHouse from '../../assets/back-house.jpg';
import patio from '../../assets/patio.jpg';
import rightArrow from '../../assets/arrow_right.svg';
import leftArrow from '../../assets/arrow_left.svg';

import './ImageViewPager.css';
import PageIndicator from '../global/pageIndicator';
import ImagePage from './imagePage';

class ImageViewPager extends Component {
  constructor(props) {
    super(props);
    this.advanceImage = this.advanceImage.bind(this); // bind function once
    this.backImage = this.backImage.bind(this); // bind function once

    this.state = {
      activeImage: 0
    };
  }
  advanceImage() {
    const { images } = this.props;

    this.setState({ activeImage: (this.state.activeImage + 1) % images.length });
    this.refs.image.refs.page.classList.remove('rightToLeftTranslate');
    this.refs.backImage.refs.page.classList.remove('rightToLeftTranslate');
    this.refs.image.refs.page.removeEventListener('webkitAnimationEnd', this.advanceImage);
  }

  backImage() {
    this.refs.image.refs.page.classList.remove('leftToRightTranslate');
    this.refs.backImage.refs.page.classList.remove('leftToRightTranslate');
    this.refs.image.refs.page.removeEventListener('webkitAnimationEnd', this.backImage);
  }

  moveUp() {
    this.refs.image.refs.page.classList.add('rightToLeftTranslate');
    this.refs.backImage.refs.page.classList.add('rightToLeftTranslate');
    this.refs.image.refs.page.addEventListener('webkitAnimationEnd', this.advanceImage, false);
  }

  moveDown() {
    const { images } = this.props;

    this.refs.image.refs.page.classList.add('leftToRightTranslate');
    this.refs.backImage.refs.page.classList.add('leftToRightTranslate');
    if (this.state.activeImage === 0) {
      this.setState({ activeImage: 2 });
    } else {
      this.setState({ activeImage: (this.state.activeImage - 1) % images.length });
    }
    this.refs.image.refs.page.addEventListener('webkitAnimationEnd', this.backImage, false);
  }

  renderImagePage({ index, ref }) {
    const { images } = this.props;
    return (
      <ImagePage
        ref={ref}
        image={images[index % images.length]}
      />
    );
  }

  render() {
    const { images } = this.props;
    return (
      <div className="viewPager">
        <div ref="imageList" className="imageList">
          {this.renderImagePage({
            index: this.state.activeImage,
            ref: 'image'
          })
          }
          {this.renderImagePage({
            index: this.state.activeImage + 1,
            ref: 'backImage'
          })
          }
        </div>
        <div className="leftButton" >
          <img
            onClick={this.moveDown.bind(this)}
            src={leftArrow}
            className="image"
            alt="leftButton"
          />
        </div>
        <div className="rightButton" >
          <img
            onClick={this.moveUp.bind(this)}
            src={rightArrow}
            className="image"
            alt="rightButton"
          />
        </div>
        <div className="pageIndicatorContainer">
          <PageIndicator index={this.state.activeImage % images.length} numberOfPages={images.length} />
        </div>
      </div>
    );
  }
}

export default ImageViewPager;
