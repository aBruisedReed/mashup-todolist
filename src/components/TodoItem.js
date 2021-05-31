import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.palette.lightGray};
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.palette.pink};  
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.palette.lightGray};
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props => 
    props.done &&
    css`
      border-color: ${props => props.theme.palette.cyan};
      color: ${props => props.theme.palette.cyan};
    `
  }
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: ${props => props.theme.palette.gray};
  ${props => 
    props.done && 
    css`
  color: ${props => props.theme.palette.lightGray};
    `
  }
`;

function TodoItem({ id, done, text }) {
  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete></MdDelete>
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
