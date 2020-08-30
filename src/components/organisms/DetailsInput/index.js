import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Input, TouchableBTN, Text, BTNContainer} from '_styles/DetailsModal';
import {GRAY_DARK} from '_styles/colors';
import {useNavigation} from '@react-navigation/native';
import * as RootNavigation from '_navigations/root-navigation';
import {useStateValue} from '_services/store';

const DetailsInput = ({data}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const {details} = data;

    if (details !== null) {
      setFirstName(details.firstName);
      setLastName(details.lastName);
      setPhone(details.phone.toString());
    }
  }, []);

  return (
    <View>
      <Input
        onChangeText={(text) => setFirstName(text)}
        value={firstName}
        placeholder={'First Name'}
        placeholderTextColor={GRAY_DARK}
      />
      <Input
        onChangeText={(text) => setLastName(text)}
        value={lastName}
        placeholder={'Last Name'}
        placeholderTextColor={GRAY_DARK}
      />
      <Input
        onChangeText={(text) => setPhone(text)}
        value={phone}
        placeholder={'Phone'}
        placeholderTextColor={GRAY_DARK}
      />
      <BTNContainer>
        <BTN type={'CANCEL'} />
        <BTN
          type={'SAVE'}
          data={[
            {
              id: data.id,
              slot: data.slot,
              icon: data.icon,
              details: {firstName, lastName, phone},
            },
          ]}
        />
      </BTNContainer>
    </View>
  );
};

const BTN = (props) => {
  const [{slotData}, dispatch] = useStateValue();

  const {data} = props;

  const onCancel = () => {
    RootNavigation.goBack('Home');
  };

  const dummy = {
    slotData: [
      {id: 1, slot: '9AM - 10AM', icon: 'clock-time-nine', details: null},
      {
        id: 2,
        slot: '10AM - 11AM',
        icon: 'clock-time-ten',
        details: {firstName: 'Dev', lastName: 'Test', phone: 643743},
      },
      {
        id: 3,
        slot: '11AM - 12AM',
        icon: 'clock-time-eleven',
        details: {firstName: 'Dev', lastName: 'Test', phone: 643743},
      },
      {id: 4, slot: '12AM - 1PM', icon: 'clock-time-twelve', details: null},
      {id: 5, slot: '1PM - 2PM', icon: 'clock-time-one', details: null},
      {id: 6, slot: '2PM - 3PM', icon: 'clock-time-two', details: null},
      {id: 7, slot: '3PM - 4PM', icon: 'clock-time-three', details: null},
      {id: 8, slot: '4PM - 5PM', icon: 'clock-time-four', details: null},
    ],
  };
  const onSave = (data) => {
    let tempData = slotData;

    const newSlot = tempData.forEach((element, index) => {
      if (element.id === data[0].id) {
        tempData[index] = data[0];
      }
    });

    dispatch({
      type: 'addDetails',
      newSlotData: tempData,
    });
    console.log('knsknks', tempData);

    RootNavigation.navigate('Home');
  };

  return (
    <TouchableBTN
      type={props.type}
      onPress={props.type === 'SAVE' ? () => onSave(data) : onCancel}>
      <Text>{props.type}</Text>
    </TouchableBTN>
  );
};

export default DetailsInput;
