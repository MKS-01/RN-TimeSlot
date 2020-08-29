import React from 'react';
import {Card, Text} from '_styles/SlotCard';
import Icon from '_atoms/Icons';

const SlotCard = (props) => {
  return (
    <Card>
      <Icon icon={'clock-time-nine'} color={true} />
      <Text> 9AM - 10AM </Text>
    </Card>
  );
};

export default SlotCard;
