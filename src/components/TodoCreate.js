import React, { useState, useContext } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { lighten, darken } from 'polished';
import { ContextData } from '../App';

const CircleButton = styled.button`
  background: ${props => props.theme.palette.cyan};
  &:hover {
    background: ${props => lighten(0.2, props.theme.palette.cyan)};
  }
  &:active {
    background: ${props => darken(0.2, props.theme.palette.cyan)};
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props => 
    props.open && 
    css`
      background: ${props => props.theme.palette.pink};
      &:hover {
        background: ${props => lighten(0.2, props.theme.palette.pink)};
      }
      &:active {
        background: ${props => darken(0.2, props.theme.palette.pink)};
      }
      transform: translate(-50%, 50%) rotate(135deg);
    `
  }
`;

const InsertFormContainer = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  padding: 32px 32px 72px 32px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid ${props => props.theme.palette.lightGray};
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.palette.lightGray};
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [state, dispatch] = useContext(ContextData);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD', text: input });
    setInput('');
    setOpen(false);
  };
  
  return (
  <>
    {open && (
      <InsertFormContainer>
        <InsertForm onSubmit={handleSubmit}>
          <Input value={input} onChange={handleChange} autoFocus placeholder="Enter a to-do and press Enter"></Input>
        </InsertForm>
      </InsertFormContainer>
    )}
    <CircleButton onClick={() => setOpen(!open)} open={open}>
      <MdAdd />
    </CircleButton>
  </>
  );
}

export default TodoCreate;

