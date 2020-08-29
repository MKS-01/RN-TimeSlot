// import React from 'react';
import {View, Text} from 'react-native';

// const DetailScreen = () => {
//   return (
//     <View>
//       <Text>s</Text>
//     </View>
//   );
// };

// export default DetailScreen;

import React from 'react';

import {RootSafeAreaView, RootView} from '_styles/rootView';
import {
  Container,
  EmptyView,
  TouchableText,
  Touchable,
} from '_styles/DetailsModal';
// import Title from '_components/atoms/title';
// import IconButton from '_atoms/icon-button';

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
