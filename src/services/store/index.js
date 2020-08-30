import React, {createContext, useContext, useReducer} from 'react';

export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

export const reducer = (initialState, action) => {
  switch (action.type) {
    case 'addDetails':
      return {
        ...initialState,
        // console.log(action.newSlotData)
        slotData: action.newSlotData,
      };

    default:
      return initialState;
  }
};
