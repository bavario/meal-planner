import React from 'react';
import { connect } from 'react-redux';

import {
  List,
  Page
} from 'react-onsenui';

import RecipeListItem from './RecipeListItem';
import NavBar from '../components/NavBar';

const RecipeList = ({recipes, navigator}) => {
  const tbiFunc = () => {
    alert('tbi');
  };

  return (
    <Page renderToolbar={() => <NavBar title='Rezepte' navigator={navigator} searchFunc={tbiFunc} addFunc={tbiFunc}/>}>
      <List
        dataSource={recipes}
        renderRow={(recipe) => (
          <RecipeListItem 
            key={recipe.id}  
            navigator={navigator}
            {...recipe}
          />
        )}
      />
    </Page>
  );
};

const mapStateToProps = (state) => ({
  recipes: state.recipes
});

export default connect(mapStateToProps)(RecipeList);