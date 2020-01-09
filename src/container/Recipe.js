import React from 'react';
import { connect } from 'react-redux';

import {
  Page,
  Card,
  ProgressCircular,
} from 'react-onsenui';

import NavBar from '../components/NavBar';

const Recipe = ({
  navigator,
  recipe
}) => {
  const {
    loading,
    id,
    name,
    desc,
    img,
    cookingCount,
    type,
    ingredients 
  } = recipe; 
  
  return (
    <Page renderToolbar={() => <NavBar title={name} navigator={navigator} backButton={true} />}>
      {loading ? (
        <ProgressCircular/>    
      ) : (
        <Card>
          <div class='title'>{name} - {type}</div>
          <div class='subtitle'>{cookingCount} mal gekocht.</div>
          <p>{desc}</p>
          <img src={img} alt={name}/>
          Zutatenliste
        </Card>    
      )}  
    </Page>
  );
};

const mapStateToProps = (state) => ({
  recipe: state.recipe
});

export default connect(mapStateToProps)(Recipe);