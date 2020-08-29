import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {Input} from '_styles/DetailsModal';
import {useSafeArea} from 'react-native-safe-area-context';
import {GRAY_DARK} from '_styles/colors';

const DetailsInput = () => {
  // const [value, onChangeText] = useState('Useless Placeholder');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

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
    </View>
  );
};

export default DetailsInput;
