import React, { useContext } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { ContextData } from '../App';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const [state, dispatch] = useContext(ContextData);
  return (
    <TodoListBlock>
      {state.itemList.map(item =>
        (<TodoItem id={item.id} text={item.text} done={item.done} />)
      )}
    </TodoListBlock>
  );
}

export default TodoList;

