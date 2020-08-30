import React from 'react';
import {View} from 'react-native';
import {RootSafeAreaView, RootView} from '_styles/rootView';
import {Text, Container, Button, BtnText} from '_styles/PhotoGallery';

const Photo = () => {
  return (
    <RootSafeAreaView>
      <RootView>
        <Text>Photo Gallery</Text>
        <Container>
          <Button onPress={() => console.log('')}>
            <BtnText>Open</BtnText>
          </Button>
        </Container>
      </RootView>
    </RootSafeAreaView>
  );
};

export default Photo;
