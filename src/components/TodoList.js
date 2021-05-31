import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="cleaning room" done={true} ></TodoItem>
      <TodoItem text="feeding cat" done={true} ></TodoItem>
      <TodoItem text="work out" done={false} ></TodoItem>
      <TodoItem text="study hard" done={true} ></TodoItem>
    </TodoListBlock>
  );
}

export default TodoList;

