import React from 'react';

import {
  Card
} from 'react-onsenui';

const DashboardItem = ({title, img, text, onClick}) => {
  return (
    <Card onClick={onClick}>
      <img src={img} alt={title}/>
      <div class='title'>{title}</div>
      <p>{text}</p>
    </Card>
  )
}

export default DashboardItem;