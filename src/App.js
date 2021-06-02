import React, { useReducer } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

const theme = {
  palette: {
    lightGray: '#e9ecef',
    darkGray: '#343a40',
    gray: '#868e96',
    cyan: '#20c997',
    pink: '#ff6b6b',
  } 
}

const GlobalStyle = createGlobalStyle`
  body {
    background: ${theme.palette.lightGray};
  }
`;

function reducer(state, action) {
  switch(action.type) {
    case 'ADD':
      return { ...state, lastId: state.lastId+1, itemList: [...state.itemList, { id: state.lastId+1, done: false, text: action.text }] };
    case 'DONE':
      return { ...state, itemList: state.itemList.map(item => 
        item.id === action.selectedId ? {...item, done: !item.done} : item)
      };
    case 'REMOVE':
      return { ...state, itemList: state.itemList.filter(item => 
        item.id !== action.selectedId)
      };
    default: 
      return state;
  }
}

const defaultState = {
  lastId: 2,
  itemList: [
    {
      id: 0,
      done: true,
      text: 'cleaning room',
    },
    {
      id: 1,
      done: true,
      text: 'feeding cat',
    },
    {
      id: 2,
      done: false,
      text: 'work out',
    }
  ]
}

export const ContextData = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  // const test = () => {
  //   dispatch()
  // };
  return (
    <>
      <ThemeProvider theme={theme} >
        <ContextData.Provider value={[state, dispatch]}>
          <GlobalStyle />
            <TodoTemplate>
              <TodoHead></TodoHead>
                <TodoList></TodoList>
                  <TodoCreate></TodoCreate>
          </TodoTemplate>
        </ContextData.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
