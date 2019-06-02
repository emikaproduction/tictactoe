import React from 'react';
import styled from 'styled-components';
import { generalBlue, generalRed } from './../../lib/styles/variables';

const Status = ({ currentPlayer, playerName, isWinner }) => {
  return (
    <StyledStatus className={currentPlayer + (isWinner ? ' winner' : ' ')}>
      Gracz {playerName} {isWinner && 'Wygrał!'}
    </StyledStatus>
  );
}

const StyledStatus = styled.div`
  padding: 10px 15px;
  font-size: 2em;
  color: white;
  margin-bottom: 15px;
  &.firstPlayer {
    background-color: ${generalRed};
  }
  &.secondPlayer {
    background-color: ${generalBlue};
  }
  &.winner {
    background-color: green;
  }
`;

export default Status;
