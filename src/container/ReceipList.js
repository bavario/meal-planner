import React from 'react';
import { connect } from 'react-redux';

import {
  List,
  Page
} from 'react-onsenui';

import ReceipListItem from './ReceipListItem';
import NavBar from '../components/NavBar';

const ReceipList = ({receips, navigator}) => {
  return (
  <Page renderToolbar={() => <NavBar title='Rezepte' navigator={navigator} backButton={true}/>}>
    <List
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
)};

const mapStateToProps = (state) => ({
  receips: state.receips
});

export default connect(mapStateToProps)(ReceipList);