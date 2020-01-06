import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ListItem, Icon } from 'react-onsenui';
import { platform } from 'onsenui';

import * as Actions from '../redux/Actions';
//import WeatherPage from './WeatherPage';
//import WeatherIcon from '../components/WeatherIcon';

const styles = {
  weatherIcon: {
    color: '#fff',
    textAlign: 'center',
    width: platform.isAndroid() ? '36px' : '30px',
    height: platform.isAndroid() ? '36px' : '30px',
    lineHeight: platform.isAndroid() ? '36px' : '30px',
    borderRadius: '6px',
    fontSize: platform.isAndroid() ? '16px' : '14px'
  },
  buttons: {
    fontSize: '20px',
    color: '#cacaca'
  },
  removeButton: {
    margin: '0 10px 0 0'
  }
};

const ReceipListItem = ({
  id,
  name,
  rating,
  thump,
  navigator,
  actions
}) => {

  return (
    <ListItem onClick={() => {
      //navigator.pushPage({component: Receip});
    }} tappable>
      <div className='left'>
        <img class="list-item__thumbnail" src="https://placekitten.com/g/40/40" alt="{name}"/>
      </div>
      <div className='center'>
        <div className='list__item__title'>
          {name}
        </div>
        <div className='list__item__subtitle'>
          {rating}
        </div>
      </div>
      <div className='right' style={styles.buttons}>
        <div onClick={(e) => {
          e.stopPropagation();
          actions.removeReceip(id);
        }}>
          <Icon icon='trash' className='weather-button' style={styles.removeButton} />
        </div>
      </div>
    </ListItem>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(ReceipListItem);