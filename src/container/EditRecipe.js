import React, { useState } from 'react';
import { connect } from 'react-redux';

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
  navigator,
  recipe
}) => {
  const {
    loading,
    _id,
    //duration,
    //name,
    //img,
    //cookingCount,
    //type,
    //ingredients ,
    //making
  } = recipe; 
  
  //TODO map props to state and other direction on push that we can use edit and new within the same form
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [duration, setDuration] = useState();
  const [type, setType] = useState();
  const [making, setMaking] = useState();
  const [cookingCount, setCookingCount] = useState();


  const tbiFunc = () => {
    alert('tbi');
  };

  const saveFunction = () => {

  }

  return (
    <Page renderToolbar={() => <NavBar title={name} navigator={navigator} backButton={true} editFunc={tbiFunc} useFunc={tbiFunc}/>}>
      {loading ? (
        <ProgressCircular/>    
      ) : (
        <Card className={styles.card}>
          <div class='title'>Rezept anlegen / bearbeiten</div>
          
          <Input
            value={name} 
            float
            onChange={(e) => { this.setName(e.target.value)} }
            modifier='material'
            placeholder='Name' />

          <Input
            value={desc} 
            float
            onChange={(e) => { this.setDesc(e.target.value)} }
            modifier='material'
            placeholder='Beschreibung' />

          <Input
            value={duration} 
            float
            onChange={(e) => { this.setDuration(e.target.value)} }
            modifier='material'
            placeholder='Name' />

          <Input
            value={type} 
            float
            onChange={(e) => { this.setType(e.target.value)} }
            modifier='material'
            placeholder='Typ' />

          <Select 
            modifier="material"
            value={type}
            onChange={(e) => this.setType(e.target.value)}>
            <option value="MAIN_DISH">Hauptspeise</option>
            <option value="SIDE_DISH">Beilage</option>
            <option value="STARTER">Vorspeise</option>
            <option value="SOUP">Suppe</option>
            <option value="DESSERT">Nachspeise</option>
          </Select>  

          <Input
            value={making} 
            float
            onChange={(e) => { this.setMaking(e.target.value)} }
            modifier='material'
            placeholder='Zubreitung' />

          <Input
            value={cookingCount} 
            float
            onChange={(e) => { this.setCookingCount(e.target.value)} }
            modifier='material'
            placeholder='Wie oft gekocht?' />   

          <Button modifier="large--cta" onClick={this.saveFunction}>
            Speichern
          </Button>         
        </Card>    
      )}  
    </Page>
  );
};

const mapStateToProps = (state) => ({
  recipe: state.recipe
});

export default connect(mapStateToProps)(EditRecipe);