import React from 'react';
import {RootSafeAreaView, RootView} from '_styles/rootView';
import {Container} from '_styles/DetailsModal';
import DetailsInput from '_organisms/DetailsInput';

const DetailsModal = ({route}) => {
  const {data} = route.params;

  return (
    <RootSafeAreaView>
      <RootView>
        <DetailsInput data={data} />
      </RootView>
    </RootSafeAreaView>
  );
};

export default DetailsModal;
