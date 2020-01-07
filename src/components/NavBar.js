import React from 'react';

import {
  BackButton,
  Icon,
  Toolbar,
  ToolbarButton
} from 'react-onsenui';

const NavApp = ({title, navigator, backButton, searchFunc, addFunc}) => (
  <Toolbar>
    <div className='left'>
      {backButton ? <BackButton onClick={() => navigator.popPage()}>Zurück</BackButton> : <ToolbarButton>
          <Icon icon='md-menu' />
        </ToolbarButton>}
    </div>
    <div className='center'>{title}</div>
    <div className="right">
      {searchFunc && (
        <ToolbarButton onClick={searchFunc}>
          <Icon icon='md-search' />
        </ToolbarButton>
      )}
      {addFunc && (
        <ToolbarButton onClick={addFunc}>
          <Icon icon='md-plus' />
        </ToolbarButton>
      )}
    </div>
  </Toolbar>
);

export default NavApp;