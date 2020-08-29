import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {scaleSize} from '_styles/mixins';

const Icons = (props) => {
  return (
    <Icon
      name={props.icon}
      size={scaleSize(30)}
      color={props.color ? '#b71c1c' : '#2e7d32'}
    />
  );
};

export default Icons;
