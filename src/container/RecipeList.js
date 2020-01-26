import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../redux/Actions';

import {
  List,
  Page
} from 'react-onsenui';

import RecipeListItem from './RecipeListItem';
import EditRecipe from './EditRecipe';
import NavBar from '../components/NavBar';

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.tbiFunc = this.tbiFunc.bind(this);
    this.addFunc = this.addFunc.bind(this);
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.loadRecipes();
  }

  addFunc() {
    const { navigator } = this.props;
    navigator.pushPage({component: EditRecipe});
  }
  
  tbiFunc() {
    alert('tbi');
  }

  render() {
    const { navigator, recipes } = this.props;

    return (
      <Page renderToolbar={() => <NavBar title='Rezepte' navigator={navigator} searchFunc={this.tbiFunc} addFunc={this.addFunc}/>}>
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
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

const mapStateToProps = (state) => ({
  recipes: state.recipes
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);