import styled from 'styled-components';
import React from 'react';
import { Rating } from '@mui/material';

const Wine = ({ data }) => {
  //rating 게이지가 희미하게 보여서 일부 차감
  let avg = data.rating?.average >= 4.8 ? data.rating?.average - 0.1 : data.rating?.average;
  const clickHandler = () => {
    alert(`Do you want to buy this wine?`);
  };
  const errorHandler = (e) => {
    e.target.src = '../image/placeholder.png';
  };

  return (
    <Card>
      <WineWrapper>
        <WineImage>
          <img src={data.image} alt={`${data.wine} 와인 사진`} onError={errorHandler} />
        </WineImage>
        <InfoWrapper>
          <span>{data.id}</span>
          <br></br>
          <span>{data.wine}</span>
          <br />
          <span>{data.location}</span>
        </InfoWrapper>
      </WineWrapper>
      <Back>
        <div>{data.wine}</div>
        <div>
          {data.rating?.average} ({data.rating?.reviews})
        </div>
        <Rating name="read-only" value={avg} precision={0.1} readOnly />
        <div></div>
        <StyledBtn onClick={clickHandler}>Purchase</StyledBtn>
      </Back>
    </Card>
  );
};

export const Card = styled.div`
  width: 300px;
  height: 408px;
  margin: 10px;
  position: relative;
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  transform-style: preserve-3d;
  transition: 1s ease-in;

  :hover {
    transform: rotateY(180deg);
  }
`;
export const WineImage = styled.div`
  width: 250px;
  height: 300px;
  padding: 5px;
  > img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  margin: 0 auto;
`;
const InfoWrapper = styled.div`
  text-align: center;
  padding: 10px;
`;
const WineWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  backface-visibility: hidden;
`;
const Back = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  > div {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`;

const StyledBtn = styled.button`
  width: 50%;
  hegiht: auto;
  font-size: 1.1rem;
  border: none;
  padding: 10px;
  border-radius: 10px;
  background-color: darkcyan;
  transition: 1s;

  :hover {
    background-color: #327676;
  }
`;

Wine.defaultProps = {
  data: {
    image: null,
    id: null,
    wine: '',
    location: '',
  },
};

export default Wine;
