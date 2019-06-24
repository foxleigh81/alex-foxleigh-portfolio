import React from 'react'

export const Store = React.createContext();

const initialState = {
  config: [],
  brands: [],
  segments: [],
  feedback: [],
  form: [],
}

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_CONFIG':
      return { ...state, config: action.payload };
    case 'FETCH_BRANDS':
      return { ...state, brands: action.payload };
    case 'FETCH_SEGMENTS':
      return { ...state, segments: action.payload };
    case 'FETCH_FEEDBACK':
      return { ...state, feedback: action.payload };
    case 'FETCH_FORM':
      return { ...state, form: action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}
  </Store.Provider>
}