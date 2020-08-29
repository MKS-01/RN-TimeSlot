import React from 'react';
import {Card, Text} from '_styles/SlotCard';
import Icon from '_atoms/Icons';
import {useNavigation} from '@react-navigation/native';

const SlotCard = ({data}) => {
  const navigation = useNavigation();

  const {item} = data;
  const {details} = item;
  return (
    <Card
      booked={details !== null ? true : false}
      onPress={() => navigation.navigate('Details', {data: item})}>
      <Icon icon={item.icon} color={details !== null ? true : false} />
      <Text> {item.slot}</Text>
    </Card>
  );
};

export default SlotCard;
