export const REMOVE_RECIPE = 'REMOVE_RECIPE';
export const ADD_RECIPE = 'ADD_RECIPE';
export const LOAD_RECIPE = 'LOAD_RECIPE';
export const FETCHED_RECIPE = 'FETCHED_RECIPE';
export const FETCHED_RECIPES = 'FETCHED_RECIPES';

export const loadRecipes = () => async dispatch => {

  fetch('http://localhost:3001/recipes')
    .then(
      function(response) {
        if (response.status !== 200) {
          //error handling
          console.log('fetch recipe !== 200')
          return [];
        }

        // Examine the text in the response
        response.json().then(function(data) {
          console.log(data);
          dispatch(recipesLoaded(data.data));
        });
      }
    )
    .catch(function(err) {
      //errorhandling
      console.log('Fetch Error :-S', err);
      return [];
    }
  );
};

export const recipesLoaded = data => ({
  type: FETCHED_RECIPES,
  data: data
});

export const removeRecipe = id => ({
  type: REMOVE_RECIPE,
  id
});

export const addRecipe = (id, name) => ({
  type: ADD_RECIPE,
  id: 'asdaTODO',
  name: name
});

export const doLoadRecipe = (id) => async dispatch => {
  dispatch(loadRecipe());

  fetch('http://localhost:3001/recipes/' + id)
    .then(
      function(response) {
        if (response.status !== 200) {
          //error handling
          console.log('fetch recipe !== 200')
          return {};
        }

        // Examine the text in the response
        response.json().then(function(data) {
          console.log(data);
          return {
            type: FETCHED_RECIPE,
            recipe: data
          };
        });
      }
    )
    .catch(function(err) {
      //errorhandling
      console.log('Fetch Error :-S', err);
      return {};
    }
  );

  return {};
};

export const loadRecipe = () => ({
  type: LOAD_RECIPE,
});