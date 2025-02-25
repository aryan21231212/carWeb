import React from 'react'
import styled from 'styled-components'
import video1 from '/public/video1.mp4'
import image1 from '/public/image1.png'
import image2 from '/public/image2.png'
import image3 from '/public/image3.png'

const Background = ({ herocount, play }) => {
  let background = null;

  if (!play) {
    
    if (herocount === 0) {
      background = <img src={image1} alt="Background Image 1" />;
    } else if (herocount === 1) {
      background = <img src={image2} alt="Background Image 2" />;
    } else if (herocount === 2) {
      background = <img src={image3} alt="Background Image 3" />;
    }
  } else {
    background = (
      <video loop autoPlay muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  }

  return <Container>{background}</Container>;
};

export default Background;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -3;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  img, video {
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
`;
