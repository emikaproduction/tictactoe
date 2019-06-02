import React from 'react';
import { withRouter } from "react-router-dom";
import routePaths from '../../lib/constans/routePaths';
import styled from 'styled-components';
import Logo from '../Logo';
import { transparentBackground, generalBlue, boxShadow } from '../../lib/styles/variables';

class FormName extends React.Component {
  state = {
    firstPlayer: '',
    secondPlayer: '',
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    const { firstPlayer, secondPlayer } = this.state;

    event.preventDefault();
    this.props.history.push({
      pathname: routePaths.game,
      state: {
        firstPlayer,
        secondPlayer,
      },
    });
  }

  render(){
    return (
      <StyledFormContainer>
        <Logo />
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledLabel>
            Imię pierwszego gracza:
            <StyledInput
              type="text"
              name="firstPlayer"
              onChange={this.handleChange}
              required
            />
          </StyledLabel>
          <StyledLabel>
            Imię drugiego gracza:
            <StyledInput
              type="text"
              name="secondPlayer"
              onChange={this.handleChange}
              required
            />
          </StyledLabel>
          <StyledButton type="submit" value="Submit">Zagraj!</StyledButton>
        </StyledForm>
      </StyledFormContainer>
    );
  }
};

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: ${transparentBackground};
  box-sizing: border-box;
  border-radius: 40px;
  padding: 2em;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
`;

const StyledInput = styled.input`
  display: flex;
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: ${boxShadow};
`;

const StyledButton = styled.button`
  cursor: pointer;
  margin: 10px 0;
  border: none;
  box-shadow: ${boxShadow};
  border-radius: 3px;
  padding: 10px;
  background-color: ${generalBlue};
  color: white;
  font-size: 1em;
`;

export default withRouter(FormName);
