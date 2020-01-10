import React from 'react';
import { connect } from 'react-redux';

import {
  Page,
  Card,
  ProgressCircular,
} from 'react-onsenui';

import NavBar from '../components/NavBar';
import Ingredient from '../components/Ingredient';

const Recipe = ({
  navigator,
  recipe
}) => {
  const {
    loading,
    id,
    duration,
    name,
    img,
    cookingCount,
    type,
    ingredients ,
    making
  } = recipe; 
  
  const ingredientList = ingredients.map((ingredient) => {
    return <Ingredient {...ingredient}/>;
  })

  const makingList = making.map((step, index) => {
    return <><h4>{index + 1}. Schritt</h4><p>{step}</p></>;
  })


  return (
    <Page renderToolbar={() => <NavBar title={name} navigator={navigator} backButton={true} />}>
      {loading ? (
        <ProgressCircular/>    
      ) : (
        <Card>
          <img src={img} alt={name} style={{width: 'calc(100% + 32px)', margin: '-16px -16px 0 -16px', borderTopLeftRadius: '4px', borderTopRightRadius: '4px'}}/>
          <div class='title'>{name} - {type}</div>
          <div class='subtitle'>
            {cookingCount} mal gekocht. {duration} Minuten.
          </div>
          <h3>Zutaten</h3>
          {ingredientList}
          <h3>Zubereitung</h3>
          <p>{makingList}</p>
        </Card>    
      )}  
    </Page>
  );
};

const mapStateToProps = (state) => ({
  recipe: state.recipe
});

export default connect(mapStateToProps)(Recipe);