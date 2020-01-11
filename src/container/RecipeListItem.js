import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ListItem, Icon } from 'react-onsenui';
import { platform } from 'onsenui';

import * as Actions from '../redux/Actions';
import Recipe from './Recipe';

const styles = {
  weatherIcon: {
    color: '#fff',
    textAlign: 'center',
    width: platform.isAndroid() ? '36px' : '30px',
    height: platform.isAndroid() ? '36px' : '30px',
    lineHeight: platform.isAndroid() ? '36px' : '30px',
    borderRadius: '6px',
    fontSize: platform.isAndroid() ? '16px' : '14px'
  },
  buttons: {
    fontSize: '20px',
    color: '#cacaca'
  },
  removeButton: {
    margin: '0 10px 0 0'
  }
};

const RecipeListItem = ({
  id,
  name,
  cookingCount,
  type,
  thump,
  navigator,
  actions,
  loadRecipe
}) => {

  return (
    <ListItem tappable={true} onClick={(e) => {
        e.stopPropagation();
        actions.doLoadRecipe(id);
        navigator.pushPage({component: Recipe});
      }}
    >
      <div className='left'>
        <img class="list-item__thumbnail" src="https://placekitten.com/g/40/40" alt="{name}"/>
      </div>
      <div className='center'>
        <div className='list-item__title'>
          {name}
        </div>
        <div className='list-item__subtitle'>
          {type === 'MAIN_DISH' ? 'Hauptgericht' : 'Beilage'}, {cookingCount} mal gekocht. 
        </div>
      </div>
      <div className='right' style={styles.buttons}>
        <div onClick={(e) => {
          e.stopPropagation();
          actions.removeRecipe(id);
        }}>
          <Icon icon='trash' className='weather-button' style={styles.removeButton} />
        </div>
      </div>
    </ListItem>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(RecipeListItem);