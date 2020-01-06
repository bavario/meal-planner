  

import { combineReducers } from 'redux';

import { 
  ADD_RECEIP, 
  REMOVE_RECEIP 
} from './Actions';

const initialState = [
  {
    id: 0,
    name: 'Fleischpflanzerl',
    rating: 5,
    thump: null
  },
  {
    id: 1,
    name: 'Gulasch',
    rating: 5,
    thump: null
  },
  {
    id: 2,
    name: 'Schnitzel',
    rating: 3,
    thump: null
  }
];

 const receips = (state = initialState, action) => {
   console.log (state);
  switch (action.type) {
    case ADD_RECEIP:
      return {
        ...state,
      };
    case REMOVE_RECEIP:
      const {...rest} = state;
      delete rest[action.id];
      return rest;
    default:
      return state;
  }
};

const mealPlannerApp = combineReducers({
  receips,
});

export default mealPlannerApp;