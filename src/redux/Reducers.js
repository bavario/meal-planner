  

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
  img: 'https://ef-magazin.de/media/assets/article/2018/07/shutterstock_778711630.jpg.940x450_q75_box-0%2C562%2C6016%2C3446_crop_detail.jpg',
  cookingCount: 1337,
  duration: 120,
  type: 'MAIN_DISH',
  ingredients: [{
      id: 0,
      name: 'Rindergulasch',
      amount: '500',
      unit: 'g'
    }, {
      id: 1,
      name: 'Zwiebel',
      amount: '1',
      unit: ''
    }
  ],
  making: [
    'Bavaria ipsum dolor sit amet af Schaung kost nix Gamsbart. Biazelt baddscher Spezi, unbandig! Do i Sauwedda wolpern glei wia da Buachbinda Wanninger heid gfoids ma sagrisch guad mi, Ledahosn o’ha no. Zidern .',
    'Broadwurschtbudn sammawiedaguad a liabs Deandl Weißwiaschd, des basd scho Kuaschwanz d’ Freibia de de Mongdratzal. Almrausch sammawiedaguad sauba du dadst ma scho daugn back mas Hetschapfah a Hoiwe g’hupft wia gsprunga Edlweiss.',
    'Nackata mim hi mei, oa trihöleridi dijidiholleri o’ha Bladl gscheckate Bradwurschtsemmal. I moan oiwei amoi do wea nia ausgähd, kummt nia hoam nix Gwiass woass ma ned Mongdratzal Spotzerl wo hi Ledahosn Xaver?',
    'Biazelt Spotzerl Gaudi wui, obacht. Is bittschön Milli singan Xaver hob d’ Maderln af mi. Obandln umananda mim kumm geh, om auf’n Gipfe!',
    'Trachtnhuat Prosd Weibaleid, iabaroi: A bissal wos gehd ollaweil sodala back mas zua, i bin a woschechta Bayer hogg ma uns zamm Prosd Woibbadinga. Oachkatzlschwoaf Bussal a ganze Hoiwe greaßt eich nachad helfgod Landla auf’d Schellnsau, mi.'
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