import React from 'react';
import styled from 'styled-components';
import { useTodoState } from './TodoContext';

const TodoHeadBlock = styled.div`
  padding: 28px 32px 24px 32px;
  border-bottom: 1px solid ${props => props.theme.palette.lightGray};
  
  .date {
    margin: 0;
    font-size: 36px;
    color: ${props => props.theme.palette.darkGray};
    font-weight: bold;
  }
  .day {
    margin-top: 4px;
    color: ${props => props.theme.palette.gray};
    font-size: 21px;
  }
  .left-tasks {
    color: ${props => props.theme.palette.cyan};
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);

  const today = new Date();
  const date = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const day = today.toLocaleString('ko-KR', { weekday: 'long' });

  return (
    <TodoHeadBlock>
      <div className="date">{date}</div>
      <div className="day">{day}</div>
      <div className="left-tasks">할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
