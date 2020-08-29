import React from 'react';
import {RootSafeAreaView, RootView} from '_styles/rootView';
import {Container} from '_styles/DetailsModal';
import DetailsInput from '_organisms/DetailsInput';

const DetailsModal = () => {
  return (
    <RootSafeAreaView>
      <RootView>
        <DetailsInput />
      </RootView>
    </RootSafeAreaView>
  );
};

export default DetailsModal;
