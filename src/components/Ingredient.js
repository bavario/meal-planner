import React from 'react';

const Ingredient = ({ name, amount, unit }) => {
  return (
    <div style={{display: 'flex', padding: '5px 0', borderBottom: '1px solid #f5f5f5'}}>
        <div style={{flex: 1}}>{amount} {unit}</div>
        <div style={{flex: 2}}>{name}</div>
    </div>    
  );
}

export default Ingredient;