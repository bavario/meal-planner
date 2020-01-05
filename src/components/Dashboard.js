import React from 'react';

import {
  Page
} from 'react-onsenui';

import NavBar from './NavBar';
//import LocationList from '../containers/LocationList';
//import AddLocation from '../containers/AddLocation';

const MainPage = ({navigator}) => (
  <Page renderToolbar={() => <NavBar title='Meal Planner' navigator={navigator} />}>
    Here comes the content
  </Page>
);

export default MainPage;