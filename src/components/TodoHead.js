import React from 'react';
import styled from 'styled-components';

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
  return (
    <TodoHeadBlock>
      <div className="date">2021년 5월 30일</div>
      <div className="day">수요일</div>
      <div className="left-tasks">할 일 1개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
