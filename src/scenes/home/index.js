import React from 'react';
import {FlatList} from 'react-native';
import {RootSafeAreaView, RootView} from '_styles/rootView';
import SlotCard from '_organisms/SlotCard';
import {sampleData} from './data';

const HomeScreen = () => {
  const renderItem = (value) => <SlotCard data={value} />;

  return (
    <RootSafeAreaView>
      <RootView>
        <FlatList
          data={sampleData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </RootView>
    </RootSafeAreaView>
  );
};

export default HomeScreen;
