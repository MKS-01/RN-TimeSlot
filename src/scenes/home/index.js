import React from 'react';
import {FlatList} from 'react-native';
import {RootSafeAreaView, RootView} from '_styles/rootView';
import SlotCard from '_organisms/SlotCard';
import {useStateValue} from '_services/store';
import {storeValue, retriveValue, removeValue} from '_utils/localStorage';

const HomeScreen = () => {
  const [data, setData] = React.useState(null);

  const [{slotData}, dispatch] = useStateValue();

  React.useEffect(() => {
    const initialAsync = async () => {
      let prevsData;
      prevsData = await retriveValue('cardData');

      if (typeof prevsData !== 'undefined') {
        setData(JSON.parse(prevsData));
        dispatch({
          type: 'addDetails',
          newSlotData: JSON.parse(prevsData),
        });
      }
    };

    initialAsync();
  }, []);

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
