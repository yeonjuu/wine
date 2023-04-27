import styled, { keyframes } from 'styled-components';
import React from 'react';
import { Skeleton } from '@mui/material';

export const Loading = ({ size }) => {
  let content = [];
  for (let i = 0; i < size; i++) {
    content.push(<LoadingCard key={i} />);
  }

  return <>{content}</>;
};

const LoadingCard = () => {
  return (
    <Wrapper>
      <Skeleton sx={{ bgcolor: 'grey.100' }} variant="rounded" width={250} height={300} animation="wave" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 300px;
  height: 408px;
  margin: 10px;
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
