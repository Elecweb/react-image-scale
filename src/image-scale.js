import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { checkIsPortrait, flexAlign } from './utils';

class ImageScale extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    align: PropTypes.oneOf(['start', 'center', 'end']),
    containerProps: PropTypes.object,
    src: PropTypes.string
  };

  static defaultProps = {
    align: 'center',
    containerProps: {}
  };

  state = {
    hasLoadedImage: false
  };

  componentDidMount() {
    const srcImg = new Image();
    const { src: imgSrc } = this.props;
    srcImg.src = imgSrc;
    srcImg.onload = ({ target: img }) => {
      this.scaleImage(img);
      this.imgRef.src = imgSrc;
      this.setState({
        hasLoadedImage: true
      });
    };
  }

  scaleImage = imgInstance => {
    const { align } = this.props;
    const imgWidth = imgInstance.naturalWidth;
    const imgHeight = imgInstance.naturalHeight;
    const containerWidth = this.containerRef.offsetWidth;
    const containerHeight = this.containerRef.offsetHeight;
    const isPortrait = checkIsPortrait(
      imgWidth,
      imgHeight,
      containerWidth,
      containerHeight
    );
    this.containerRef.style.display = 'flex';
    if (isPortrait) {
      this.imgRef.style.width = 'auto';
      this.imgRef.style.height = '100%';
      this.containerRef.style.justifyContent = flexAlign[align];
    } else {
      this.imgRef.style.width = '100%';
      this.imgRef.style.height = 'auto';
      this.containerRef.style.alignItems = flexAlign[align];
    }
  };

  render() {
    const {
      width,
      height,
      containerProps: contProps = {},
      ...restProps
    } = this.props;
    const { hasLoadedImage } = this.state;
    const imgProps = hasLoadedImage ? {
      ...restProps,
      width: undefined,
      height: undefined,
      src: undefined
    } : {};

    const containerStyle = contProps.style || {};

    const containerProps = {
      ...contProps,
      style: {
        width,
        height,
        ...containerStyle
      }
    };

    return (
      <div
        {...containerProps}
        ref={containerRef => {
          this.containerRef = containerRef;
        }}
      >
      <img
        alt=""
        {...imgProps}
        ref={imgRef => {
          this.imgRef = imgRef;
        }}
      />
      </div>
    );
  }
}

export default ImageScale;
