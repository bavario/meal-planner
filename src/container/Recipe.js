import React from 'react';
import { connect } from 'react-redux';

import {
  Page,
  Card,
  ProgressCircular,
} from 'react-onsenui';

import styles from './Recipe.module.scss';

import NavBar from '../components/NavBar';
import Ingredient from '../components/Ingredient';

const Recipe = ({
  navigator,
  recipe
}) => {
  const {
    loading,
    _id,
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

  const tbiFunc = () => {
    alert('tbi');
  };

  return (
    <Page renderToolbar={() => <NavBar title={name} navigator={navigator} backButton={true} editFunc={tbiFunc} useFunc={tbiFunc}/>}>
      {loading ? (
        <ProgressCircular/>    
      ) : (
        <Card className={styles.card}>
          <img src={img} alt={name} className={styles.stage}/>
          <div class='title'>{name} - {type}</div>
          <div class='subtitle'>
            {cookingCount} mal gekocht. {duration} Minuten.
          </div>

          <h3>Zutaten</h3>
          {ingredientList}

          <h3>Zubereitung</h3>
          {makingList}
        </Card>    
      )}  
    </Page>
  );
};

const mapStateToProps = (state) => ({
  recipe: state.recipe
});

export default connect(mapStateToProps)(Recipe);