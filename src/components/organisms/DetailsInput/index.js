import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Input, TouchableBTN, Text, BTNContainer} from '_styles/DetailsModal';
import {GRAY_DARK} from '_styles/colors';
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
          data={
            firstName && lastName
              ? [
                  {
                    id: data.id,
                    slot: data.slot,
                    icon: data.icon,
                    details: {firstName, lastName, phone},
                  },
                ]
              : [
                  {
                    id: data.id,
                    slot: data.slot,
                    icon: data.icon,
                    details: null,
                  },
                ]
          }
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
