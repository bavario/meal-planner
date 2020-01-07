import React from 'react';
import { connect } from 'react-redux';

import {
  List,
  Page
} from 'react-onsenui';

import ReceipListItem from './ReceipListItem';
import NavBar from '../components/NavBar';

const ReceipList = ({receips, navigator}) => {
  const tbiFunc = () => {
    alert('tbi');
  };

  return (
    <Page renderToolbar={() => <NavBar title='Rezepte' navigator={navigator} searchFunc={tbiFunc} addFunc={tbiFunc}/>}>
      <List
        style={{marginTop: 10}}
        modifier="inset"
        dataSource={receips}
        renderRow={(receip) => (
          <ReceipListItem 
            key={receip.id}  
            navigator={navigator}
            {...receip}
          />
        )}
      />
    </Page>
  );
};

const mapStateToProps = (state) => ({
  receips: state.receips
});

export default connect(mapStateToProps)(ReceipList);