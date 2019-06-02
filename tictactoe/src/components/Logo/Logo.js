import React from 'react';
import styled from 'styled-components';
import logo from '../../lib/images/logo.png';
import { transparentBackground } from '../../lib/styles/variables';

const Logo = () => {
  return (
    <StyledImg src={logo} alt="Logo" />
  );
};

const StyledImg = styled.img`
  max-height: 300px;
  background-color: ${transparentBackground};
  border-radius: 20%;
  margin-bottom: 20px;
`;

export default Logo;