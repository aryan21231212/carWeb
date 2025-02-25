
import styled from 'styled-components';
import arrow from '/public/arrow_btn.png';
import play1 from '/public/play_icon.png';
import pause from '/public/pause_icon.png';


const Hero = ({ arr, play, setplay, setherocount }) => {
  
  const playbut = () => {
    setplay(prevPlay => !prevPlay); 
  };

  return (
    <Container>
      <div className="content">
        <p>{arr.first}</p>
        <p>{arr.second}</p>
        <div className="bot">
          <p>Explore the features</p>
          <img src={arrow} alt="Arrow" />
        </div>
      </div>
      <div className="play">
        <span>
          <img onClick={playbut} src={play ? pause : play1} alt={play ? 'Pause' : 'Play'} />
        </span>
        <span>see the video</span>
      </div>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  margin-left: 5rem;
  color: white;
  margin-top: 16rem;

  .content p {
    font-size: 70px;
    font-weight: 400;
    line-height: 80px;
  }

  .bot {
    margin-top: 2.5rem;
    display: flex;
    background-color: white;
    color: black;
    width: 300px;
    align-items: center;
    justify-content: space-around;
    padding: 1px 0;
    border-radius: 2.6rem;
  }

  .bot p {
    font-size: 1rem;
  }

  .bot img {
    height: 60px;
    object-fit: cover;
    margin-left: 20px;
  }

  .play {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 3rem;
    right: 5rem;
    font-size: 1.2rem;
  }

  .play span img {
    height: 60px;
    object-fit: cover;
  }

  span {
    margin-left: 1rem;
  }
`;
