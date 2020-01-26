import React from 'react';

import {
  Col,
  Row,
  Page
} from 'react-onsenui';

import NavBar from './NavBar';
import DashboardItem from './DashboardItem';
import RecipeList from '../container/RecipeList';

const Dashboard = ({navigator}) => (
  <Page renderToolbar={() => <NavBar title='Meal Planner - Dashboard' navigator={navigator} />}>
    <Row>
      <Col width="100%">
        <DashboardItem onClick={() => {navigator.pushPage({component: RecipeList, key: 'RECIPE_LIST'})}} title="Rezepte" img="https://monaca.io/img/logos/download_image_onsenui_01.png" text="Rezepte ansehen, hinzufügen und bearbeiten" navigator={navigator}/>
      </Col>
      <Col width="100%">
        <DashboardItem title="Wochenplan" img="https://monaca.io/img/logos/download_image_onsenui_01.png" text="Rezepte ansehen, hinzufügen und bearbeiten"/>
      </Col>
    </Row>
    <Row>
      <Col width="100%">
        <DashboardItem title="Einkaufsliste" img="https://monaca.io/img/logos/download_image_onsenui_01.png" text="Rezepte ansehen, hinzufügen und bearbeiten"/>
      </Col>
    </Row>
  </Page>
);

export default Dashboard;