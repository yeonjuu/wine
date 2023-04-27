import React from 'react';
import styled from 'styled-components';

const MoveTop = () => {
  const clickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return <Fixed onClick={clickHandler}>⬆</Fixed>;
};

export default MoveTop;

const Fixed = styled.button`
  position: sticky;
  bottom: 15px;
  left: 100%;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  background-color: #ffffff;
  font-size: 1.2em;
  text-align: center;
  border-radius: 50%;
  border: none;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
  transition: 1s ease-in;
  :hover {
    background-color: #f4f4f4;
  }
`;
