import React from 'react';
import {View, Text, Button} from 'react-native';
import {RootSafeAreaView, RootScrollView} from '_styles/rootView';
import {useNavigation} from '@react-navigation/native';
import SlotCard from '_atoms/SlotCard';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <RootSafeAreaView>
      <RootScrollView>
        {/* <Button
          onPress={() => navigation.navigate('Details')}
          title="Open Modal"
        /> */}
        <SlotCard />
      </RootScrollView>
    </RootSafeAreaView>
  );
};

export default HomeScreen;
