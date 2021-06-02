import React, { useContext } from 'react';
import styled from 'styled-components';
import { ContextData } from '../App';

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
  const [state] = useContext(ContextData);

  const date = new Date().toLocaleDateString("ko-KR", {timeZone: "Asia/Seoul"});

  const day = new Date().toLocaleString("ko-KR", { weekday: 'long'});

  const countLeftTasks = () => {
    const leftList = state.itemList.filter(item => item.done === false);
    console.log(leftList);
    return leftList.length;
  };

  return (
    <TodoHeadBlock>
      <div className="date">{date}</div>
      <div className="day">{day}</div>
      <div className="left-tasks">할 일 {countLeftTasks()}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
