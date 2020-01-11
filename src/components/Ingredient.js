import React from 'react';
import styles from './Ingredient.module.scss';

const Ingredient = ({ name, amount, unit }) => {
  return (
    <div className={styles.row}>
        <div className={styles.col1}>{amount} {unit}</div>
        <div className={styles.col2}>{name}</div>
    </div>    
  );
}

export default Ingredient;