import React from 'react';
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
    1: '#ced4da',
    2: '#38d9a9',
    3: '#495057',
    4: '#63e6be',
    5: '#20c997',
    6: '#f8f9fa',
    7: '#dee2e6'
  } 
}

const GlobalStyle = createGlobalStyle`
  body {
    background: ${theme.palette.lightGray};
  }
`;

function App() {
  return (
    <>
      <ThemeProvider theme={theme} >
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead></TodoHead>
          <TodoList></TodoList>
          <TodoCreate></TodoCreate>
        </TodoTemplate>
      </ThemeProvider>
    </>
  );
}

export default App;
