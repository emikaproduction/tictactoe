import React from 'react';
import styled from 'styled-components';

const SingleBox = ({ value }) => {
  const handleOnClick = () => {
    console.log(value);
  }
  return (
    <Box className="singleBox" onClick={handleOnClick}></Box>
  );
}

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  font-size: 3em;
`;

export default SingleBox;
