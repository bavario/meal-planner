import React from 'react';
import { Toolbar, ToolbarButton, Icon, Page, } from 'react-onsenui';
import './App.css';

function App() {
  return (
    <Page renderToolbar={this.renderToolbar.bind(this)}></Page>
  );
}

export default App;
