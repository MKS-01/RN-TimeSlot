import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Input, TouchableBTN, Text, BTNContainer} from '_styles/DetailsModal';
import {GRAY_DARK} from '_styles/colors';
import {useNavigation} from '@react-navigation/native';
import * as RootNavigation from '_navigations/root-navigation';

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
        <BTN type={'SAVE'} />
      </BTNContainer>
    </View>
  );
};

const BTN = (props) => {
  const navigation = useNavigation();

  const onCancel = () => {
    RootNavigation.goBack();
  };
  const onSave = () => {
    RootNavigation.navigate('Home');
  };

  return (
    <TouchableBTN
      type={props.type}
      onPress={props.type === 'SAVE' ? onSave : onCancel}>
      <Text>{props.type}</Text>
    </TouchableBTN>
  );
};

export default DetailsInput;
