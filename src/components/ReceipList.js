import React from 'react';

import {
  List,
  ListItem,
  Page
} from 'react-onsenui';

import NavBar from './NavBar';

const ReceipList = ({navigator}) => (
  <Page renderToolbar={() => <NavBar title='Rezepte' navigator={navigator} backButton={true}/>}>
    <List
      dataSource={['Row 1', 'Row 2']}
      renderRow={(row) => (
        <ListItem>
          <div class="left">
            <img class="list-item__thumbnail" src="https://placekitten.com/g/40/40" alt="{row}"/>
          </div>
          <div class="center">
            <span class="list-item__title">{row}</span><span class="list-item__subtitle">{row}</span>
          </div>
        </ListItem>
      )}
    />
  </Page>
);

export default ReceipList;