import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import styled from 'styled-components';
import Board from '../../components/Board';
import routePaths from '../../lib/constans/routePaths';

const Game = (props) => {
  let [currentPlayer, setCurrentPlayer] = useState('firstPlayer');

  function togglePlayer() {
    setCurrentPlayer(currentPlayer === 'firstPlayer' ? 'secondPlayer' : 'firstPlayer');
  }

  if (!props.location.state) {
    props.history.push(routePaths.home);

    return null;
  };

  return (
    <StyledDiv>
      <Board togglePlayer={togglePlayer} currentPlayer={currentPlayer} playerName={props.location.state[currentPlayer]} />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  text-align: center;
`;

export default withRouter(Game);
