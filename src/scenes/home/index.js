import React from 'react';
import {FlatList} from 'react-native';
import {RootSafeAreaView, RootView} from '_styles/rootView';
import SlotCard from '_organisms/SlotCard';
import {useStateValue} from '_services/store';

const HomeScreen = () => {
  const [{slotData}] = useStateValue();
  const renderItem = (value) => <SlotCard data={value} />;

  return (
    <RootSafeAreaView>
      <RootView>
        <FlatList
          style={{marginTop: 10}}
          data={slotData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </RootView>
    </RootSafeAreaView>
  );
};

export default HomeScreen;
