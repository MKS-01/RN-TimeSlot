import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>shs</Text>

      <Text style={{fontSize: 30}}>This is the HomeScreen screen!</Text>
      <Button
        onPress={() => navigation.navigate('Details')}
        title="Open Modal"
      />
    </View>
  );
};

export default HomeScreen;
