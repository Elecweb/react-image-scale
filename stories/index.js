import React from 'react';
import { storiesOf } from "@storybook/react";
import { ImageScale } from '../src';
import example1Img from './images/example1.jpg';
import example2Img from './images/example2.jpg';

storiesOf('ImageScale', module)
  .add('contailer(landscape) image(landscape)', () => <ImageScale src={example1Img} width={700} height={300} />)
  .add('contailer(landscape) image(portrait)', () => <ImageScale src={example2Img} width={700} height={300} />)
  .add('contailer(portrait) image(landscape)', () => <ImageScale src={example1Img} width={300} height={500} />)
  .add('contailer(portrait) image(portrait)', () => <ImageScale src={example2Img} width={300} height={500} />)
  .add('custom', () => {
    return (
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, .5)',
        padding: 20
      }}> 
      <ImageScale
        src={example2Img}
        width="100%"
        height={500}
        style={{
          boxSizing: 'border-box',
          boxShadow: '0 0 4px rgba(0,0,0,.5)',
          border: '2px solid #ffffff'
        }}
      />
      </div>
    );
  })
