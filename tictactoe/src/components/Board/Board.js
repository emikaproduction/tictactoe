import React from 'react';
import SingleBox from './SingleBox';
import styled from 'styled-components';
import checkWinner from '../../lib/utils/checkWinner';
import Status from '../../components/Status';
import WinnerTrophy from '../../components/WinnerTrophy';

export default class Board extends React.Component {
  state = {
    firstPlayer: [],
    secondPlayer: [],
    isWinner: false,
  }

  handleOnClick = (box, e) => {
    const { togglePlayer, currentPlayer } = this.props;
    const { isWinner } = this.state;
    const choosedBox = this.state.firstPlayer.concat(this.state.secondPlayer);
    const isCheckedBox = choosedBox.find(chooseBox => chooseBox === box);
    
    if (typeof isCheckedBox !== 'undefined' || isWinner) {
      return false;
    }

    e.target.classList.add(currentPlayer);
    this.setState({
      [currentPlayer]: [...this.state[currentPlayer], box]
    }, () => checkWinner(this.state[currentPlayer], this.handleIsWinner));
    togglePlayer();
  }

  handleIsWinner = () => {
    const { togglePlayer } = this.props;
    this.setState({isWinner: true});

    togglePlayer();
  }

  renderBoxes = (boxes) => {
    const renderedBoxes = boxes.map((box, index) => (
      <SingleBox key={box} handleOnClick={(e) => this.handleOnClick(box, e)}></SingleBox>
    ));

    return renderedBoxes;
  }

  render() {
    const boxes = [...Array(9).keys()];
    const { currentPlayer, playerName } = this.props;
    const { isWinner } = this.state;
    const renderedBoxes = this.renderBoxes(boxes);

    return (
      <StyledBoardContainer>
        <Status currentPlayer={currentPlayer} playerName={playerName} isWinner={isWinner} />
        {isWinner &&
          <WinnerTrophy playerName={playerName} />
        }
        <StyledBoard>
          {renderedBoxes}
        </StyledBoard>
      </StyledBoardContainer>
    )
  };
}

const StyledBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const StyledBoard = styled.div`
  display: inline-grid;
  grid-template-rows: 100px 100px 100px;
  grid-template-columns: 100px 100px 100px;
  grid-gap: 3px;
  padding: 15px;
`;
