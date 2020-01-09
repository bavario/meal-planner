  

import { combineReducers } from 'redux';

import { 
  ADD_RECIPE, 
  REMOVE_RECIPE,
  LOAD_RECIPE,
  FETCHED_RECIPE, 
} from './Actions';

/** recipe-list reducers */
const initialState = [{
    id: 0,
    name: 'Fleischpflanzerl',
    cookingCount: 5,
    type: 'MAIN_DISH',
    thump: null
  }, {
    id: 1,
    name: 'Gulasch',
    cookingCount: 1337,
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

const recipes = (state = initialState, action) => {

  switch (action.type) {
    case ADD_RECIPE:
      return state; //TODO
    case REMOVE_RECIPE:
      return state.filter(recipe => recipe.id !== action.id);
    default:
      return state;
  }
};

/** recipe reducers */
const recipeInitState = {
  loading: false,
  id: 1,
  name: 'Gulasch',
  desc: 'Mein allerliebstes Leibgericht wird jetzt beschreiben',
  img: null,
  cookingCount: 1337,
  type: 'MAIN_DISH',
  ingredients: [{
      id: 0,
      name: 'Rindergulasch',
      weight: '500'
      //amount: null
    }, {
      id: 1,
      name: 'Zwiebel',
      amount: '1'
    }
  ]
}

const recipe = (state = recipeInitState, action) => {
  switch (action.type) {
    case LOAD_RECIPE:
      state.loading = true;
      return state; 
    case FETCHED_RECIPE:
      state = action.recipe;
      state.loading = false;
      return state;
    default:
      return state;
  }
};

const mealPlannerApp = combineReducers({
  recipes,
  recipe
});

export default mealPlannerApp;