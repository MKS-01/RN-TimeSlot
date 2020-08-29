import React from 'react';
import {View, Text, Button} from 'react-native';
import {RootSafeAreaView, RootScrollView} from '_styles/rootView';
import {useNavigation} from '@react-navigation/native';
import SlotCard from '_organisms/SlotCard';

// import Icon from 'react-native-vector-icons/FontAwesome';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <RootSafeAreaView>
      <RootScrollView>
        {/* {myIcon} */}
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
