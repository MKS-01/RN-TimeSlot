import React from 'react';
import {FlatList} from 'react-native';
import {RootSafeAreaView, RootView} from '_styles/rootView';
import SlotCard from '_organisms/SlotCard';
import {useStateValue} from '_services/store';

const HomeScreen = () => {
  const [{slotData}] = useStateValue();
  const renderItem = (value) => <SlotCard data={value} />;

  console.log('test', slotData);
  return (
    <RootSafeAreaView>
      <RootView>
        <FlatList
          data={slotData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </RootView>
    </RootSafeAreaView>
  );
};

export default HomeScreen;
