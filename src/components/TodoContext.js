import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialTodos = [
  {
    id: 1,
    text: 'cleaning room',
    done: true,
  },
  {
    id: 2,
    text: 'styling component',
    done: true,
  },
  {
    id: 3,
    text: 'making Context',
    done: false,
  },
  {
    id: 4,
    text: 'implementing function',
    done: false,
  }
];

function todoReducer(state, action) {
  switch(action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo => 
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo =>
        todo.id !== action.id
      );
    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
}

const TodoStatefContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);
  return (
    <TodoStatefContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch} >
        <TodoNextIdContext.Provider value={nextId} >
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStatefContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStatefContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}
