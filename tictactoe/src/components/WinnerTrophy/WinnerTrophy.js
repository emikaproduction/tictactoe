import React from 'react';
import styled from 'styled-components';
import trophyLogo from '../../lib/images/trophy-icon.png';
import { boxShadow } from '../../lib/styles/variables';

const WinnerTrophy = ({ playerName }) => {
  return (
    <React.Fragment>
      <StyledImg src={trophyLogo} alt="Trofeum zwycięzcy" />
      <StyledSpan>Wygrał <br />{playerName}</StyledSpan>
    </React.Fragment>
  );
};

const StyledImg = styled.img`
  position: absolute;
  max-height: 300px;
  border-radius: 20%;
  margin-bottom: 20px;
  -webkit-animation-name: example; 
  -webkit-animation-duration: 2s;
  animation-name: bounce;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;

  @keyframes bounce {
    0%   {
      transform: rotate(0deg) scale(1, 1);
    }
    25%  {
      transform: rotate(20deg) scale(1.2, 1.2);
    }
    50%  {
      transform: rotate(0deg) scale(1, 1);
    }
    75%  {
      transform: rotate(-20deg) scale(1.2, 1.2);
    }
  }
`;

const StyledSpan = styled.span`
  position: absolute;
  background: white;
  padding: 10px 15px;
  font-size: 2em;
  box-shadow: ${boxShadow};
`;

export default WinnerTrophy;