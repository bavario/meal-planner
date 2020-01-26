import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../redux/Actions';

import {
  Page,
  Card,
  ProgressCircular,
  Input,
  Select,
  Button
} from 'react-onsenui';

import styles from './Recipe.module.scss';

import NavBar from '../components/NavBar';
import Ingredient from '../components/Ingredient';

const EditRecipe = ({
  actions,
  navigator,
  recipe
}) => {
  /*const {
    //_id,
    //duration,
    //name,
    //img,
    //cookingCount,
    //type,
    //ingredients ,
    //making
  } = recipe; */
  
  //TODO map props to state and other direction on push that we can use edit and new within the same form
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [duration, setDuration] = useState('');
  const [type, setType] = useState('');
  const [making, setMaking] = useState('');
  const [cookingCount, setCookingCount] = useState('');



  const saveFunction = () => {
    const recipe = {
      name: name,
      desc: desc,
      duration: duration,
      type: type,
      cookingCount: cookingCount,
      making: making.split(';')
    }
    actions.addRecipe(recipe);
  }

  return (
    <Page renderToolbar={() => <NavBar title="TBD" navigator={navigator} backButton={true}/>}>
      <Card className={styles.card}>
        <div class='title'>Rezept anlegen / bearbeiten</div>
        
        <Input
          value={name} 
          float
          onChange={(e) => { setName(e.target.value)} }
          modifier='material'
          placeholder='Name' />

        <Input
          value={desc} 
          float
          onChange={(e) => { setDesc(e.target.value)} }
          modifier='material'
          placeholder='Beschreibung' />

        <Input
          value={duration} 
          float
          onChange={(e) => { setDuration(e.target.value)} }
          modifier='material'
          placeholder='Dauer' />

        <Select 
          modifier="material"
          value={type}
          onChange={(e) => setType(e.target.value)}>
          <option value="MAIN_DISH">Hauptspeise</option>
          <option value="SIDE_DISH">Beilage</option>
          <option value="STARTER">Vorspeise</option>
          <option value="SOUP">Suppe</option>
          <option value="DESSERT">Nachspeise</option> 
        </Select>  

        <Input
          value={making} 
          float
          onChange={(e) => { setMaking(e.target.value)} }
          modifier='material'
          placeholder='Zubreitung' />

        <Input
          value={cookingCount} 
          float
          onChange={(e) => { setCookingCount(e.target.value)} }
          modifier='material'
          placeholder='Wie oft gekocht?' />   

        <Button modifier="large--cta" onClick={saveFunction}>
          Speichern
        </Button>                 
      </Card>     
    </Page>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

/*const mapStateToProps = (state) => ({
  recipe: state.recipe
});*/

export default connect(undefined, mapDispatchToProps)(EditRecipe);