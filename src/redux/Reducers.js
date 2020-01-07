  

import { combineReducers } from 'redux';

import { 
  ADD_RECEIP, 
  REMOVE_RECEIP 
} from './Actions';

const initialState = [{
    id: 0,
    name: 'Fleischpflanzerl',
    cookingCount: 5,
    type: 'MAIN_DISH',
    thump: null
  }, {
    id: 1,
    name: 'Gulasch',
    cookingCount: 137,
    type: 'MAIN_DISH',
    thump: null
  }, {
    id: 2,
    name: 'Rösti',
    cookingCount: 3,
    type: 'SIDE_DISH',
    thump: null
  }
];


const receips = (state = initialState, action) => {
   console.log (state);
  switch (action.type) {
    case ADD_RECEIP:
      return this.state; //TODO
    case REMOVE_RECEIP:
      return state.filter(receip => receip.id !== action.id);
    default:
      return state;
  }
};

const mealPlannerApp = combineReducers({
  receips,
});

export default mealPlannerApp;