import React from 'react';
import styled from 'styled-components';
import xIcon from '../../../lib/images/x-icon.png';
import oIcon from '../../../lib/images/o-icon.png';

const SingleBox = props => {
  const { handleOnClick, value } = props;

  return (
    <StyledButton value={value} onClick={handleOnClick} />
  );
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: white;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  font-size: 3em;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:focus {
    outline: none;
  }
  &.firstPlayer {
    background-image: url('${xIcon}');
    background-size: 100%;
    &:hover {
      background-color: white;
      cursor: default;
    }
  }
  &.secondPlayer {
    background-image: url('${oIcon}');
    background-size: 100%;
    &:hover {
      background-color: white;
      cursor: default;
    }
  }
`;

export default SingleBox;