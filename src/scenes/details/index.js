import React from 'react';
import {RootSafeAreaView, RootView} from '_styles/rootView';
import {Container} from '_styles/DetailsModal';

const DetailsModal = () => {
  return (
    <RootSafeAreaView>
      <RootView>
        <Container></Container>
      </RootView>
    </RootSafeAreaView>
  );
};

export default DetailsModal;
