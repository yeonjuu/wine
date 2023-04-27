import React, { cloneElement } from 'react';
import styled from 'styled-components';

const FlexLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default FlexLayout;

const Layout = styled.div`
  display: flex;
  width: 90%;
  min-width: 1280px;
  max-width: 1440px;
  height: auto;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: left;
`;
