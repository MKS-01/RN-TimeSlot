import React, {createContext, useContext, useReducer} from 'react';

export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

export const reducer = (slotState, action) => {
  switch (action.type) {
    case 'addDetails':
      return {
        ...slotState,
        // rowPosition: action.newRowPos,
      };

    default:
      return slotState;
  }
};
